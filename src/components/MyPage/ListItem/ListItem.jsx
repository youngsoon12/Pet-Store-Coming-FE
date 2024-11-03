/** @jsxImportSource @emotion/react */
import { styles } from './ListItem.style';
import profile from '@assets/images/MyPage/icons/user.svg';
import order from '@assets/images/MyPage/icons/list.svg';
import cart from '@assets/images/MyPage/icons/cart.svg';
import { useNavigate } from 'react-router-dom';

export default function ListItem({ title, engTitle, link }) {
  const navigate = useNavigate();
  return (
    <div css={styles.container} onClick={() => navigate(link)}>
      <img
        src={
          engTitle === 'Profile' ? profile : engTitle === 'Order' ? order : cart
        }
        alt={`${title} 아이콘`}
      ></img>
      <div>{title}</div>
      <div css={styles.engTitle}>{engTitle}</div>
    </div>
  );
}
