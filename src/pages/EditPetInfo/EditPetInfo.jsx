/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Button from '../../components/global/button';
import Camera from '../../assets/images/PetProfile/camera.svg';
import { styles } from './EditPetInfo.style';
import CategoryButton from '../../components/CategoryButton/CategoryButton';

export default function EditPetInfo() {
  const [gender, setGender] = useState('male');
  const [selectedCategories, setSelectedCategories] = useState({
    snack: [],
    clothes: [],
    stroller: [],
    supplies: [],
  });
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div css={styles.container}>
      <input
        type="file"
        id="profileImg"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleImageChange}
      />
      <img
        src={selectedImage || Camera}
        alt="Camera Icon"
        css={styles.cameraIcon}
        onClick={handleCameraClick}
      />

      <div css={styles.inputContainer}>
        <label css={styles.label}>이름을 입력해주세요</label>
        <input type="text" css={styles.input} placeholder="ex.꼬미" />

        <label css={styles.label}>견종을 등록하세요</label>
        <input type="text" css={styles.input} placeholder="ex.말티즈" />

        <label css={styles.label}>생일을 입력해주세요</label>
        <input type="date" css={styles.input} />

        <label css={styles.label}>성별을 선택해주세요</label>
        <div css={styles.genderButtonContainer}>
          <Button
            text="남아"
            width={220}
            height={50}
            onClick={() => setGender('male')}
            theme={gender === 'male' ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
          />
          <Button
            text="여아"
            width={220}
            height={50}
            onClick={() => setGender('female')}
            theme={gender === 'female' ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
          />
        </div>

        <label css={styles.label}>몸무게를 입력해주세요</label>
        <input type="text" css={styles.input} placeholder="ex.3.5kg" />

        <label css={styles.titleLabel}>
          우리아이에게 가장 필요한 제품이 있나요? 관심있는 카테고리를
          골라보세요!
        </label>
        <div>(최대 5개 선택 가능)</div>
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
          />
        </div>
      </div>
    </div>
  );
}
