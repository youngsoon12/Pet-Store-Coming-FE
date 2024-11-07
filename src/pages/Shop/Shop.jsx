/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { styles } from './Shop.style';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom'; 

import { isMainCategoryInfoState, isSubCategoryInfoState } from '../../recoil/atom/category';
import axios from 'axios';

export default function ShopPage() {
  const mainCategoryInfoValues = useRecoilValue(isMainCategoryInfoState);
  const subCategoryInfoValues = useRecoilValue(isSubCategoryInfoState);
  const [activeTab, setActiveTab] = useState([]);
  const { category } = useParams(); 
  const navigate = useNavigate(); 
  
  const [product, setProduct] = useState(null); // 전체 상품 state 변수
  const [newProduct, setNewProduct] = useState(null); // 전체 상품 state 변수


  useEffect(() => {
    setActiveTab(category || '전체');
  }, [category]);

  // 최조 렌더링 시
  useEffect(() => {

    const baseUrl = import.meta.env.VITE_API_URL;

    async function getFindAllProducts() {
      const data = await axios.get(`${baseUrl}/product/find-all`).then(res => res.data.data);
      setProduct([ ...data ]);
    }

    async function getFilnAllNewProductes() {
      const data = await axios.get(`${baseUrl}/product/find-new-product`).then(res => res.data.data);
      setNewProduct([ ...data ]);
    }

    getFindAllProducts();
    getFilnAllNewProductes();

  }, []);

  const handleTabClick = (item) => {
    
    console.log(item.id);
    // console.log(categoryName)

    navigate(`/shop/${item.slug}`, { state: {
      main: item.id,
      sub: "",
    } });
    // setActiveTab(categoryName);
  };

  return (
    <>
    <div css={styles.mainContainer}>
      <div >
        <div css={styles.tabBarContainer}>
          {mainCategoryInfoValues?.map((categoryItem) => {
            return (
              <span
                key={categoryItem.id}
                css={styles.tabItem(categoryItem.name === activeTab)}
                onClick={() => handleTabClick(categoryItem)} 
              >
                {categoryItem.name}
              </span>
            )
          })}
        </div>
  
       {/* NEW ITEMS Section */}
     <div css={styles.bestItemsLabel}>NEW ITEMS</div>
      <div css={styles.productCarousel}>
        {newProduct && newProduct.map((item) => {
            return (
              <div key={item.productId} css={styles.productItem} onClick={() => navigate(`/product/${item.productId}`)}>
             <div css={styles.productImage}style={{ backgroundImage: `url(${item.productThumbnailImageUrl})` }} />
            <div css={styles.productTitlePriceContainer}>
            <div css={styles.storeBrandName}>{item.storeBrandName}</div>
            <div css={styles.productName}>{item.productName}</div>
            {item.productDiscountRate > 0 ? (
            <>
            
              <div css={styles.productPrice}>{item.productPrice}원</div>
              <div css={styles.productWrapper}>
              <div css={styles.productRate}>{item.productDiscountRate}%</div>
              <div css={styles.proDiscount}>{item.productDiscountPrice}원</div>
             </div>
              </>
          ) : (
            <div css={styles.proDiscount}>{item.productPrice}원</div> 
          )}
        </div>
      </div>
    );
  })}
</div>

<div css={styles.divider}></div>

{/* ITEMS Section */}
<div css={styles.itemsLabel}>ITEMS</div>
<div css={styles.itemGridContainer}>
  {product && product.map((item) => {
    return (
      <div key={item.productId} css={styles.itemGridImageContainer} onClick={() => navigate(`/product/${item.productId}`)}>
        <div
          css={styles.itemGridImage}
          style={{ backgroundImage: `url(${item.productThumbnailImageUrl})` }}
        />
        <div css={styles.itemGridTitlePriceContainer}>
          <div css={styles.productTitle}>{item.storeBrandName}</div>
          <div css={styles.productName}>{item.productName}</div>
          {item.productDiscountRate > 0 ? (
            <>
               <div css={styles.itemGridPrice}>{item.productPrice}원</div>
             <div css={styles.productWrapper}>
              <div css={styles.productRate}>{item.productDiscountRate}%</div>
              <div css={styles.proDiscount}>{item.productDiscountPrice}원</div>
             </div>
              </>
          ) : (
            <div css={styles.proDiscount}>{item.productPrice}원</div> 
          )}
        </div>
      </div>
    );
  })}
</div>

     
      </div>
    </div>
    </>
  );
}
