import { React, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { deliveryInfo } from '../../recoil/atom/deliveryInfo';
import { useRecoilState } from 'recoil';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useRecoilState(deliveryInfo);
  const [isApproved, setIsApproved] = useState(false);

  console.log(orderInfo);

  // URL 파라미터로부터 orderId, paymentKey, amount를 가져와서 상태 업데이트
  useEffect(() => {
    const orderId = searchParams.get('orderId');
    const paymentKey = searchParams.get('paymentKey');
    const amount = parseInt(searchParams.get('amount'), 10);

    if (orderId && paymentKey && amount) {
      setOrderInfo((prev) => ({
        ...prev,
        orderId,
        paymentKey,
        amount,
      }));
    }
  }, [searchParams, setOrderInfo]);

  // orderInfo가 모두 설정되고 isApproved가 false일 때 결제 승인 요청
  useEffect(() => {
    console.log(isApproved);

    const approvePayment = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/payments/approve',
          orderInfo
        );
        console.log('결제 승인 성공:', response.data);

        // 승인 상태를 true로 변경하여 다시 호출되지 않도록 함
        setIsApproved(true);
        sessionStorage.removeItem('deliveryInfo');
        // 성공 시 페이지 이동
        navigate('/order/success', { replace: true });
      } catch (error) {
        console.error(
          '결제 승인 실패:',
          error.response ? error.response.data : error.message
        );
      }
    };

    if (
      !isApproved &&
      orderInfo.orderId &&
      orderInfo.paymentKey &&
      orderInfo.amount
    ) {
      approvePayment();
    }
  }, [
    orderInfo.orderId,
    orderInfo.paymentKey,
    orderInfo.amount,
    isApproved,
    navigate,
  ]);

  return <div>결제 중 입니다.</div>;
};

export default PaymentSuccess;
