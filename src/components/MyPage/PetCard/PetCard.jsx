/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './PetCard.style';
import petProfile from '@assets/images/MyPage/comi.png';
export default function ({ petInfo }) {
  // const petInfo = {
  //   name: '꼬미',
  //   primary: true,
  //   subCategory: ['소형견', '건식 사료', '아우터/우비', '상의'],
  //   birth: '2017.09.04',
  //   breed: '말티즈',
  //   gender: '남아',
  //   weight: '4',
  // };

  const navigate = useNavigate();
  return (
    <div css={styles.container}>
      <div css={styles.petProfile}>
        <img src={petProfile} alt="반려견 프로필 사진"></img>
      </div>
      <div css={styles.infoBox}>
        <div css={styles.row1}>
          <div>{petInfo.name}</div>
          {petInfo.primary && <div css={styles.primary}>대표</div>}
        </div>

        <div css={styles.row2}>
          {petInfo.subCategory.map((category) => (
            <div>{category}</div>
          ))}
        </div>
        <div css={styles.row3}>
          <div>
            <div css={styles.title}>BIRTH DAY</div>
            <div>{petInfo.birth}</div>
          </div>
          <div>
            <div css={styles.title}>BREED</div>
            <div>{petInfo.breed}</div>
          </div>
          <div>
            <div css={styles.title}>GENDER</div>
            <div>{petInfo.gender}</div>
          </div>
          <div>
            <div css={styles.title}>WEIGHT</div>
            <div>{petInfo.weight}kg</div>
          </div>
        </div>
        <div css={styles.buttons}>
          <button
            css={styles.editBtn}
            onClick={() => navigate('/my/edit/petinfo')}
          >
            수정
          </button>
          <button css={styles.deleteBtn}>삭제</button>
        </div>
      </div>
    </div>
  );
}
