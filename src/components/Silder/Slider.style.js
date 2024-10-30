/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  sliderContainer: css`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  `,
  slide: css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  `,
  activeSlide: css`
    opacity: 1;
    z-index: 1;
  `,
  inactiveSlide: css`
    opacity: 0;
    z-index: 0;
  `,
  textContainer: css`
    position: absolute;
    bottom: 150px;
    left: 20px;
    color: #000000;

    h2 {
      font-size: 15px;
      margin-bottom: 5px;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 10px 0;
    }

    p {
      font-size: 15px;
    }
  `,
  categoryButton: css`
    margin-top: 101px;
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 15px;
    background-color: #000; 
  color: #fff; 
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    
  `,
};
