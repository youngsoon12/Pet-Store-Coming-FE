/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import Button from '../../components/global/Button/Button';
import Camera from '../../assets/images/PetProfile/camera.svg';
import { styles } from './PetProfile.style';
import CategoryButton from '../../components/CategoryButton/CategoryButton';
import TextInput from '../../components/Global/Input/Input';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

export default function PetProfilePage() {
  // const [gender, setGender] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState({
    snack: [],
    clothes: [],
    stroller: [],
    supplies: [],
  });
  // 선택된 카테고리의 총 개수 계산
  const totalSelectedCategories = Object.values(selectedCategories).reduce(
    (total, categoryArray) => total + categoryArray.length,
    0
  );
  const handleCategorySelect = (category, categoryType) => {
    setSelectedCategories((prev) => {
      const isSelected = prev[categoryType].includes(category);
      return {
        ...prev,
        [categoryType]: isSelected
          ? prev[categoryType].filter((item) => item !== category)
          : [...prev[categoryType], category],
      };
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    document.getElementById('profileImg').click();
  };

  const categoryData = [
    {
      label: '간식/사료',
      type: 'snack',
      items: ['영양제', '수제간식', '덴탈껌', '건식사료', '습식사료'],
    },
    {
      label: '의류',
      type: 'clothes',
      items: ['상의', '원피스', '아우터/우비', '수영복', '악세사리'],
    },
    {
      label: '유모차',
      type: 'stroller',
      items: ['소형견', '대형견', '다인승', '쿠션'],
    },
    {
      label: '용품',
      type: 'supplies',
      items: [
        '미용용품',
        '장난감',
        '방석',
        '위생용품',
        '산책용품',
        '가방/카시트',
        '급식기/급수',
      ],
    },
  ];
  // useEffect(() => {
  const userId = '22ef481b-11e6-487c-b5e1-257efb4895a2';
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const todayString = year + '-' + month + '-' + day;
  // }, []);

  const [canidaeRequest, setCanidaeRequest] = useState({
    canidae: {
      userId: userId,
      name: '',
      birth: '',
      breed: '',
      gender: 1,
      weight: null,
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

  // 이미지 업로드
  const [selectedImage, setSelectedImage] = useState(null); // 화면에 보여주는 용도
  const [profileImage, setProfileImage] = useState(''); // 서버에 보내는 용도
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

  // 서버에 반려견 등록
  const registerPet = async (e) => {
    const formData = new FormData();

    e.preventDefault();

    formData.append(
      'canidaeRequest',
      new Blob([JSON.stringify(canidaeRequest)], { type: 'application/json' })
    );

    if (profileImage) {
      formData.append('profilImage', profileImage);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`[ ${key}: ]`);
      console.log(value);
    }

    const baseURL = import.meta.env.VITE_API_URL;
    const url = `${baseURL}/canidae/insert`;

    try {
      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
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
    <div css={styles.container}>
      <input
        type="file"
        id="profileImg"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleImgUpload}
      />
      <img
        src={selectedImage || Camera}
        alt="Camera Icon"
        css={styles.cameraIcon}
        onClick={handleCameraClick}
      />

      <div css={styles.inputContainer}>
        <label css={styles.label}>이름을 입력해주세요</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.꼬미"
          name="name"
          value={canidaeRequest.canidae.name}
          onChange={handleChangeInput}
        />

        <label css={styles.label}>견종을 등록하세요</label>
        <input
          type="text"
          css={styles.input}
          placeholder="ex.말티즈"
          name="breed"
          value={canidaeRequest.canidae.breed}
          onChange={handleChangeInput}
        />

        <label css={styles.label}>생일을 입력해주세요</label>
        <input
          type="date"
          max={todayString}
          css={styles.input}
          name="birth"
          value={canidaeRequest.canidae.birth}
          onChange={handleChangeInput}
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
          />
        </div>

        <label css={styles.label}>몸무게를 입력해주세요</label>
        <input
          type="number"
          css={styles.input}
          placeholder="ex.3.5"
          name="weight"
          value={canidaeRequest.canidae.weight}
          onChange={handleChangeInput}
        />

        <label css={styles.titleLabel}>
          우리아이에게 가장 필요한 제품이 있나요? 관심있는 카테고리를
          골라보세요!
        </label>

        {categoryData.map((category) => (
          <CategoryButton
            key={category.type}
            label={category.label}
            categories={category.items}
            selectedCategories={selectedCategories[category.type]}
            handleCategorySelect={handleCategorySelect}
            categoryType={category.type}
            disableUnselected={totalSelectedCategories >= 5}
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
            onClick={registerPet}
          />
        </div>
      </div>
    </div>
  );
}
