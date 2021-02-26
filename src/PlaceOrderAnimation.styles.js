import styled from "styled-components";

export const bgMaskWidth = 338;
const bgMaskHeight = 500;
const bgMaskMaxHeight = 329;

export const AnimationContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-height: 600px;
  margin-bottom: 50px;
  width: 338px;
  overflow: hidden;
  cursor: progress;
  transform: scale(0.8); // temporary responsive fix

  @media (min-width: ${(props) => props.theme.screen_md_min}) {
    transform: scale(1);
  }
`;

export const AnimationViewport = styled.div`
  width: ${bgMaskWidth}px;
  height: ${bgMaskHeight}px;
  max-height: ${bgMaskMaxHeight}px;
  position: relative;
`;

export const ProductsMask = styled.div`
  overflow: hidden;
  height: 235px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const ProductsAnimation = styled.div`
  && {
    .product {
      transform-origin: bottom;
      position: absolute;
      z-index: 2;
      top: -80px;
      left: 50%;
    }
  }
`;
