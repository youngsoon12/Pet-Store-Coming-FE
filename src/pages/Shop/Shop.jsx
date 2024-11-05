/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './Shop.style';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom'; 

import { isMainCategoryInfoState, isSubCategoryInfoState } from '../../recoil/atom/category';

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('전체');
  const { category } = useParams(); 
  const navigate = useNavigate(); 
  const products = [
    { id: 1, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 2, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 3, title: '캣만두 라이프 에션c셀 치킨', price: '33,000원' },
    { id: 4, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
  ];

  useEffect(() => {
   
    console.log("Selected category:", category);
    setActiveTab(category || '전체');
  }, [category]);

  const handleTabClick = (categoryName) => {
    navigate(`/shop/${categoryName}`);
    setActiveTab(categoryName);
  };

  return (
    <>
    <div>
      <div css={styles.mainContainer}>
        <div css={styles.tabBarContainer}>
          {mainCategoryInfoValues?.map((categoryItem) => (
            <span
              key={categoryItem.id}
              css={styles.tabItem(categoryItem.name === activeTab)}
              onClick={() => handleTabClick(categoryItem.name)} 
            >
              {categoryItem.name}
            </span>
          ))}
        </div>
  
        {/* BEST ITEMS Section */}
        <div css={styles.bestItemsLabel}>BEST ITEMS</div>
        <div css={styles.productCarousel}>
          {products.map((product) => (
            <div key={product.id} css={styles.productItem}>
              <div css={styles.productImage} />
              <div css={styles.productTitlePriceContainer}>
                <div css={styles.productTitle}>{product.title}</div>
                <div css={styles.productPrice}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
  
        {/* NEW ITEMS Section */}
        <div css={styles.bestItemsLabel}>NEW ITEMS</div>
        <div css={styles.productCarousel}>
          {products.map((product) => (
            <div key={product.id} css={styles.productItem}>
              <div css={styles.productImage} />
              <div css={styles.productTitlePriceContainer}>
                <div css={styles.productTitle}>{product.title}</div>
                <div css={styles.productPrice}>{product.price}</div>
              </div>
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
              <div css={styles.itemGridTitlePriceContainer}>
                <div css={styles.itemGridTitle}>{product.title}</div>
                <div css={styles.itemGridPrice}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
    </>
  );
  
}
