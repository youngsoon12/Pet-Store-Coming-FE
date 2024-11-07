/** @jsxImportSource @emotion/react */
import React from 'react';
import Button from '@components/Global/Button/Button';
import { styles } from './CategoryButton.style.js';

export default function CategoryButton({
  label,
  categories,
  selectedCategories,
  handleCategorySelect,
  disableUnselected,
}) {
  return (
    <>
      <label css={styles.subLabel}>{label}</label>
      <div css={styles.categoryButtonContainer}>
        {categories.map((category) => (
          <Button
            key={category.id}
            text={category.name}
            width={110}
            height={50}
            onClick={() => handleCategorySelect(category.id)}
            theme={selectedCategories.includes(category.id) ? 'black' : 'white'}
            fontSize={category.name === '급식기/급수기' ? 13 : 16}
            fontWeight={500}
            disableUnselected={
              !selectedCategories.includes(category.id) && disableUnselected
            }
            type="button"
          />
        ))}
      </div>
    </>
  );
}
