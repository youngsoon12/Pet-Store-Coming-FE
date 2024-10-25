/** @jsxImportSource @emotion/react */

import { styles } from './Footer.style';

function Footer() {
  return (
    <div css={styles.footerContainer()}>
      <div css={styles.footerLeftPanel()}>
        <h2>COMING</h2>
        <span className="teamInfo">
          주소: 멀티캠퍼스 선릉 (위워크 선릉 2호점) 4층
        </span>
        <span className="teamInfo">팀명: 원정투수</span>
        <span className="teamInfo">
          팀장: 조계원 | 팀원: 김영수, 김현정, 이지수
        </span>
        <span className="teamInfo">
          Instagram: @ghghj_kim | 이메일: h19980626j@gmail.com
        </span>
        <span>&copy; 2024 COMING.design | All rights reserved</span>
      </div>

      <div css={styles.footerRightPanel()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
