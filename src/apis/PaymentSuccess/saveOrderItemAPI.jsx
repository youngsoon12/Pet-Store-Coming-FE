// apis/PaymentSuccess/saveOrderItemAPI.js
import axios from 'axios';

const saveOrderItemAPI = async (orderItems) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/order-items`,
    orderItems // 여러 항목을 배열로 전송
  );
  return response.data;
};

export default saveOrderItemAPI;
