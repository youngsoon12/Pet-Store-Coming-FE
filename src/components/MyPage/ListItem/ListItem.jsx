/** @jsxImportSource @emotion/react */
import { styles } from './ListItem.style';
import profile from '@assets/images/MyPage/icons/user.svg';
import order from '@assets/images/MyPage/icons/list.svg';
import cart from '@assets/images/MyPage/icons/cart.svg';
import logout from '@assets/images/MyPage/icons/logout.svg';
import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilState, useRecoilValue } from 'recoil';
import useLogoutModal from '@hooks/modal/useLogoutModal';
import { useNavigate } from 'react-router-dom';

export default function ListItem({ title, engTitle, link }) {
  const isActhenticated = useRecoilValue(isActhenticatedState);
  const { openLogoutModal } = useLogoutModal();

  const navigate = useNavigate();
  return (
    <div
      css={styles.container}
      onClick={() => {
        engTitle === 'Logout' ? openLogoutModal() : navigate(link);
      }}
    >
      <img
        src={
          engTitle === 'Profile'
            ? profile
            : engTitle === 'Order'
              ? order
              : engTitle === 'Cart'
                ? cart
                : logout
        }
        alt={`${title} 아이콘`}
      ></img>
      <div>{title}</div>
      <div css={styles.engTitle}>{engTitle}</div>
    </div>
  );
}
