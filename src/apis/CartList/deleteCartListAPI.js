import axios from 'axios';

export const deleteCartListAPI = async (deleteInfo) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_API_URL}/cart/delete`,
    {
      data: deleteInfo,
    }
  );
  return response.data;
};
