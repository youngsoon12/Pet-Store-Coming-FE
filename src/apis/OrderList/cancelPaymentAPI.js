import axios from 'axios';

export const cancelPaymentAPI = async (cancelInfo) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/orders/cancel-item`,
    cancelInfo
  );
  return response.data;
};
