/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { styles } from './Category.style'; 
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isMainCategoryInfoState } from '../../recoil/atom/category';
import axios from 'axios';

export default function CategoryPage() {
  const { category, subcategory } = useParams();
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const mainCategoryInfoValues = useRecoilValue(isMainCategoryInfoState);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(category);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/category/sub-category/list?mainCategoryId=${mainCategoryId}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error('제품을 가져오는 데 오류가 발생했습니다:', error);
      }
    };

    const fetchSections = async () => {
      const exampleSections = [
        {
          label: 'BEST ITEMS',
          items: [
            { id: 1, title: '베스트 제품 1', price: '50,000원' },
            { id: 2, title: '베스트 제품 2', price: '60,000원' },
            { id: 3, title: '베스트 제품 3', price: '70,000원' },
            { id: 4, title: '베스트 제품 4', price: '80,000원' },
          ],
        },
        {
          label: 'NEW ITEMS',
          items: [
            { id: 5, title: '추천 제품 1', price: '30,000원' },
            { id: 6, title: '추천 제품 1', price: '30,000원' },
            { id: 7, title: '추천 제품 1', price: '30,000원' },
            
          ],
        },
      ];
      setSections(exampleSections);
    };

    fetchProducts();
    fetchSections();
  }, [category, subcategory]);

  const handleTabClick = (categoryName) => {
    navigate(`/shop/${categoryName}`);
    setActiveTab(categoryName);
  };

  const dummyProducts = [
    { id: 1, name: ' 캣만두 라이프 에션셀 치킨', price: '20,000원' },
    { id: 2, name: '캣만두 라이프 에션셀 치킨 B', price: '30,000원' },
    { id: 3, name: '캣만두 라이프 에션셀 치킨', price: '40,000원' },
    { id: 4, name: '상품 D', price: '50,000원' },
    { id: 5, name: '상품 E', price: '60,000원' },
  ];

  useEffect(() => {
    if (products.length === 0) {
      setProducts(dummyProducts);
    }
  }, [products]);

  return (
    <>
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
        {sections.map((section) => (
          <div key={section.label}>
            <div css={styles.bestItemsLabel}>{section.label}</div>
            <div css={styles.productCarousel}>
              {section.items.map((product) => (
                <div key={product.id} css={styles.productItem}>
                  <div css={styles.productImage} />
                  <div css={styles.productTitle}>{product.title}</div>
                  <div css={styles.productPrice}>{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div css={styles.divider}></div>

        {/* ITEMS Section */}
        <div css={styles.itemsLabel}>ITEMS</div>
        <div css={styles.itemGridContainer}>
          {products.map((product) => (
            <div key={product.id} css={styles.itemGridImageContainer}>
              <div css={styles.itemGridImage}></div>
              <div css={styles.itemGridTitle}>{product.name}</div>
              <div css={styles.itemGridPrice}>{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
