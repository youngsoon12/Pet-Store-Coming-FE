/** @jsxImportSource @emotion/react */
import { React } from 'react';
import { styles } from './ListCard.style';
import { useMutation } from '@tanstack/react-query';
import { cancelPaymentAPI } from '../../apis/OrderList/cancelPaymentAPI';

const ListCard = ({
  name,
  price,
  orderId,
  orderItemId,
  discountPrice,
  brand,
  quantity,
  src,
  status,
}) => {
  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: (cancelInfo) => cancelPaymentAPI(cancelInfo),
    onSuccess: () => {
      alert('주문이 취소되었습니다.');
      window.location.reload();
    },
  });
  const onCancelClick = (e) => {
    const cancelInfo = {
      orderId: orderId,
      cancelAmount: discountPrice * quantity,
      orderItemId: e.target.id,
    };
    mutate(cancelInfo);
  };
  return (
    <>
      <div css={styles.wrap}>
        {status === '주문완료' ? (
          <div css={styles.status_ok}>{status}</div>
        ) : (
          <div css={styles.status_fail}>{status}</div>
        )}
        <div css={styles.product_info}>
          <img src={src} css={styles.product_info_img} />
          <div css={styles.product_info_text}>
            <div>{brand}</div>
            <div css={styles.product_info_text_name}>{name}</div>
            {price.toString().length >= 6 ? (
              <div css={styles.product_info_text_price}>
                정상가: {price.toLocaleString()}원 <br /> 수량 {quantity}개
              </div>
            ) : (
              <div css={styles.product_info_text_price}>
                정상가: {price.toLocaleString()}원 / 수량 {quantity}개
              </div>
            )}

            <div css={styles.product_info_text_discountPrice}>
              할인적용가:{discountPrice.toLocaleString()}원
            </div>
          </div>
          <div css={styles.button_area}>
            <button css={styles.button_action} disabled={status === '주문취소'}>
              리뷰 작성
            </button>
            <button
              css={styles.button_action}
              onClick={onCancelClick}
              id={orderItemId}
              disabled={status === '주문취소'}
            >
              주문 취소
            </button>
          </div>
        </div>
        <div css={styles.product_info_horizon}></div>
      </div>
    </>
  );
};

export default ListCard;
