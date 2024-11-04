/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { styles } from './Shop.style';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../../recoil/atom/category';
import { useRecoilValue } from 'recoil';

export default function ShopPage() {
  const mainCategoryInfoValues = useRecoilValue(isMainCategoryInfoState);
  const subCategoryInfoValues = useRecoilValue(isSubCategoryInfoState);
  const [activeTab, setActiveTab] = useState('전체');

  // const tabs = ['전체', '간식/사료', '의류', '유모차', '용품'];
  const products = [
    { id: 1, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 2, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 3, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 4, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log(mainCategoryInfoValues);
    console.log(subCategoryInfoValues);
  }, []);

  return (
    <>
      <div css={styles.mainContainer}>
        <div css={styles.tabBarContainer}>
          {mainCategoryInfoValues?.map((category, index) => (
            <span
              key={category.id}
              css={styles.tabItem(category.name === activeTab)}
            >
              {category.name}
            </span>
            // <span
            //   key={index}
            //   css={styles.tabItem(tab === activeTab)}
            //   onClick={() => handleTabClick(tab)}ca
            // >
            //   {tab}
            // </span>
          ))}
        </div>

        {/* BEST ITEMS Section */}
        <div css={styles.bestItemsLabel}>BEST ITEMS</div>
        <div css={styles.productCarousel}>
          {products.map((product) => (
            <div key={product.id} css={styles.productItem}>
              <div css={styles.productImage} />
              <div css={styles.productTitle}>{product.title}</div>
              <div css={styles.productPrice}>{product.price}</div>
            </div>
          ))}
        </div>

        <div css={styles.divider}></div>

        {/* ITEMS Section */}
        <div css={styles.itemsLabel}>ITEMS</div>
        <div css={styles.itemGridContainer}>
          {products.map((product) => (
            <div key={product.id} css={styles.itemGridImageContainer}>
              <div css={styles.itemGridImage}></div>
              <div css={styles.itemGridTitle}>{product.title}</div>
              <div css={styles.itemGridPrice}>{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
