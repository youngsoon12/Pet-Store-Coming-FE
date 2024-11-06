/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { styles } from './Category.style';
import { useRecoilValue } from 'recoil';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '@recoil/atom/category';
import { useNavigate } from 'react-router-dom';
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
  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     const results = products.filter((product) =>
  //       product.title.includes(searchTerm)
  //     );
  //     setFilteredProducts(results);
  //   } else {
  //     setFilteredProducts([]);
  //   }
  // }, [searchTerm]);

  ////////////////////////
  // 카테고리 목록 가져오기
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategory = useRecoilValue(isSubCategoryInfoState);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // console.log(mainCategory, subCategory);
    // mainCategory와 subCategory를 매핑하는 함수
    if (mainCategory && subCategory) {
      const mappedCategories = mainCategory?.map((main) => ({
        main: main.slug.toUpperCase(),
        mainSlug: main.slug,
        subs: subCategory
          .filter((sub) => sub.mainCategoryId === main.id)
          .map((sub) => ({ sub: sub.name, subSlug: sub.slug })),
      }));

      setCategories(mappedCategories);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div css={styles.categoryContainer}>
      {/* {filteredProducts.length > 0 ? (
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
      ) : ( */}
      <>
        {/* 기본 카테고리 목록 렌더링 */}
        <div css={styles.categoryGridContainer}>
          {categories.map((main) => (
            <div css={styles.categorySection} key={main.mainSlug}>
              <h2
                css={styles.categoryTitle}
                onClick={() => navigate(`/shop/${main.mainSlug}`)}
              >
                {main.main}
              </h2>
              <ul css={styles.itemList}>
                {main.subs.map((sub, index) => (
                  <li
                    css={styles.item}
                    key={index}
                    onClick={() => navigate(`/shop/${sub.subSlug}`)}
                  >
                    {sub.sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
      {/* )} */}
    </div>
  );
}
