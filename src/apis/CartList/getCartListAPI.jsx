import axios from 'axios';

const getCartListAPI = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/cart/list?user_id=${import.meta.env.VITE_USER_ID}`
  );
  return response.data;
};

export default getCartListAPI;
