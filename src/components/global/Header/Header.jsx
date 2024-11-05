/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Header.style';
import Logo from './icons/Logo';
import Home from './icons/Home';
import Cart from './icons/Cart';
import Search from './icons/Search';
import Back from './icons/Back';

function Header({ type, title, noIcons }) {
  const navigate = useNavigate();
  const handleClickIcon = (link) => {
    navigate(link);
  };

  return (
    <div css={styles.headerContainer}>
      {type === 1 && (
        <>
          <Logo handleClick={handleClickIcon} />

          <div css={styles.icons}>
            <Search handleClick={handleClickIcon} />
            <Cart handleClick={handleClickIcon} />
          </div>
        </>
      )}

      {type === 2 && (
        <>
          <Logo handleClick={handleClickIcon} dog={true} />
        </>
      )}

      {type === 3 && (
        <>
          <div css={styles.title}>{title}</div>
          <Home handleClick={handleClickIcon} />
        </>
      )}

      {type === 4 && (
        <>
          <Back handleClick={handleClickIcon} />
          <div css={styles.title}>{title}</div>
          {noIcons ? (
            <div style={{ width: '22px' }}></div>
          ) : (
            <div css={styles.icons}>
              <Search handleClick={handleClickIcon} />
              <Cart handleClick={handleClickIcon} />
            </div>
          )}
        </>
      )}

      {type > 4 && (
        <>
          <Back handleClick={handleClickIcon} />
          <div css={styles.icons}>
            <Home handleClick={handleClickIcon} />
            <Search handleClick={handleClickIcon} />
            <Cart handleClick={handleClickIcon} />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;

