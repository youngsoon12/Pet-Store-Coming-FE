/** @jsxImportSource @emotion/react */

import { React, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { deliveryInfo } from '../../recoil/atom/deliveryInfo';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import saveOrderItemAPI from '../../apis/PaymentSuccess/saveOrderItemAPI';
import tossApproveAPI from '../../apis/PaymentSuccess/tossApproveAPI';
import { paymentProductAtom } from '../../recoil/atom/paymentProductAtom';
import { styles } from './PaymentSuccess.style';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useRecoilState(deliveryInfo);
  const [cartItems] = useRecoilState(paymentProductAtom); // 장바구니 데이터를 Recoil에서 바로 가져옴
  const [isApproved, setIsApproved] = useState(false); // 승인 여부 상태 추가
  console.log(cartItems.productId);

  // 결제 승인 요청을 처리하는 mutation
  const approvePaymentMutation = useMutation({
    mutationFn: tossApproveAPI,
    onSuccess: async () => {
      // orderItem 저장 mutation 호출 (cartItems의 전체 아이템을 배열로 전송)
      if (cartItems) {
        const orderItems = cartItems.map((item) => ({
          orderId: orderInfo.orderId,
          productId: item.productId,
          quantity: parseInt(item.productQuantity, 10),
        }));

        await saveOrderItemAPI(orderItems); // 배열로 한 번에 전송
      }
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

  return (
    <div css={styles.wrap}>
      <div css={styles.container}>결제중 입니다 </div>
    </div>
  );
};

export default PaymentSuccess;
