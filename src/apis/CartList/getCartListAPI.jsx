import axios from 'axios';

const getCartListAPI = async (userId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/cart/list?user_id=${userId}`
  );
  return response.data.data;
};

export default getCartListAPI;
