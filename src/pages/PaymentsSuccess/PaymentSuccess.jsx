import { React, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // URL 쿼리 파라미터 가져오기
  const orderInfo = {
    userId: 'bef88434-1402-4095-90af-a7a76026fcf3',
    orderId: searchParams.get('orderId'),
    paymentKey: searchParams.get('paymentKey'),
    amount: parseInt(searchParams.get('amount')),
  };

  useEffect(() => {
    // 결제 승인 API 호출
    axios
      .post('http://localhost:8080/api/payments/approve', orderInfo)
      .then((response) => {
        console.log('결제 승인 성공:', response.data);
        // 성공 시 페이지 이동
        navigate('/success', { replace: true });
      })
      .catch((error) => {
        console.error(
          '결제 승인 실패:',
          error.response ? error.response.data : error.message
        );
        alert(error.message);
      });
  }, [navigate]);

  return <div>결제 성공 페이지에유</div>;
};

export default PaymentSuccess;
