/** @jsxImportSource @emotion/react */

import PaymentBtn from '../../components/Payments/PaymentBtn';
import PaymentProductCard from '../../components/Payments/PaymentProductCard';
import { styles } from './Payments.style';
import { useEffect, useState } from 'react';
import upArrow from '@assets/images/payment/up_arrow.svg';
import downArrow from '@assets/images/payment/down_arrow.svg';

const productInfo = [
  {
    brand: '버켄스탁',
    name: '취리히 스웨이드 레더 토프 레귤러',
    quantity: 3,
    price: '90,000',
    discountPrice: '73,217',
  },
  {
    brand: '왕티',
    name: '멀티 채코보드 에코 풀백',
    quantity: 4,
    price: '90,000',
    discountPrice: '73,217',
  },
];

const Payments = () => {
  // state 구간
  const [amountList, setAmountList] = useState({
    totalAmount: '',
    totalDiscountPrice: '',
    totalDiscountAmount: '',
    comingDiscount: '',
    paymentPrice: '',
  });
  const [checkedItems, setCheckedItems] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [phoneNumberParts, setPhoneNumberParts] = useState({
    part1: '',
    part2: '',
    part3: '',
  });
  const [orderInfo, setOrderInfo] = useState({
    userId: 'bef88434-1402-4095-90af-a7a76026fcf3',
    deliveryAddress: '',
    receiverName: '',
    phoneNumber: '',
    orderName: '',
    amount: 0,
  });

  // UseEffect 구간
  useEffect(() => {
    const totalAmount = productInfo.reduce((acc, item) => {
      const itemTotal = parseInt(item.price.replace(/,/g, '')) * item.quantity;
      return acc + itemTotal;
    }, 0);

    const totalDiscountAmount = productInfo.reduce((acc, item) => {
      const itemTotal =
        parseInt(item.discountPrice.replace(/,/g, '')) * item.quantity;
      return acc + itemTotal;
    }, 0);

    setAmountList({
      ...amountList,
      paymentPrice: (
        Math.floor(totalDiscountAmount / 100) * 100
      ).toLocaleString(),
      totalDiscountPrice: (totalAmount - totalDiscountAmount).toLocaleString(),
      totalAmount: totalAmount.toLocaleString(),
      totalDiscountAmount: totalDiscountAmount.toLocaleString(),
    });
  }, []);

  // 핸들러 함수 구간
  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const onChangeOrderInfo = (e) => {
    const { name, value } = e.target;
    setOrderInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    const fullPhoneNumber = `${phoneNumberParts.part1}-${phoneNumberParts.part2}-${phoneNumberParts.part3}`;
    setOrderInfo((prev) => ({
      ...prev,
      phoneNumber: fullPhoneNumber,
    }));
  };

  const btnActive = Object.values(checkedItems).every(Boolean);
  console.log(orderInfo);
  console.log(amountList);
  return (
    <>
      <div css={styles.container}>
        <div css={styles.infoArea}>
          <div css={styles.title_area}>
            <div css={styles.title}>배송 정보</div>
            <div css={styles.warn}>
              <span css={styles.red_star}>*</span>표시는 필수
              <br />
              입력 항목
            </div>
          </div>
          <div css={styles.info_input_area}>
            <div css={styles.info_label}>배송지명</div>
            <input
              css={styles.info_input}
              name="orderName"
              onChange={onChangeOrderInfo}
            />
          </div>
          <div css={styles.info_input_area}>
            <div css={styles.info_label}>수령인</div>
            <input
              css={styles.info_input}
              name="receiverName"
              onChange={onChangeOrderInfo}
            />
          </div>
          <div css={styles.info_input_area}>
            <div css={styles.info_label}>배송지</div>
            <input
              css={styles.info_input}
              name="deliveryAddress"
              onChange={onChangeOrderInfo}
            />
          </div>
          <div css={styles.info_input_area}>
            <div css={styles.info_label}>연락처</div>
            <div css={styles.info_input_phone_container}>
              <input
                css={styles.info_input_phone}
                name="part1"
                onChange={onChangeOrderInfo}
              />
              <p css={styles.info_input_phone_tag}>-</p>
              <input
                css={styles.info_input_phone}
                name="part2"
                onChange={onChangeOrderInfo}
              />
              <p css={styles.info_input_phone_tag}>-</p>
              <input
                css={styles.info_input_phone}
                name="part3"
                onChange={onChangeOrderInfo}
              />
            </div>
          </div>
        </div>
        <div css={styles.horizon} />
        <div css={styles.productArea}>
          <div css={styles.title}>상품 정보</div>
          <div css={styles.productCard_area}>
            {productInfo &&
              productInfo.map((product, idx) => {
                return (
                  <PaymentProductCard
                    key={idx}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    brand={product.brand}
                    quantity={product.quantity}
                  />
                );
              })}
          </div>
        </div>

        <div css={styles.horizon} />
        <div css={styles.paymentArea}>
          <div css={styles.payment_title}>
            <div css={styles.title}>결제금액</div>
            <div css={styles.payment_paymentPrice}>
              {amountList.paymentPrice}원
              <img src={downArrow} css={styles.payment_paymentPrice_icon} />
            </div>
          </div>
          <div>dsa</div>
        </div>
        <div css={styles.horizon} />
        <div css={styles.personalInfoArea}>
          <div css={styles.personalInfo_text}>
            <label css={styles.checkboxLabel}>
              <input
                type="checkbox"
                css={styles.hiddenCheckbox}
                onChange={onChangeCheckbox}
                name="checkbox1"
              />
              <span
                className="checkmark"
                css={styles.personalInfo_checkbox}
              ></span>
            </label>
            <div>(필수) 개인정보 수집/이용 동의</div>
          </div>
          <div css={styles.personalInfo_text}>
            <label css={styles.checkboxLabel}>
              <input
                type="checkbox"
                css={styles.hiddenCheckbox}
                onChange={onChangeCheckbox}
                name="checkbox2"
              />
              <span
                className="checkmark"
                css={styles.personalInfo_checkbox}
              ></span>
            </label>
            <div>(필수) 개인정보 제3자 제공 동의</div>
          </div>
          <div css={styles.personalInfo_text}>
            <label css={styles.checkboxLabel}>
              <input
                type="checkbox"
                css={styles.hiddenCheckbox}
                onChange={onChangeCheckbox}
                name="checkbox3"
              />
              <span
                className="checkmark"
                css={styles.personalInfo_checkbox}
              ></span>
            </label>
            <div>(필수) 결제대행 서비스 이용약관 (주)토스페이먼츠.</div>
          </div>
        </div>
      </div>
      <PaymentBtn totalAmount={amountList.paymentPrice} active={!btnActive} />
    </>
  );
};

export default Payments;
