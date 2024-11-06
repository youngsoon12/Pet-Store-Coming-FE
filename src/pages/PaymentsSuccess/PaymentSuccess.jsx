import { React, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { deliveryInfo } from '../../recoil/atom/deliveryInfo';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useRecoilState(deliveryInfo);
  const [isApproved, setIsApproved] = useState(false); // 승인 여부 상태 추가

  // 결제 승인 요청을 처리하는 mutation
  const approvePaymentMutation = useMutation({
    mutationFn: async (orderData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/payments/approve`,
        orderData
      );
      return response.data;
    },
    onSuccess: async () => {
      // orderItem 저장 mutation 호출
      await saveOrderItemMutation.mutateAsync({
        orderId: orderInfo.orderId,
        productId: orderInfo.productId, // 필요한 경우 추가 정보
        quantity: 2, // 필요한 경우 추가 정보
      });
      sessionStorage.removeItem('deliveryInfo');
      navigate('/order/success', { replace: true });
    },
    onError: (error) => {
      console.error(
        '결제 승인 실패:',
        error.response ? error.response.data : error.message
      );
    },
  });

  // orderItem 저장을 처리하는 mutation
  const saveOrderItemMutation = useMutation({
    mutationFn: async (orderItemData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/order-items`,
        orderItemData
      );
      return response.data;
    },
    onError: (error) => {
      console.error(
        '주문 항목 저장 실패:',
        error.response ? error.response.data : error.message
      );
    },
  });

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

  // orderInfo가 모두 설정되었고 승인되지 않은 경우에만 결제 승인 요청 실행
  useEffect(() => {
    if (
      orderInfo.orderId &&
      orderInfo.paymentKey &&
      orderInfo.amount &&
      !isApproved
    ) {
      approvePaymentMutation.mutate(orderInfo);
      setIsApproved(true); // 승인 상태로 변경하여 무한 호출 방지
    }
  }, [orderInfo, approvePaymentMutation, isApproved]);

  return <div>결제 중 입니다.</div>;
};

export default PaymentSuccess;
