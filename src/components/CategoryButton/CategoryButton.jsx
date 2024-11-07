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
  // console.log(
  //   selectedCategories
  //     .map((item) => item.subCategoryId)
  //     .includes('0813be5c-9064-4f97-83f3-ec3da62bac3f')
  // );

  return (
    <>
      <label css={styles.subLabel}>{label}</label>
      <div css={styles.categoryButtonContainer}>
        {categories.map((category) => (
          <Button
            key={category.id}
            text={category.name}
            padding="6px 8px"
            border="1px solid rgba(154, 154, 154, 0.6)"
            fontSize={13}
            fontWeight={500}
            type="button"
            theme={
              selectedCategories
                .map((item) => item.subCategoryId)
                .includes(category.id)
                ? 'black'
                : null
            }
            onClick={() => handleCategorySelect(category.id)}
          />
        ))}

        {/* {categories.map((category) => (
          <Button
            onClick={() => handleCategorySelect(category.id)}
            
            disableUnselected={
              !selectedCategories.includes(category.id) && disableUnselected
            }
          />
        ))} */}
      </div>
    </>
  );
}
