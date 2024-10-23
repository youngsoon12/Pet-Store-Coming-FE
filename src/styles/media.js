import styled from '@emotion/styled';

// 디바이스별 최대 크기 정의
const sizes = {
  desktop: 1200,
  tablet: 768,
  mobile: 600,
};

export const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key] = (styles) => `
    @media (max-width: ${value}px) {
      ${styles}
    }
  `;

  return acc;
}, {});
