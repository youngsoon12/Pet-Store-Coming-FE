import React from 'react';
import { useLocation } from 'react-router-dom';

function StoreCreate() {
  const location = useLocation();
  const { state } = location;

  console.log(state);

  return <div>StoreCreate</div>;
}

export default StoreCreate;
