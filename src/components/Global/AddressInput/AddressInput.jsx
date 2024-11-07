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

  const handleComplete = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={styles.container(containerWidth)}>
      <div css={styles.row1}>
        <input
          value={addressForm.zonecode}
          type="text"
          placeholder="우편번호"
          css={styles.zonecode}
        ></input>
        <button onClick={handleComplete} css={styles.btn} type="button">
          주소 검색
        </button>
      </div>
      <div>
        <input
          value={addressForm.address}
          type="text"
          placeholder="기본주소"
          css={styles.address}
        ></input>
      </div>
      <div>
        <input
          value={detailAddress}
          type="text"
          placeholder="상세주소"
          css={styles.address}
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
