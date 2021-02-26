import styled, { css, keyframes } from "styled-components";

import { bgMaskWidth } from "../PlaceOrderAnimation.styles";

export const numberOfSnowFlakes = 100;

/* Snowflake Animation Credit - https://codepen.io/alphardex/pen/dyPorwJ */
const snowFallAnimation = keyframes`
  0% {
    transform: translateY(-100px) scale(0);
    opacity: 1;
  }
  2% {
    transform: translateY(-100px) scale(1);
    opacity: 1;
  } 
  100% {
    transform: translateY(300px) scale(0);
    opacity: 1;
  }
`;

export function createSnowFlakesAnimation() {
  let styles = "";

  const random = (min = 1, max = 1000000) =>
    Math.floor(Math.random() * max) + min;

  Array(numberOfSnowFlakes)
    .fill()
    .forEach((_, idx) => {
      const randomSize = random(1, 10) + 1;
      const randomDuration = random(1, 20) + 10;
      const randomDelay = random(1, 10) + 1;
      const randomColor = random(1, 10) + 90;

      styles += `
      &:nth-child(${idx + 1}) {
        margin-left: ${(bgMaskWidth / 100) * idx}px;
        width: ${randomSize}px;
        height: ${randomSize}px;
        background: hsla(0, 0%, ${randomColor},.8);
        box-shadow: 0 0 15px 10px hsla(0, 0%, ${randomColor}, .5);
        animation-duration: ${randomDuration}s;
        animation-iteration-count: infinite;
        animation-delay: -${randomDelay}s;
        opacity: 0;
      }
    `;
    });

  return css`
    ${styles}
  `;
}

export const SnowFlakesWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;

  .snowflake {
    ${createSnowFlakesAnimation()};
    animation-name: ${snowFallAnimation};
  }
`;

export const SnowFlake = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
`;
