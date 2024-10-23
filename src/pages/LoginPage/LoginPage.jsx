import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  return <></>;
}

export default LoginPage;
