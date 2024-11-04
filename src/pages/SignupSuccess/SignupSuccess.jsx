/** @jsxImportSource @emotion/react */
import { styles } from './SignupSuccess.style';
import Button from '@components/global/button';
import ContentsWrapper from '@components/global/ContentsWrapper/ContentsWrapper';
import Header from '@components/global/header';
import { useNavigate } from 'react-router-dom';

export default function SignupSuccess() {
  const name = '원정투수';
  const navigate = useNavigate();
  return (
    <>
      <Header type={1} />
      {/* <ContentsWrapper> */}
      <div css={styles.container}>
        <div css={styles.main}>
          <span>{name}</span>님 반가워요
        </div>
        <div css={styles.main}>
          <span>꼬밍</span> 회원가입이 완료되었어요!
        </div>
        <div css={styles.sub}>
          우리아이를 등록하고 맞춤 상품을 추천받아보세요
        </div>
        <div css={styles.buttons}>
          <Button
            text={'우리아이 등록 >'}
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
        </div>
      </div>
      {/* </ContentsWrapper> */}
    </>
  );
}
