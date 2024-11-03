import { css } from '@emotion/react';
export const styles = {
  controlContainer: css`
    display: flex;
    position: relative;
    &:not(:first-of-type) {
      margin-top: 0.7rem;
    }
  `,
  screenReader: css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    margin: -1px;
    clip-path: inset(50%);
  `,
  labelBox: css`
    position: relative;
    user-select: none;
  `,
  checkIcon: css`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      width: 0.3rem; /* 30% of 1.4rem */
      height: 0.55rem; /* 55% of 1.4rem */
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-70%) rotateZ(40deg);
      border-right: 1.7px solid gray;
      border-bottom: 1.7px solid gray;
    }
  `,
  label: css`
    padding-left: 1.5rem;
    position: relative;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    color: black;
  `,
  checkedCheckIcon: css`
    border-color: #171717;
    background-color: #171717;

    &::before {
      border-color: #fff;
    }
  `,
};
