import React from 'react';
import axios from 'axios';

export const getOrderListAPI = async (userId) => {
  const response = await axios(
    `${import.meta.env.VITE_API_URL}/api/orders/user/${userId}/items`
  );
  return response.data;
};
