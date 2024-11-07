/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { styles } from './Search.style';
import CategoryList from '@components/Search/CategoryList/CategoryList';

import searchIcon from '@assets/images/Header/icons/search.svg';
import axios from 'axios';
import SearchResult from '@components/Search/SearchResult/SearchResult';


export default function SearchPage() {
  const [searchValue, setSearchValue] = useState(''); // 상품 인풋 텍스트
  const [searchResults, setSearchResults] = useState(null); // 얻어온 데이터의 정보를 담는 State 변수

  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    if (!searchValue) {
      inputRef.current.focus();
      return;
    }

    try {
      const res = await axios
        .get(
          `${import.meta.env.VITE_API_URL}/product/find?search=${searchValue}`
        )
        .then((res) => res.data);

      setSearchResults([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {}, []);

  return (
    <div css={styles.container}>
      <form onSubmit={handleSearchSubmit} css={styles.searchBox}>
        <input
          type="text"
          name="keyword"
          placeholder="Search"
          css={styles.input}
          value={searchValue}
          onChange={handleSearchChange}
          ref={inputRef}
        />
        <button type="submit" css={styles.searchIcon}>
          <img src={searchIcon}></img>
        </button>
      </form>
      {/* <Category searchValue={submittedTerm} /> */}

      {searchResults ? (
        <SearchResult result={searchResults} />
      ) : (
        <CategoryList />
      )}

      {/* <CategoryList
        style={{
          display: hasSearched && searchResults.length > 0 ? 'none' : 'block',
        }}
        aria-hidden={hasSearched && searchResults.length > 0}
      /> */}
    </div>
  );
}
