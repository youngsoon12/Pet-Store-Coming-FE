/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { isSubCategoryInfoState } from '@recoil/atom/category';
import { styles } from './PetCard.style';
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
      const res = await axios
        .delete(`${baseURL}/canidae/delete?id=${petInfo.canidae.id}`)
        .then((res) => res.data);
      // console.log(res);

      deletePet(petInfo.canidae.id, res.newPrimaryCanidae.id); // 삭제 후 상태 업데이트
    } catch (err) {
      console.log(err);
    }
  };

  // 서브 카테고리 정보 가져오기
  const subCategoryData = useRecoilValue(isSubCategoryInfoState);

  return (
    <div css={styles.container}>
      <div css={styles.petProfile}>
        {/* <img src={petProfile} alt="반려견 프로필 사진"></img> */}
        <img
          src={petInfo.canidae.profileImageUrl}
          alt={petInfo.canidae.profileImageName}
        ></img>
      </div>
      <div css={styles.infoBox}>
        <div css={styles.row1}>
          <div>{petInfo.canidae.name}</div>
          {petInfo.canidae.isPrimary && <div css={styles.primary}>대표</div>}
        </div>

        {/* <div css={styles.row2}>
          {petInfo.subCategory.map((category) => (
            <div>{category}</div>
          ))}
        </div> */}
        {petInfo.interstProductList?.length > 0 ? (
          <div css={styles.row2}>
            {petInfo.interstProductList.map((category) => {
              // subCategoryId에 맞는 subCategory를 찾음
              const subCategory = subCategoryData.find(
                (sub) => sub.id === category.subCategoryId
              );
              return subCategory ? (
                <div key={category.id}>{subCategory.name}</div>
              ) : (
                <div key={category.id}>알 수 없는 카테고리</div>
              );
            })}
          </div>
        ) : (
          ''
        )}
        <div css={styles.row3}>
          <div>
            <div css={styles.title}>BIRTH DAY</div>
            <div>{petInfo.canidae.birth}</div>
          </div>
          <div>
            <div css={styles.title}>BREED</div>
            <div>{petInfo.canidae.breed}</div>
          </div>
          <div>
            <div css={styles.title}>GENDER</div>
            <div>{petInfo.canidae.gender ? '남아' : '여아'}</div>
          </div>
          <div>
            <div css={styles.title}>WEIGHT</div>
            <div>{petInfo.canidae.weight}kg</div>
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
