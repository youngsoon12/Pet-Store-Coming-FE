/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Button from '@components/Global/Button/Button';
import Camera from '@assets/images/PetProfile/camera.svg';
import { styles } from './PetProfile.style';
import CategoryButton from '@components/CategoryButton/CategoryButton';
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '@recoil/atom/category';
import { decodeToken, getCookie } from '@util/configCookie';

export default function PetProfilePage() {
  const location = useLocation();
  const { state } = location;

  ///////////////////////////////////////////////////////////////
  // api 연동

  const navigate = useNavigate();

  const token = state?.signUp ? '' : getCookie('token');
  const userInfo = state?.signUp ? state.userInfo : decodeToken(token);

  const userId = userInfo.userId;
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const todayString = year + '-' + month + '-' + day;

  const [canidaeRequest, setCanidaeRequest] = useState({
    canidae: {
      userId: userId,
      name: '',
      birth: '',
      breed: '',
      gender: 1,
      weight: undefined,
      isPrimary: false,
    },
    interestProduct: [],
  });

  // canidaeRequest 구조분해할당
  const {
    canidae: { name, birth, breed, gender, weight },
    interestProduct,
  } = canidaeRequest;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCanidaeRequest((prev) => ({
      ...prev,
      canidae: {
        ...prev.canidae,
        [name]: name === 'weight' ? parseFloat(value) : value,
      },
    }));
  };

  // 관심 카테고리 //
  // 카테고리 정보 가져오기 (전역 state)
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategory = useRecoilValue(isSubCategoryInfoState);

  const handleCategorySelect = (categoryId) => {
    setCanidaeRequest((prevRequest) => {
      const isAlreadySelected =
        prevRequest.interestProduct.includes(categoryId);

      // 5개 초과 선택 방지
      if (!isAlreadySelected && prevRequest.interestProduct.length >= 5) {
        alert('최대 5개까지만 선택할 수 있습니다.');
        return prevRequest;
      }

      // 선택 또는 해제 처리
      const updatedInterestProduct = isAlreadySelected
        ? prevRequest.interestProduct.filter((id) => id !== categoryId)
        : [...prevRequest.interestProduct, categoryId];

      return {
        ...prevRequest,
        interestProduct: updatedInterestProduct,
      };
    });
  };

  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState(null); // 화면에 보여주는 용도
  const [profileImage, setProfileImage] = useState(''); // 서버에 보내는 용도

  const handleCameraClick = () => {
    document.getElementById('profileImg').click();
  };

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

  // 서버에 반려견 등록
  const registerPet = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append(
      'canidaeRequest',
      new Blob([JSON.stringify(canidaeRequest)], { type: 'application/json' })
    );

    if (profileImage) {
      formData.append('profilImage', profileImage);
    }

    for (const [key, value] of formData.entries()) {
      // console.log(`[ ${key}: ]`);
      // console.log(value);
    }

    const baseURL = import.meta.env.VITE_API_URL;
    const url = `${baseURL}/canidae/insert`;

    try {
      const response = await axios.post(url, formData, {
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
    <form css={styles.container} onSubmit={registerPet}>
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
          loading="lazy"
        />
      </div>
      <div css={styles.inputContainer}>
        <label css={styles.label}>이름을 입력해주세요</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.꼬미"
          name="name"
          value={canidaeRequest.canidae.name}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>견종을 등록하세요</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.말티즈"
          name="breed"
          value={canidaeRequest.canidae.breed}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>생일을 입력해주세요</label>
        <input
          type="date"
          max={todayString}
          css={styles.input}
          name="birth"
          value={canidaeRequest.canidae.birth}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.label}>성별을 선택해주세요</label>
        <div css={styles.genderButtonContainer}>
          <Button
            text="남아"
            width={220}
            height={50}
            onClick={() =>
              setCanidaeRequest((prev) => ({
                ...prev,
                canidae: {
                  ...prev.canidae,
                  gender: 1,
                },
              }))
            }
            theme={gender ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
          <Button
            text="여아"
            width={220}
            height={50}
            onClick={() =>
              setCanidaeRequest((prev) => ({
                ...prev,
                canidae: {
                  ...prev.canidae,
                  gender: 0,
                },
              }))
            }
            theme={!gender ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            type="button"
          />
        </div>

        <label css={styles.label}>몸무게를 입력해주세요 (kg)</label>
        <input
          type="number"
          css={styles.input}
          placeholder="ex.3.5"
          name="weight"
          value={canidaeRequest.canidae.weight}
          onChange={handleChangeInput}
          required
        />

        <label css={styles.titleLabel}>
          우리아이에게 가장 필요한 제품이 있나요? 관심있는 카테고리를
          골라보세요!
        </label>
        <div css={styles.notice}>
          (최대 <strong>5개</strong> 선택 가능)
        </div>

        {mainCategory.map((main) => (
          <CategoryButton
            key={main.id}
            label={main.name}
            categories={subCategory
              .filter((sub) => sub.mainCategoryId === main.id)
              .map((sub) => ({ id: sub.id, name: sub.name }))}
            selectedCategories={canidaeRequest.interestProduct}
            handleCategorySelect={handleCategorySelect}
            disableUnselected={canidaeRequest.interestProduct.length >= 5}
          />
        ))}
        <div css={styles.registerButton}>
          <Button
            text="등록"
            width={100}
            height={50}
            theme="black"
            fontSize={16}
            fontWeight={500}
          />
        </div>
      </div>
    </form>
  );
}
