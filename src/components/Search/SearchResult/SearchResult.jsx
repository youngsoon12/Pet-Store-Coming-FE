/** @jsxImportSource @emotion/react */
import { styles } from './SearchResult.style';

export default function SearchResult({ result }) {
  console.log(result);

  return (
    <div css={styles.categoryContainer}>
      <div css={styles.itemsLabel}>ITEMS</div>
      <div css={styles.productGridContainer}>
        {result.map((item) => {
          return (
            <div key={item.productId} css={styles.itemGridImageContainer}>
              <div css={styles.itemGridImage(item.productThumbnailImageUrl)} />

              <div css={styles.storeInfo}>
                <span>{item.storeBrandName}</span>
              </div>

              <div css={styles.itemGridTitle}>
                <span>{item.productName}</span>
              </div>

              <div css={styles.itemGridPrice_box}>
                <span css={styles.itemGridPrice(item.productDiscountRate > 0)}>
                  {Number(item.productPrice).toLocaleString()}원
                </span>

                {item.productDiscountRate > 0 && (
                  <div className="dicountPriceInfo">
                    <span className="discountRate">
                      {item.productDiscountRate}%
                    </span>
                    <span className="discountPrice">
                      {Number(item.productDiscountPrice).toLocaleString()}원
                    </span>
                  </div>
                )}
              </div>

              {/* <div css={styles.itemGridTitle}></div> */}
              {/* <div css={styles.itemGridPrice}>{item.productPrice}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
