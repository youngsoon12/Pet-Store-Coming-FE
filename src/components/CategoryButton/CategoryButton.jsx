/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '../global/button/index.jsx';
import { styles } from './CategoryButton.style.js';

export default function CategoryButton({
  label,
  categories,
  selectedCategories,
  handleCategorySelect,
  categoryType,
  disableUnselected,
}) {
  return (
    <>
      <label css={styles.subLabel}>{label}</label>
      <div css={styles.categoryButtonContainer}>
        {categories.map((category) => (
          <Button
            key={category}
            text={category}
            width={110}
            height={50}
            onClick={() => handleCategorySelect(category, categoryType)}
            theme={selectedCategories.includes(category) ? 'black' : 'white'}
            fontSize={16}
            fontWeight={500}
            disableUnselected={
              !selectedCategories.includes(category) && disableUnselected
            }
          />
        ))}
      </div>
    </>
  );
}
