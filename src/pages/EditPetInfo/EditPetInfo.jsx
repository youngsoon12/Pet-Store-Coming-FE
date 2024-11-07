/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
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
  /////////////////////////////////////////
  // api 연동

  const token = getCookie('token');
  const userInfo = decodeToken(token);

  // 수정할 반려견 정보 받아오기
  const { state } = useLocation();
  const { petInfo } = state;
  useEffect(() => {
    console.log(petInfo);
  }, []);

  const navigate = useNavigate();

  const userId = userInfo.userId;
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const todayString = year + '-' + month + '-' + day;

  const [originCanidaeRequest, setOriginCanidaeRequest] = useState({
    orgCanidae: {
      id: petInfo.canidae.id,
      userId: userId,
      name: petInfo.canidae.name,
      birth: petInfo.canidae.birth,
      breed: petInfo.canidae.breed,
      gender: petInfo.canidae.gender,
      weight: petInfo.canidae.weight,
      isPrimary: petInfo.canidae.isPrimary,
    },

    interestProduct: [...petInfo.interstProductList],
  });
  const [canidaeRequest, setCanidaeRequest] = useState({
    canidae: {
      id: petInfo.id,
      userId: userId,
      weight: petInfo.weight,
    },
    intersetUpdateProduct: [],
  });

  // canidaeRequest 구조분해할당
  const {
    orgCanidae: { name, birth, breed, gender, weight, isPrimary },
    interestProduct,
  } = originCanidaeRequest;

  const { canidae, intersetUpdateProduct } = canidaeRequest;

  const handleChangePrimary = (isPrimary) => {
    setOriginCanidaeRequest((prev) => ({
      ...prev,
      orgCanidae: {
        ...prev.orgCanidae,
        isPrimary: isPrimary,
      },
    }));
    setCanidaeRequest((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        isPrimary: isPrimary,
      },
    }));
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setOriginCanidaeRequest((prev) => ({
      ...prev,
      orgCanidae: {
        ...prev.orgCanidae,
        [name]: name === 'weight' ? parseFloat(value) : value,
      },
    }));
    setCanidaeRequest((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        [name]: name === 'weight' ? parseFloat(value) : value,
      },
    }));
  };

  const handleChangeGender = (gender) => {
    setOriginCanidaeRequest((prev) => ({
      ...prev,
      orgCanidae: {
        ...prev.orgCanidae,
        gender: gender,
      },
    }));
    setCanidaeRequest((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        gender: gender,
      },
    }));
  };

  // 관심 카테고리 //
  // 카테고리 정보 가져오기 (전역 state)
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategory = useRecoilValue(isSubCategoryInfoState);

  const handleCategorySelect = (categoryId) => {
    console.log(canidaeRequest.intersetUpdateProduct);
    setOriginCanidaeRequest((prevRequest) => {
      const isAlreadySelected =
        prevRequest.interestProduct.includes(categoryId);

      // 5개 초과 선택 방지
      if (!isAlreadySelected && prevRequest.interestProduct.length >= 5) {
        // alert('최대 5개까지만 선택할 수 있습니다.');
        return prevRequest;
      }

      // 선택 또는 해제 처리
      // const updatedInterestProduct = isAlreadySelected
      //   ? prevRequest.interestProduct.filter((id) => id !== categoryId)
      //   : [...prevRequest.interestProduct, categoryId];
      let updatedInterestProduct;
      if (isAlreadySelected) {
        // 선택 해제
        updatedInterestProduct = prevRequest.interestProduct.filter(
          (id) => id !== categoryId
        );
        setCanidaeRequest((prev) => ({
          ...prev,
          intersetUpdateProduct: [
            ...prev.intersetUpdateProduct,
            { id: petInfo.id, subCategoryId: categoryId, updateStatus: '' },
          ],
        }));
      } else {
        // 선택
        updatedInterestProduct = [...prevRequest.interestProduct, categoryId];
        setCanidaeRequest((prev) => ({
          ...prev,
          intersetUpdateProduct: [
            ...prev.intersetUpdateProduct,
            { id: petInfo.id, subCategoryId: categoryId, updateStatus: '' },
          ],
        }));
      }
      return {
        ...prevRequest,
        interestProduct: updatedInterestProduct,
      };
    });
  };

  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState(
    petInfo.canidae.profileImageUrl
  ); // 화면에 보여주는 용도
  const [profileImage, setProfileImage] = useState(''); // 서버에 보내는 용도

  const handleCameraClick = () => {
    document.getElementById('profileImg').click();
  };

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    if (file) {
      setProfileImage(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);

      console.log(reader);
    }
  };
  // 관심 카테고리
  // const subCategory = useRecoilValue()

  // useEffect(() => {
  //   console.log(canidaeRequest);
  // }, [canidaeRequest]);

  // 서버에 수정된 반려견 정보 보내기
  const editPet = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(canidaeRequest));
    const formData = new FormData();

    formData.append(
      'canidaeRequest',
      new Blob([JSON.stringify(canidaeRequest)], { type: 'application/json' })
    );

    // if (profileImage) {
    formData.append('newProfileImage', profileImage);
    // }

    // for (const [key, value] of formData.entries()) {
    //   console.log(`[ ${key}: ]`);
    //   console.log(value);
    // }
    for (let key of formData.keys()) {
      console.log(`key : ${key}`);
    }

    for (let value of formData.values()) {
      console.log(`value : ${value}`);
    }

    const baseURL = import.meta.env.VITE_API_URL;
    const url = `${baseURL}/canidae/update`;

    // console.log(url);

    try {
      const response = await axios.put(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/my');
    } catch (error) {
      console.log(error);
    }

    // const headers = { 'Content-type': 'multipart/form-data' };
    // async function postPet() {
    //   for (let key of formData.keys()) {
    //     console.log(`key : ${key}`);
    //   }

    //   for (let value of formData.values()) {
    //     console.log(`value : ${value}`);
    //   }

    //   try {
    //     const response = await axios.post(url, formData, {
    //       headers: {
    //         'Content-type': 'multipart/form-data',
    //       },
    //     });
    //     console.log(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // postPet();
  };
  return (
    <form css={styles.container} onSubmit={editPet}>
      <div css={styles.imgContainer}>
        <input
          type="file"
          id="profileImg"
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImgUpload}
          // required
        />
        <img
          src={selectedImage || Camera}
          alt="Camera Icon"
          css={styles.cameraIcon}
          onClick={handleCameraClick}
          required
        />
      </div>

      <div css={styles.inputContainer}>
        <label css={styles.label}>대표여부</label>
        <div css={styles.genderButtonContainer}>
          <Button
            text="대표"
            width={220}
            height={50}
            onClick={() => handleChangePrimary(1)}
            theme={isPrimary ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
          <Button
            text="일반"
            width={220}
            height={50}
            onClick={() => handleChangePrimary(0)}
            theme={!isPrimary ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
        </div>
        <label css={styles.label}>이름</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.꼬미"
          name="name"
          value={originCanidaeRequest.orgCanidae.name}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>견종</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.말티즈"
          name="breed"
          value={originCanidaeRequest.orgCanidae.breed}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>생일</label>
        <input
          type="date"
          max={todayString}
          css={styles.input}
          name="birth"
          value={originCanidaeRequest.orgCanidae.birth}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>성별</label>
        <div css={styles.genderButtonContainer}>
          <Button
            text="남아"
            width={220}
            height={50}
            onClick={() => handleChangeGender(1)}
            theme={gender ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
          <Button
            text="여아"
            width={220}
            height={50}
            onClick={() => handleChangeGender(0)}
            theme={!gender ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
        </div>

        <label css={styles.label}>몸무게 (kg)</label>
        <input
          type="number"
          css={styles.input}
          placeholder="ex.3.5"
          name="weight"
          value={originCanidaeRequest.orgCanidae.weight}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>관심 카테고리</label>

        {mainCategory.map((main) => (
          <CategoryButton
            key={main.id}
            label={main.name}
            categories={subCategory
              .filter((sub) => sub.mainCategoryId === main.id)
              .map((sub) => ({ id: sub.id, name: sub.name }))}
            selectedCategories={originCanidaeRequest.interestProduct}
            handleCategorySelect={handleCategorySelect}
            disableUnselected={originCanidaeRequest.interestProduct.length >= 5}
          />
        ))}

        <div css={styles.registerButton}>
          <Button
            text="수정완료"
            width={100}
            height={50}
            theme="black"
            fontSize={16}
            fontWeight={500}
            // onClick={registerPet}
          />
        </div>
      </div>
    </form>
  );
}
