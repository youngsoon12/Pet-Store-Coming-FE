/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { styles } from './Category.style';

const products = [
  { id: 1, title: '닭고기', price: '₩20,000' },
  { id: 2, title: '닭고기', price: '₩20,000' },
  { id: 3, title: '덴탈껌', price: '₩15,000' },
  { id: 4, title: 'wagon 유모차 ', price: '₩100,000' },
  { id: 5, title: 'wagon 유모차 ', price: '₩100,000' },
  { id: 6, title: 'wagon 유모차 ', price: '₩100,000' },
  { id: 7, title: 'wagon 유모차 ', price: '₩100,000' },
];

// const categories = [
//   {
//     title: '간식/사료',
//     items: ['영양제', '수제간식', '덴탈껌', '건식사료', '습식사료'],
//   },
//   { title: '유모차', items: ['소형견', '대형견', '다인승', '쿠션'] },
//   {
//     title: '의류',
//     items: ['상의', '원피스', '아우터/우비', '수영복', '악세사리'],
//   },
//   {
//     title: '용품',
//     items: [
//       '미용용품',
//       '장난감',
//       '방석',
//       '위생용품',
//       '산책용품',
//       '가방/카시트',
//     ],
//   },
// ];

// const [categories,setCategories] = useState([]);

export default function Category({ searchTerm }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter((product) =>
        product.title.includes(searchTerm)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  return (
    <div css={styles.categoryContainer}>
      {filteredProducts.length > 0 ? (
        <>
          <div css={styles.itemsLabel}>ITEMS</div>
          <div css={styles.productGridContainer}>
            {filteredProducts.map((product) => (
              <div key={product.id} css={styles.itemGridImageContainer}>
                <div css={styles.itemGridImage}></div>
                <div css={styles.itemGridTitle}>{product.title}</div>
                <div css={styles.itemGridPrice}>{product.price}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* 기본 카테고리 목록 렌더링 */}
          <div css={styles.categoryGridContainer}>
            {categories.map((category) => (
              <div css={styles.categorySection} key={category.title}>
                <h2 css={styles.categoryTitle}>{category.title}</h2>
                <ul css={styles.itemList}>
                  {category.items.map((item, index) => (
                    <li css={styles.item} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
