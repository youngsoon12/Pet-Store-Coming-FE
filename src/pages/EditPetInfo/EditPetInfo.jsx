/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import Button from '@components/Global/Button/Button';
import Camera from '@assets/images/PetProfile/camera.svg';
import { styles } from './EditPetInfo.style';
import CategoryButton from '@components/CategoryButton/CategoryButton';
import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '@recoil/atom/category';
import { decodeToken, getCookie } from '@util/configCookie';

export default function EditPetInfo() {
  const token = getCookie('token');
  const userInfo = decodeToken(token);

  // 카테고리 정보 가져오기 (전역 state)
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategory = useRecoilValue(isSubCategoryInfoState);

  // 반려견 정보 받아오기
  const { petInfo } = useLocation().state;
  const navigate = useNavigate();
  const inputFileRef = useRef(null);

  // 사용자가 기존에 작성했던 내용
  const originalCanidaeInfo = {
    originalCanidae: {
      id: petInfo.canidae.id,
      userId: userInfo.userId,
      name: petInfo.canidae.name,
      birth: petInfo.canidae.birth,
      breed: petInfo.canidae.breed,
      gender: petInfo.canidae.gender,
      weight: petInfo.canidae.weight,
      isPrimary: petInfo.canidae.isPrimary,
    },

    originalInterstProduct: [...petInfo.interstProductList],
  };

  // 사용자가 수정한 입력 필드 (초기값 지정 - id, userId, isPrimary, gender)
  const [updateCanidaeInfo, setUpdateCanidaeInfo] = useState({
    canidae: {
      id: petInfo.canidae.id,
      userId: userInfo.userId,
      isPrimary: originalCanidaeInfo.originalCanidae.isPrimary,
      gender: originalCanidaeInfo.originalCanidae.gender,
    },
    intersetUpdateProduct: [],
  });

  // 선택된 카테고리 종류 (화면에 보여지기 위함)
  const [selectedCategories, setSelectedCategories] = useState(
    originalCanidaeInfo.originalInterstProduct
  );

  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState(
    petInfo.canidae.profileImageUrl
  );

  // 화면에 보여주는 용도
  const [profileImage, setProfileImage] = useState(''); // 서버에 보내는 용도

  // Input Date 타입 마지막 날짜를 현재 날짜로 설정하기 위한 변수 선언
  const TODAY = new Date();
  const YEAR = TODAY.getFullYear();
  const MONTH = ('0' + (TODAY.getMonth() + 1)).slice(-2);
  const DAY = ('0' + TODAY.getDate()).slice(-2);
  const MAX_TODAY_STRING = YEAR + '-' + MONTH + '-' + DAY;

  // 대표 반려견 상태를 변경하는 함수
  const handleChangePrimary = (value) => {
    setUpdateCanidaeInfo((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        isPrimary: value,
      },
    }));
  };

  // 반려견의 성별 상태를 변경하는 함수
  const handleChangeGender = (value) => {
    setUpdateCanidaeInfo((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        gender: value,
      },
    }));
  };

  // 이름, 견종, 몸무게 입력폼 onChange 이벤트 핸들러
  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    // 몸무게 입력은 숫자와 소수점만 입력 가능
    if (name === 'weight' && !/^\d*\.?\d*$/.test(value)) {
      return;
    }

    // input 값 변경 시 state 값 변환
    setUpdateCanidaeInfo((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        [name]: value,
      },
    }));
  };

  // 관심 상품 수정 핸들러
  const handleCategorySelect = (subCategoryId) => {
    setUpdateCanidaeInfo((prev) => {
      const existingCategory = originalCanidaeInfo.originalInterstProduct.find(
        (item) => item.subCategoryId === subCategoryId
      );

      const updatedProducts = [...prev.intersetUpdateProduct];
      let updatedSelectedCategories = [...selectedCategories];

      // 선택된 카테고리가 5개 이상인 경우 추가하지 않음
      if (
        !existingCategory &&
        updatedSelectedCategories.length >= 5 &&
        !updatedSelectedCategories.some(
          (item) => item.subCategoryId === subCategoryId
        )
      ) {
        alert('최대 5개의 카테고리만 선택할 수 있습니다.');
        return prev;
      }

      if (existingCategory) {
        // 기존에 있던 카테고리를 제거할 때
        const deleteIndex = updatedProducts.findIndex(
          (item) =>
            item.subCategoryId === subCategoryId &&
            item.updateStatus === 'DELETE'
        );

        if (deleteIndex > -1) {
          // DELETE 상태에 있는 항목을 다시 추가하려고 할 때
          if (updatedSelectedCategories.length >= 5) {
            alert('최대 5개의 카테고리만 선택할 수 있습니다.');
            return prev;
          }
          updatedProducts.splice(deleteIndex, 1); // DELETE 상태 제거
          updatedSelectedCategories.push(existingCategory); // 선택된 카테고리에 다시 추가
        } else {
          // DELETE 상태 추가
          updatedProducts.push({
            id: originalCanidaeInfo.originalCanidae.id,
            subCategoryId,
            updateStatus: 'DELETE',
          });
          updatedSelectedCategories = updatedSelectedCategories.filter(
            (item) => item.subCategoryId !== subCategoryId
          ); // 선택된 카테고리에서 제거
        }
      } else {
        // 새로운 카테고리를 추가할 때
        const addIndex = updatedProducts.findIndex(
          (item) =>
            item.subCategoryId === subCategoryId && item.updateStatus === 'ADD'
        );

        if (addIndex > -1) {
          // 추가된 상태를 제거하는 경우
          updatedProducts.splice(addIndex, 1);
          updatedSelectedCategories = updatedSelectedCategories.filter(
            (item) => item.subCategoryId !== subCategoryId
          );
        } else {
          // ADD 상태 추가
          updatedProducts.push({
            id: originalCanidaeInfo.originalCanidae.id,
            subCategoryId,
            updateStatus: 'ADD',
          });
          updatedSelectedCategories.push({ subCategoryId });
        }
      }

      setSelectedCategories(updatedSelectedCategories);

      return {
        ...prev,
        intersetUpdateProduct: updatedProducts,
      };
    });
  };

  // 이미지 업로드 관련 핸들러
  const handleImgUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 서버 제출 이베튼
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 반려견의 기존 정보와 같은 입력 필드의 값은 삭제
    setUpdateCanidaeInfo((prev) => {
      const filteredCanidae = { ...prev.canidae };

      // 기존 값과 동일한 프로퍼티 제거
      Object.keys(filteredCanidae).forEach((key) => {
        if (key !== 'weight') {
          if (
            filteredCanidae[key] === originalCanidaeInfo.originalCanidae[key]
          ) {
            delete filteredCanidae[key];
          }
        } else {
          if (
            Number(filteredCanidae[key]) ===
            originalCanidaeInfo.originalCanidae.weight
          ) {
            delete filteredCanidae[key];
          }
        }
      });

      return {
        ...prev,
        canidae: {
          ...filteredCanidae,
          isPrimary: prev.canidae.isPrimary,
          gender: prev.canidae.gender,
          id: prev.canidae.id,
          userId: prev.canidae.userId,
        },
      };
    });

    // 서버에 전달하기 위한 formData 구성
    const formData = new FormData(); // formData 인스턴스 선언

    // 반려견 정보, 관심 상품 수정 정보 저장
    formData.append(
      'canidaeRequest',
      new Blob([JSON.stringify(updateCanidaeInfo)], {
        type: 'application/json',
      })
    );

    // 반려견 대표 이미지를 변경했을 경우 -> formData에 추가
    if (profileImage) {
      formData.append('newProfileImage', profileImage);
    }

    // console.log(updateCanidaeInfo);

    try {
      const resposne = await axios.put(
        `${import.meta.env.VITE_API_URL}/canidae/update`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      navigate('/my');
    } catch (error) {
      console.log(error);
    }
  };

  // // 서버에 수정된 반려견 정보 보내기
  // const editPet = async (e) => {

  //   const baseURL = import.meta.env.VITE_API_URL;
  //   const url = `${baseURL}/canidae/update`;

  //   // console.log(url);

  //   try {
  //     const response = await axios.put(url, formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     navigate('/my');
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // const headers = { 'Content-type': 'multipart/form-data' };
  //   // async function postPet() {
  //   //   for (let key of formData.keys()) {
  //   //     console.log(`key : ${key}`);
  //   //   }

  //   //   for (let value of formData.values()) {
  //   //     console.log(`value : ${value}`);
  //   //   }

  //   //   try {
  //   //     const response = await axios.post(url, formData, {
  //   //       headers: {
  //   //         'Content-type': 'multipart/form-data',
  //   //       },
  //   //     });
  //   //     console.log(response.data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // }
  //   // postPet();
  // };

  return (
    <form css={styles.container} onSubmit={handleSubmit}>
      {/* 이미지 input */}
      <div css={styles.imgContainer}>
        <input
          type="file"
          id="profileImage"
          style={{ display: 'none' }}
          accept="image/*"
          ref={inputFileRef}
          onChange={handleImgUpload}
        />
        <img
          src={selectedImage || Camera}
          alt="Camera Icon"
          css={styles.cameraIcon}
          onClick={() => inputFileRef.current.click()}
        />
      </div>

      {/* 기본 input field */}
      <div css={styles.inputContainer}>
        {/* 대표 반려견 선택 여부 field */}
        <div>
          <label css={styles.label}>대표여부</label>
          <div css={styles.genderButtonContainer}>
            <Button
              text="대표"
              width={220}
              padding={'8px'}
              theme={updateCanidaeInfo.canidae.isPrimary ? 'black' : null}
              onClick={() => handleChangePrimary(true)}
              border={'1px solid rgba(154, 154, 154, 0.6)'}
              fontSize={14}
              fontWeight={500}
              type="button"
            />

            <Button
              text="일반"
              width={220}
              theme={!updateCanidaeInfo.canidae.isPrimary ? 'black' : null}
              onClick={() => handleChangePrimary(false)}
              fontSize={14}
              border={'1px solid rgba(154, 154, 154, 0.6)'}
              fontWeight={500}
              type="button"
            />
          </div>
        </div>

        {/* 이름 입력 field */}
        <div>
          <label css={styles.label}>이름</label>
          <input
            type="text"
            css={styles.input}
            placeholder={originalCanidaeInfo.originalCanidae.name || 'ex.꼬미'}
            name="name"
            value={updateCanidaeInfo.canidae.name || ''}
            onChange={handleChangeInput}
            // value={originCanidaeRequest.orgCanidae.name}
            // onChange={handleChangeInput}
            // required
          />
        </div>

        {/* 견종 작성 입력 field */}
        <div>
          <label css={styles.label}>견종</label>
          <input
            type="text"
            css={styles.input}
            placeholder={
              originalCanidaeInfo.originalCanidae.breed || 'ex.말티즈'
            }
            name="breed"
            value={updateCanidaeInfo.canidae.breed || ''}
            onChange={handleChangeInput}
            // required
          />
        </div>

        {/* 생일 입력 field */}
        <div>
          <label css={styles.label}>생일</label>
          <input
            type="date"
            max={MAX_TODAY_STRING}
            css={styles.input}
            name="birth"
            value={originalCanidaeInfo.originalCanidae.birth}
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label css={styles.label}>성별</label>
          <div css={styles.genderButtonContainer}>
            <Button
              text="남아"
              width={220}
              padding={'8px'}
              onClick={() => handleChangeGender(true)}
              theme={updateCanidaeInfo.canidae.gender ? 'black' : null}
              fontSize={14}
              fontWeight={500}
              border={'1px solid rgba(154, 154, 154, 0.6)'}
              type="button"
            />

            <Button
              text="여아"
              width={220}
              onClick={() => handleChangeGender(false)}
              theme={!updateCanidaeInfo.canidae.gender ? 'black' : null}
              fontSize={14}
              fontWeight={500}
              border="1px solid rgba(154, 154, 154, 0.6)"
              type="button"
            />
          </div>
        </div>

        <div>
          <label css={styles.label}>몸무게 (kg)</label>
          <input
            type="text"
            css={styles.input}
            placeholder={originalCanidaeInfo.originalCanidae.weight || 'ex.3.5'}
            name="weight"
            value={updateCanidaeInfo.canidae.weight || ''}
            onChange={handleChangeInput}
            // required
          />
        </div>

        {/* 관심 카테고리 */}
        <div>
          <label css={styles.label}>관심 카테고리</label>
          {mainCategory.map((main) => {
            return (
              <CategoryButton
                key={main.id}
                label={main.name}
                categories={subCategory
                  .filter((sub) => sub.mainCategoryId === main.id)
                  .map((sub) => ({ id: sub.id, name: sub.name }))}
                selectedCategories={selectedCategories}
                handleCategorySelect={handleCategorySelect}
              />
            );
          })}
        </div>

        <Button
          text="수정완료"
          theme="black"
          height={35}
          fontSize={16}
          fontWeight={500}
          // onClick={registerPet}
        />
      </div>
    </form>
  );
}
