/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isMainCategoryInfoState, isSubCategoryInfoState } from '../../recoil/atom/category';
import axios from 'axios';
import { styles } from './Category.style';

export default function CategoryPage() {

  const { state } = useLocation();

  const { category, subcategory } = useParams();
  // const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
  const[sub, setSub] = useState(null);
  
  const mainCategoryInfoValues = useRecoilValue(isMainCategoryInfoState);
  const subCategoryInfoValues = useRecoilValue(isSubCategoryInfoState);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(subcategory);
  const [products, setProducts] = useState([]);
 

  useEffect(()=>{
    // console.log(state)
    const baseUrl = import.meta.env.VITE_API_URL;

    if(subcategory) {
      
      async function getFindAllProducts() {
        console.log(state);
        
        const data = 
          await axios
            .get(`${baseUrl}/product/${state.main}/${state.sub}/find-all`)
            .then(res => res.data.data)
            .catch(err => console.log(err));
        setProducts([ ...data ]);
      }
  
      async function getFilnAllNewProductes() {
        const data = await axios.get(`${baseUrl}/product/${state.main}/${state.sub}/find-new-product`).then(res => res.data.data);
        setSections([ ...data ]);
      }

      getFindAllProducts();
      getFilnAllNewProductes();

    } else {
      
      async function getFindAllProducts() {
        const data = 
          await axios
            .get(`${baseUrl}/product/${state.main}/find-all`)
            .then(res => res.data.data)
            .catch(err => console.log(err));
        setProducts([ ...data ]);
      }
  
      async function getFilnAllNewProductes() {
        const data = await axios.get(`${baseUrl}/product/${state.main}/find-new-product`).then(res => res.data.data);
        setSections([ ...data ]);
      }
   
      getFindAllProducts();
      getFilnAllNewProductes();
  


    }
    setSub([
      ...subCategoryInfoValues.filter((element) => {
        return element.mainCategoryId === state.main
      })
    ]);
    
},[subcategory])


  useEffect(() => {
    setActiveTab(subcategory);
  }, [subcategory]);

  // 콘솔 출력 추가
  useEffect(() => {
    
  }, [category, subcategory, mainCategoryInfoValues, subCategoryInfoValues, products, sections]);

  const handleTabClick = (categoryName) => {
    const mainid = state.main;
    navigate(`/shop/${category}/${encodeURIComponent(categoryName.slug)}`, { 
        state: {
          ...state,
          ["sub"]: categoryName.id
        } 
    });

    setActiveTab(categoryName);
  };

  return (
    <>
      <div css={styles.mainContainer}>
        {/* Tab Bar */}
        <div css={styles.tabBarContainer}>
          {sub?.map((categoryItem) => {
            return (
              <span
                key={categoryItem.id}
                id={categoryItem.id}
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
  {sections && sections.map((item) => (
    <div key={item.productId} css={styles.productItem} onClick={() => navigate(`/product/${item.productId}`)}>
      <div
        css={styles.itemGridImage}
        style={{ backgroundImage: `url(${item.productThumbnailImageUrl})` }}
      />
      <div css={styles.productTitlePriceContainer}>
        <div css={styles.productTitle}>{item.storeBrandName}</div>
        <div css={styles.productName}>{item.productName}</div>
        {item.productDiscountRate > 0 ? (
          <>
            <div css={styles.productPrice}>{item.productPrice}원</div>
            <div css={styles.productWrapper}>
            <div css={styles.itemGridDiscount}>{item.productDiscountRate}%</div>
            <div css={styles.itemPrice}>{item.productDiscountPrice}원</div>
            </div>
          </>
        ) : (
          <div css={styles.itemPrice}>{item.productPrice}원</div>
        )}
      </div>
    </div>
  ))}
</div>

<div css={styles.divider}></div>
 

{/* ITEMS Section */}
<div css={styles.itemsLabel}>ITEMS</div>
<div css={styles.itemGridContainer}>
  {products && products.map((product) => (
    <div key={product.productId} css={styles.itemGridImageContainer} onClick={() => navigate(`/product/${product.productId}`)}>
      <div
        css={styles.productImage}
        style={{ backgroundImage: `url(${product.productThumbnailImageUrl})` }}
      ></div>
      <div css={styles.itemGridTitle}>{product.storeBrandName}</div>
      <div css={styles.productName}>{product.productName}</div>

      {product.productDiscountRate > 0 ? (
        <>
          <div css={styles.itemGridPrice}>{product.productPrice}원</div>
          <div css={styles.productWrapper}>
          <div css={styles.itemGridDiscount}>{product.productDiscountRate}%</div>
          <div css={styles.itemPrice}>{product.productDiscountPrice}원</div>
          </div>
        </>
      ) : (
        <div css={styles.itemPrice}>{product.productDiscountPrice}원</div>
      )}
    </div>
  ))}
</div>

      </div>
    </>
  );
}
