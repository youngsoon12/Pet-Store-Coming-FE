/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { styles } from './HeaderCSS';
=======
import { styles } from './Header.style';
>>>>>>> 37a28a6a67f1d3a4490687539afc7f37c544f542
import { useState } from 'react';

const Header = () => {
  const categories = ['food', 'clothes', 'wagon', 'supplies'];
  const navigate = useNavigate();
  const handleClickCategory = (category) => {
    navigate(`/${category}`);
  };
  return (
    <div css={styles.headerWrap}>
      <div
        css={styles.logo}
        onClick={() => {
          navigate('/');
        }}
      />
      <div css={styles.categoryArea}>
        {categories.map((category) => {
          const name = category.toUpperCase();
          return (
            <div
              css={styles.category}
              key={category}
              onClick={() => handleClickCategory(category)}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div css={styles.buttonArea}>
        <div css={styles.buttons}>
          <div>LOGIN</div>
          <div>JOIN</div>
        </div>
        <div css={styles.icons}>
          <div css={styles.user} />
          <div css={styles.wish} />
          <div css={styles.cart} />
          <div css={styles.search} />
        </div>
      </div>
    </div>
  );
};
export default Header;
