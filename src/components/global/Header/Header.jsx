/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Header.style';
import { useState } from 'react';
import logo from '@assets/images/header/logos/logo.svg';
import dogLogo from '@assets/images/header/logos/dog_logo.svg';
import home from '@assets/images/header/icons/home.svg';
import back from '@assets/images/header/icons/back.svg';
import cart from '@assets/images/header/icons/cart.svg';
import search from '@assets/images/header/icons/search.svg';

export default function Header({ type, title }) {
  const navigate = useNavigate();
  const handleClickCategory = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div css={styles.headerContainer}>
      {type === 1 && (
        <>
          <img
            src={logo}
            css={styles.logo}
            onClick={() => {
              navigate('/');
            }}
            alt="로고"
          />

          <div css={styles.icons}>
            <img src={search} alt="검색 버튼" />
            <img src={cart} alt="장바구니 버튼" />
          </div>
        </>
      )}

      {type === 2 && (
        <>
          <img
            src={dogLogo}
            css={styles.dogLogo}
            onClick={() => {
              navigate('/');
            }}
            alt="로고"
          />
        </>
      )}

      {type === 3 && (
        <>
          <div css={styles.title}>{title}</div>
          <img css={styles.icon} src={home}></img>
        </>
      )}

      {type === 4 && (
        <>
          <img css={styles.icon} src={back}></img>
          <div css={styles.title}>{title}</div>
          <div css={styles.icons}>
            <img src={search} alt="검색 버튼" />
            <img src={cart} alt="장바구니 버튼" />
          </div>
        </>
      )}

      {type > 4 && (
        <>
          <img css={styles.icon} src={back}></img>
          <div css={styles.icons}>
            <img src={home} alt="홈 버튼" />
            <img src={search} alt="검색 버튼" />
            <img src={cart} alt="장바구니 버튼" />
          </div>
        </>
      )}
    </div>
  );
}
