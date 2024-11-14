# Team - COMING

### 프로젝트 소개
- 과제 목표 : 강아지 용품 관련 쇼핑 커머스 사이트 제작하기
- 수행 기간 : 2024/10/16 ~ 2024/11/8 

<br>

![꼬밍 메인](https://github.com/user-attachments/assets/1e3d205d-4c40-4a7e-a8d9-e1905b88c44b)

<br><br>

# 배포 링크
- [링크]([https://playkeyboard.netlify.app/](https://pet-store-coming-fe.vercel.app/)) 

<br><br>

# 팀 소개 및 역할
 
| 이름   | 역할  |
| ------ | ------ |
| 김영수 | 프론트, 백엔드 |
| 조계원 | 백엔드, 프론트  | 
| 김현정 | 프론트, UI/UX |
| 이지수 | 프론트, UI/UX |

<br><br>

# 사용기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

<br><br>

# 프로젝트에서 내가 맡은 주요기능

#### 장바구니 (Front)
- 서버에서 받아오는 데이터는 React-Query를 사용하여 데이터를 받아오기까지 로딩 및 비동기 처리
- 받아온 장바구니 데이터는 주문 페이지로 넘겨주기 위하여 recoil을 사용하여 전역으로 상태관리. (useState로 관리하고 주문 페이지에서 장바구니 데이터를 불러오려 했으나 장바구니 내에서 선택 구매 및 불필요한 서버통신과 user측면에서 불필요한 렌더링 시간이 소요된다 판단하여 recoil로 전역상태관리를 채택하였습니다. )

### 주문 페이지(Front,Back)
- 기본 주문 배송지 입력 폼 정보들을 useRecoilState로 관리 (주문 정보를 주문이 완료가 된 시점이 아닌 결제 승인시 orderTable로 전송하기 위해서 recoil 사용)
- Toss SDK 결제 위젯을 불러와 결제 시스템 연동 (주문 완료 시 successURL로 이동)
- 상품의 가격과 수령에 맞게 결제 금액 계산
- DB에 order 및 orderItem Table 생성 (orderItem Table을 생성한 이유는 토스에서 open API로 주문 조회기능은 제공하지만 주문에 대해서만 조회가 가능하지 구매한 상품내역에 대해서는 따로 알 수 없으므로 DB Table로 관리)

### 주문 완료 페이지 (Front,Back)
- 주문이 완료되고 successURL로 이동시 Url에 나와 있는 결제 정보(orderId, productId, quantity)를 useSearchParams를 사용하여 POST로 서버에 전송
- 클라이언트에서 받아온 정보를 RestTemplate을 사용하여 TossPayments 결제 승인 API를 호출하여 status : 200 시 결제 성공, 결제 성공시 orderTable에 주문 정보 저장하는 API 구현.
- React-Query를 사용하여 try-catch 대신 onSuccess를 사용하여 결제가 승인 됐을 시에 orderItem Table로 (orderId, productId, quantity)를 서버로 전송하여 저장
- orderItem에 전송하고 나서 url에 이러한 정보가 계속 남아 있으면 안될 것 같아서 navigate()와 replace:true를 사용하여 정보를 숨겼습니다.

## 주문 내역 페이지 (Front, Back)
- React-Query와 axios를 사용하여 orderItem의 정보들을 GET해와서 리스트 개수에 맞춰 컴포넌트들을 불러오게끔 구현
- end-point에 userId를 넣어 myBatis 조인하는 쿼리를 작성하여 order테이블에서 userId와 일치하는 orderId를 구하고 orderItem 테이블에서 orderId와 일치하는 orderItem테이블의 productId를 product 테이블과 조인하여 상품정보들을 클라이언트에 response 데이터로 반환시켜주는 API 구현
- 주문한 상품들의 정보들을 보여주면서 주문 취소 버튼 클릭시 POST로 (cancelAmount, orderId, orderItemId)를 보내주는주문 취소 API호출
- 클라이언트에서 보내준 정보들을 토대로 RestTemplate를 사용하여 토스 페이먼츠 결제 취소 API를 호출하여 신청한 금액만큼 결제 취소를 하고 결제 취소 성공 시 orderTable의 totalAmount를 취소한 금액에 따라 수정하고, orderItem 테이블 status 컬럼을 주문완료에서 주문취소로 변경하는 주문 취소 API 구현

# 팀 노션
- [링크](https://nosy-polo-4ce.notion.site/13e9a879c5cc805e9956fe1ba43a44b3?pvs=4)
