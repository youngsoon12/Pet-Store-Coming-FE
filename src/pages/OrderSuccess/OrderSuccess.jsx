/** @jsxImportSource @emotion/react */

import React from 'react';
import { styles } from './OrderSuccess.style';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/');
  };
  return (
    <div css={styles.container}>
      <div css={styles.title}>주문이 완료되었습니다.</div>
      <button css={styles.button} onClick={onClickBtn}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default OrderSuccess;
