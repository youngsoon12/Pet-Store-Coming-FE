/** @jsxImportSource @emotion/react */
import DaumPostcode from 'react-daum-postcode';
import { styles } from './DaumPost.style';

/* 다음 주소 검색 API에서 주소를 검색 후 주소를 클릭 시 창이 닫힙니다.

이때, complete 함수로 클릭한 주소 정보(주소(fullAddress), 

우편번호(zonecode))를 변수에 저장후 이 값을 상태값(form 값)으로 설정합니다. */

export default function DaumPost({ setAddressForm, handleComplete }) {
  /* 아래 함수로 들어오는 파라미터 (data)의 정체가 무엇일까를
    생각해 보았는데 DaumPostcode props중에 onComplete가 있는데,
    주소를 클릭하고 창이 닫힐때
    선택한 주소에 대한 파라미터 정보가 이곳으로 전달되는 것 같습니당..... */

  const complete = (data) => {
    let fullAddress = data.address;
    let zonecode = data.zonecode;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);

    // 선택한 주소값을 상태값으로 설정
    setAddressForm({
      address: fullAddress,
      zonecode: zonecode,
    });

    // 팝업창 닫기(팝업창 'X' 표시)
    handleComplete();
  };
  return (
    <div css={styles.background}>
      <div css={styles.container}>
        <div css={styles.title}>
          <h1>주소 검색</h1>
          <div
            onClick={() => {
              handleComplete();
            }}
          >
            X
          </div>
        </div>
        <DaumPostcode
          css={styles.daum}
          autoClose
          onComplete={complete}
          style={{ height: '450px' }}
        />
      </div>
    </div>
  );
}
