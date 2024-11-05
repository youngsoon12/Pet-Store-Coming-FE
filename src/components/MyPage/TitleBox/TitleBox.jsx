/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './TitleBox.style';
import plusIcon from '@assets/images/MyPage/icons/plus.svg';
export default function TitleBox({ title, plus }) {
  const navigate = useNavigate();
  return (
    <div css={styles.container}>
      <div>{title}</div>
      {plus ? (
        <img
          css={styles.plusIcon}
          src={plusIcon}
          onClick={() => navigate('/petprofile')}
        />
      ) : (
        ''
      )}
    </div>
  );
}
