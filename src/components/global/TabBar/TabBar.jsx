/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import { activeTabState } from '@/recoil/atom/tabState';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { styles } from './TabBar.style';
import home from '@assets/images/TabBar/icons/home.svg';
import home_active from '@assets/images/TabBar/icons/home_active.svg';
import shop from '@assets/images/TabBar/icons/shop.svg';
import shop_active from '@assets/images/TabBar/icons/shop_active.svg';
import search from '@assets/images/TabBar/icons/search.svg';
import search_active from '@assets/images/TabBar/icons/search_active.svg';
import my from '@assets/images/TabBar/icons/my.svg';
import my_active from '@assets/images/TabBar/icons/my_active.svg';
export default function TabBar({ activeTab }) {
  return (
    <nav css={styles.container}>
      <Link to="/" css={styles.menu}>
        <img
          css={styles.icon}
          src={activeTab === 'home' ? home_active : home}
        />
        <div>HOME</div>
      </Link>
      <Link to="/shop" css={styles.menu}>
        <img
          css={styles.icon}
          src={activeTab === 'shop' ? shop_active : shop}
        />
        <div>SHOP</div>
      </Link>
      <Link to="/search" css={styles.menu}>
        <img
          css={styles.icon}
          src={activeTab === 'search' ? search_active : search}
        />
        <div>SEARCH</div>
      </Link>
      <Link to="/my" css={styles.menu}>
        <img css={styles.icon} src={activeTab === 'my' ? my_active : my} />
        <div>MY</div>
      </Link>
    </nav>
  );
}
