/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './TabBar.style';
import home from '@assets/images/tab_bar/icons/home.svg';
import { Link } from 'react-router-dom';
export default function TabBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav css={styles.container}>
      <Link to="/" onClick={() => setIsActive(true)}>
        <div css={styles.menu}>
          <img src={home}></img>
        </div>
      </Link>
      <Link to="/" onClick={() => setIsActive(true)}>
        <div css={styles.menu}>
          <img src={home}></img>
        </div>
      </Link>
      <Link to="/" onClick={() => setIsActive(true)}>
        <div css={styles.menu}>
          <img src={home}></img>
        </div>
      </Link>
      <Link to="/" onClick={() => setIsActive(true)}>
        <div css={styles.menu}>
          <img src={home}></img>
        </div>
      </Link>
    </nav>
  );
}
