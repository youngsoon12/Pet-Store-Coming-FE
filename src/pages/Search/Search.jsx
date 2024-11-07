/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { styles } from './Search.style';
import Category from '../../components/Search/Category/Category';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm);
  };

  // useEffect(() => {}, []);

  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <div css={styles.container}>
      <form onSubmit={handleSearchSubmit} css={styles.searchBox}>
        <input
          type="text"
          name="keyword"
          placeholder="Search"
          css={styles.input}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" css={styles.searchIcon}>
          🔍
        </button>
      </form>
      {/* <Category searchTerm={submittedTerm} /> */}
      <Category
        style={{
          display: hasSearched && searchResults.length > 0 ? 'none' : 'block',
        }}
        aria-hidden={hasSearched && searchResults.length > 0}
      />
    </div>
  );
}
