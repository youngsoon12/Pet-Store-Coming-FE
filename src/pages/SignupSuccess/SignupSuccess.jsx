/** @jsxImportSource @emotion/react */
import { styles } from './SignupSuccess.style';
import Button from '../../components/global/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SignupSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setUserInfo(state);
  }, [state]);

  return (
    <>
      {userInfo && (
        <div css={styles.container}>
          <div css={styles.main}>
            <span>{userInfo.name}</span>님 반가워요
          </div>
          <div css={styles.main}>
            <span>꼬밍</span> 회원가입이 완료되었어요!
          </div>
          <div css={styles.sub}>
            {userInfo.role === 'user'
              ? '우리 아이를 등록하고 맞춤 상품을 추천받아보세요'
              : '지금 스토어를 등록하여 꼬밍 회원들에게 맞춤 상품을 소개하세요.'}
          </div>
          <div css={styles.buttons}>
            {userInfo.role === 'user' ? (
              <>
                <Button
                  text={'우리 아이 등록 >'}
                  fontSize={'14'}
                  fontWeight={'bold'}
                  width={'130'}
                  onClick={() => {
                    navigate('/petprofile');
                  }}
                />
                <Button
                  text={'꼬밍 홈으로 >'}
                  fontSize={'14'}
                  fontWeight={'bold'}
                  width={'130'}
                  onClick={() => {
                    navigate('/');
                  }}
                />
              </>
            ) : (
              <Button
                text={'스토어 등록 >'}
                fontSize={'14'}
                fontWeight={'bold'}
                width={'130'}
                onClick={() => {
                  navigate('/petprofile');
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
