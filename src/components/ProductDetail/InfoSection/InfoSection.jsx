/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './InfoSection.style';

export default function InfoSection() {
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);
  const [showRefundInfo, setShowRefundInfo] = useState(false);

  return (
    <>
      {/* Delivery Info Section */}
      <button
        css={styles.infoButton}
        onClick={() => {
          setShowDeliveryInfo((prev) => !prev);
          setShowRefundInfo(false);
        }}
      >
        배송정보 안내
        <svg width="10" height="10" viewBox="0 0 28 16" style={{ marginLeft: "10px" }}>
          <path d="M28 1L13.97 15 0 1.058" stroke="#484848" strokeWidth="3" fill="none" />
        </svg>
      </button>
      {showDeliveryInfo && (
        <div>
          <h2 css={styles.infoTitle}>배송 정보</h2>
          <p css={styles.infoText}>
            Delivery 브랜드 업체 발송은 상품설명에 별도로 기입된 브랜드 알림 배송 공지 기준으로 출고되고 브랜드마다 개별 배송비가 부여됩니다.
          </p>
          <p css={styles.infoText}>
            SPECIAL ORDER, PT 등 예약주문은 상세설명의 출고일정을 확인하세요.
          </p>
        </div>
      )}

      {/* Refund Info Section */}
      <div css={styles.separatorLine} />

      <button
        css={styles.infoButton}
        onClick={() => {
          setShowRefundInfo((prev) => !prev);
          setShowDeliveryInfo(false);
        }}
      >
        교환 및 환불 안내
        <svg width="10" height="10" viewBox="0 0 28 16" style={{ marginLeft: "10px" }}>
          <path d="M28 1L13.97 15 0 1.058" stroke="#484848" strokeWidth="3" fill="none" />
        </svg>
      </button>
      {showRefundInfo && (
        <div>
          <h2 css={styles.infoTitle}>교환, 환불, A/S 안내</h2>
          <ul css={styles.infoText}>
            <li>상품 수령일로부터 7일 이내 반품 / 환불 가능합니다.</li>
            <li>변심 반품의 경우 왕복배송비를 차감한 금액이 환불되며, 제품 및 포장 상태가 재판매 가능하여야 합니다.</li>
            <li>동일상품 또는 동일상품 내 추가금액이 없는 옵션만 교환 가능합니다.</li>
            <li>상품 불량인 경우는 배송비를 포함한 전액이 환불됩니다.</li>
          </ul>
        </div>
      )}
    </>
  );
}
