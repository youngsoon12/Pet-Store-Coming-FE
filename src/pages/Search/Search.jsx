/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from './Search.style';
import Category from '../../components/Search/Category/Category';

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div css={styles.container}>
            <div css={styles.searchBox}>
                <input 
                    type="text" 
                    name="keyword" 
                    placeholder="Search" 
                    css={styles.input} 
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span css={styles.searchIcon}>🔍</span>
            </div>
            <Category searchTerm={searchTerm} />
        </div>
    );
}
