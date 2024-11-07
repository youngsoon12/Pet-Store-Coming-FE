import { React, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { deliveryInfo } from '../../recoil/atom/deliveryInfo';
import { useRecoilState } from 'recoil';
import { useMutation, useQuery } from '@tanstack/react-query';
import getCartListAPI from '../../apis/CartList/GetCartListAPI';
import saveOrderItemAPI from '../../apis/PaymentSuccess/saveOrderItemAPI';
import tossApproveAPI from '../../apis/PaymentSuccess/tossApproveAPI';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useRecoilState(deliveryInfo);
  const [isApproved, setIsApproved] = useState(false); // 승인 여부 상태 추가

  // 장바구니 데이터 가져오기
  const {
    data: cartData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['cartList01'],
    queryFn: getCartListAPI,
  });

  // 결제 승인 요청을 처리하는 mutation
  const approvePaymentMutation = useMutation({
    mutationFn: tossApproveAPI,
    onSuccess: async () => {
      // orderItem 저장 mutation 호출 (cartData의 전체 아이템을 배열로 전송)
      if (cartData && cartData.data) {
        const orderItems = cartData.data.map((item) => ({
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

  if (isLoading) return <div>정보를 불러오는 중입니다...</div>;

  return <div>결제 중 입니다.</div>;
};

export default PaymentSuccess;
