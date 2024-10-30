/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './Shop.style';
import Header from "@components/global/header";
import TabBar from "@components/global/TabBar/TabBar";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('전체');

  const tabs = ['전체', '간식/사료', '의류', '유모차', '용품'];
  const products = [
    { id: 1, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 2, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
    { id: 3, title: '캣만두 라이프 에션셀 치킨', price: '33,000원' },
     {id:4, title:'캣만두 라이프 에션셀 치킨',price: '33,000원'},
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <Header type={1}/>
    <div css={styles.mainContainer}>
      <div css={styles.tabBarContainer}>
        {tabs.map((tab, index) => (
          <span
            key={index}
            css={styles.tabItem(tab === activeTab)}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </span>
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
    <TabBar/>
    </>
  );
}
