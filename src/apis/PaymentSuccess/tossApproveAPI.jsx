import axios from 'axios';

export const tossApproveAPI = async (orderData) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/payments/approve`,
    orderData
  );
  return response.data;
};

export default tossApproveAPI;
