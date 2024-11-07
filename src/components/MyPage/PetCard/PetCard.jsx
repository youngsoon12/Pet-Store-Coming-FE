/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './PetCard.style';
import petProfile from '@assets/images/MyPage/comi.png';
import axios from 'axios';
export default function ({ petInfo, deletePet }) {
  const navigate = useNavigate();
  // 반려견 정보 수정 페이지로 이동
  const editPet = () => {
    // 파라미터로 각 반려견 정보 보내주기
    navigate('/my/edit/petinfo', { state: { petInfo: petInfo } });
  };

  const handleDelete = async () => {
    const baseURL = import.meta.env.VITE_API_URL;
    try {
      await axios.delete(`${baseURL}/canidae/delete?id=${petInfo.id}`);
      deletePet(petInfo.id); // 삭제 후 상태 업데이트
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.petProfile}>
        {/* <img src={petProfile} alt="반려견 프로필 사진"></img> */}
        <img src={petInfo.profileImageUrl} alt={petInfo.profileImageAlt}></img>
      </div>
      <div css={styles.infoBox}>
        <div css={styles.row1}>
          <div>{petInfo.name}</div>
          {petInfo.isPrimary && <div css={styles.primary}>대표</div>}
        </div>

        {/* <div css={styles.row2}>
          {petInfo.subCategory.map((category) => (
            <div>{category}</div>
          ))}
        </div> */}
        {petInfo.subCategory?.length > 0 ? (
          <div css={styles.row2}>
            {petInfo.subCategory.map((category) => (
              <div>{category}</div>
            ))}
          </div>
        ) : (
          ''
        )}
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
            <div>{petInfo.gender ? '남아' : '여아'}</div>
          </div>
          <div>
            <div css={styles.title}>WEIGHT</div>
            <div>{petInfo.weight}kg</div>
          </div>
        </div>
        <div css={styles.buttons}>
          <button css={styles.editBtn} onClick={editPet}>
            수정
          </button>
          <button css={styles.deleteBtn} onClick={handleDelete}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
