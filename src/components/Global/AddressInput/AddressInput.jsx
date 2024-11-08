/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import DaumPost from '@components/global/DaumPost/DaumPost';
import { styles } from './AddressInput.style';

export default function AddressInput({ containerWidth, handleChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const [addressForm, setAddressForm] = useState({
    zonecode: '',
    address: '',
  });

  const [detailAddress, setDetailAddress] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  const handleComplete = (data) => {
    console.log(data); // data 객체의 구조를 확인하여 올바른 속성 선택
    if (data) {
      const fullAddress = data.address || data.roadAddress || ''; // 가능한 속성 확인
      setAddressForm({
        ...addressForm,
        address: fullAddress,
      });
      handleChange(fullAddress); // 부모 컴포넌트의 상태 업데이트
    } else {
      console.error('Kakao API로부터 올바른 주소 데이터를 받지 못했습니다.');
    }
    setIsOpen(false);
  };

  return (
    <div css={styles.container(containerWidth)}>
      <div css={styles.row1}>
        <input
          value={addressForm.zonecode}
          type="text"
          placeholder="우편번호"
          css={styles.zonecode}
          disabled
        ></input>
        <button onClick={() => setIsOpen(true)} css={styles.btn} type="button">
          주소 검색
        </button>
      </div>
      <div>
        <input
          value={addressForm.address}
          type="text"
          placeholder="기본주소"
          css={styles.address}
          readOnly
        ></input>
      </div>
      <div>
        <input
          value={detailAddress}
          type="text"
          placeholder="상세주소"
          css={styles.address}
          onChange={(e) =>
            setAddressForm({ ...addressForm, detailAddress: e.target.value })
          }
        ></input>
      </div>
      {isOpen && (
        <DaumPost
          setAddressForm={setAddressForm}
          handleComplete={handleComplete}
        />
      )}
    </div>
  );
}
