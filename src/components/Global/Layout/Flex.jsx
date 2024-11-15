import styled from '@emotion/styled';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `${direction}` : 'row')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
  align-items: ${({ align }) => (align ? `${align}` : 'center')};
  gap: ${({ webGap }) => (webGap ? `${webGap}rem` : '0rem')};
  width: ${({ width, widthPer }) =>
    width ? `${width}rem` : widthPer ? `${widthPer}%` : '100%'};
  height: ${({ height, heightVh }) =>
    height ? `${height}rem` : heightVh ? `${heightVh}vh` : '100vh'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : '#fff'};
  flex: 1;
  /* 브라우저 크기에 따라 가로 크기 변경 */
  /* @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}rem` : '0')};
  } */
`;

export const RelativeContainer = styled(Flex)`
  position: relative;

  .is-hover {
    display: none;
  }
  :hover {
    .is-hover {
      display: flex;
    }
  }
`;

export const AbsoluteFlex = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;

  &.is-hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Space = styled.div`
  height: ${({ height }) => (height ? `${height}rem` : '')};
  width: ${({ width }) => (width ? `${width}rem` : '')};
`;
