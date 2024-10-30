/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
import { footerOptions } from './data';
import { styles } from './Footer.style';

function Footer() {
  const navigate = useNavigate();

  const handleClick = (url, event) => {
    navigate('/' + url);
  };

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
        {footerOptions.map((option, idx) => (
          <div key={idx}>
            <h2 className="title">{option.title.toUpperCase()}</h2>
            <div className="optionBox">
              {option.sub.map((item, idx) => (
                <span
                  key={idx}
                  onClick={(event) => handleClick(item.link, event)}
                >
                  {item.subTitle}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
