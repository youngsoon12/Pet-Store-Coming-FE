/** @jsxImportSource @emotion/react */
import React from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { styles } from './PaymentBtn.style';
import { deliveryInfo } from '../../recoil/atom/deliveryInfo';
import { useRecoilValue } from 'recoil';

const PaymentButton = ({ totalAmount, active }) => {
  const random = new Date().getTime() + Math.random(); //난수 생성
  const randomId = btoa(random); // random에서 나온 난수를 Base64 암호화

  const orderInfo = useRecoilValue(deliveryInfo);

  // 환경 변수에서 클라이언트 키와 도메인 URL 가져오기
  const clientKey = import.meta.env.VITE_TOSS_PAYMENTS_CLIENT_KEY || '';
  const originUrl = import.meta.env.VITE_ORIGIN_URL || 'http://localhost:5173';

  const handlePayment = () => {
    loadTossPayments(clientKey)
      .then((tossPayments) => {
      tossPayments
        .requestPayment('카드', {
          amount: orderInfo.amount, // 결제 금액
          orderId: `${randomId}`, // 고유 주문 ID
          orderName: orderInfo.orderName, // 주문명
          customerName: orderInfo.receiverName, // 고객 이름
          successUrl: `${originUrl}/success`, // 결제 성공시 리다이렉션 URL
          failUrl: `${originUrl}`, // 결제 실패시 리다이렉션 URL
        })
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 사용자가 결제를 취소한 경우 처리
            console.log('결제가 취소되었습니다.');
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            // 유효하지 않은 카드 코드에 대한 에러 처리
            console.log('유효하지 않은 카드입니다.');
          } else {
            // 그 외 오류 처리
            console.error('결제 처리 중 오류 발생:', error);
          }
        });
    });
  };

  return (
    <button css={styles.container} onClick={handlePayment} disabled={active}>
      <span css={styles.amount_area}>{totalAmount.toLocaleString()}</span>원
      결제하기
    </button>
  );
};

export default PaymentButton;
