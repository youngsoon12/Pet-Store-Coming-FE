import { React, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const orderInfo = {
      userId: 'bef88434-1402-4095-90af-a7a76026fcf3',
      orderId: searchParams.get('orderId'),
      paymentKey: searchParams.get('paymentKey'),
      amount: parseInt(searchParams.get('amount')),
    };
    const approvePayment = async () => {
      try {
        // 결제 승인 API 호출
        const response = await axios.post(
          'http://localhost:8080/api/payments/approve',
          orderInfo
        );
        console.log('결제 승인 성공:', response.data);

        // 성공 시 페이지 이동
        navigate('/success', { replace: true });
      } catch (error) {
        console.error(
          '결제 승인 실패:',
          error.response ? error.response.data : error.message
        );
        alert(
          '결제 승인 실패: ' +
            (error.response ? error.response.data : error.message)
        );
      }
    };

    approvePayment();
  }, [navigate, searchParams]);

  return <div>결제 성공 페이지에유</div>;
};

export default PaymentSuccess;
