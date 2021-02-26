import styled, { keyframes, css } from "styled-components";

import config from "../config";

const {
  placeOrderAnimation: {
    seasons,
    initialDelayMs,
    box: {
      lid: { animDurationMs: boxLidAnimDurationMs }
    }
  }
} = config;

export const BoxAndLid = styled.div``;

export const Box = styled.svg`
  position: absolute;
  z-index: 2;
  left: 50%;

  width: 89px;
  height: 70px;
  bottom: 37px;
  margin-left: -38px;

  ${(props) =>
    props.season === seasons.xmas &&
    css`
      width: 97px;
      height: 74px;
      bottom: 34px;
      margin-left: -41px;
    `}
`;

/* To keep the perspective animation in sync with the lid animation, we must apply a keyframe 'hack'.
  Due to CSS not having an animation-delay AFTER the iteration. By having the same animation duration
  for both animations, we can then adjust the keyframes of the perspective animation to fire the 
  transforms at the exact moments we need - https://stackoverflow.com/questions/13887889/css-animation-delay-in-repeating */
function generateLidPerspectiveKeyframes(season) {
  const vAxisScale = season === seasons.xmas ? 0.8 : 0.5;

  return keyframes`
    0% { transform: scale(1, 1); }
    6% { transform: scale(1, ${vAxisScale}); }
    60% { transform: scale(1, ${vAxisScale}); }
    66% { transform: scale(1, 1); }
    100% { transform: scale(1, 1); }
  `;
}

/* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bl%3A1%2Cs%3A%5B%7BT%3A%22r%22%2Ce%3A%22b%22%2Cd%3A2500%2CD%3A0%2Cf%3A0%2Ct%3A40%2Cs%3A4%2Cb%3A5%7D%2C%7BT%3A%22t%22%2Ce%3A%22b%22%2Cd%3A1500%2CD%3A0%2Cf%3A%7Bx%3A0%2Cy%3A0%7D%2Ct%3A%7Bx%3A45%2Cy%3A-50%7D%2Cs%3A3%2Cb%3A4%7D%2C%7BT%3A%22r%22%2Ce%3A%22b%22%2Cd%3A1750%2CD%3A2250%2Cf%3A0%2Ct%3A-40%2Cs%3A4%2Cb%3A0%7D%2C%7BT%3A%22t%22%2Ce%3A%22b%22%2Cd%3A1500%2CD%3A2250%2Cf%3A%7Bx%3A0%2Cy%3A0%7D%2Ct%3A%7Bx%3A-66.5%2Cy%3A10%7D%2Cs%3A3%2Cb%3A0%7D%5D%7D */
const lidRotateOut = keyframes`
  0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  1.61% { transform: matrix3d(0.965, 0.262, 0, 0, -0.262, 0.965, 0, 0, 0, 0, 1, 0, 29.066, -18.759, 0, 1); }
  2.25% { transform: matrix3d(0.935, 0.354, 0, 0, -0.354, 0.935, 0, 0, 0, 0, 1, 0, 40.775, -21.042, 0, 1); }
  3.23% { transform: matrix3d(0.882, 0.471, 0, 0, -0.471, 0.882, 0, 0, 0, 0, 1, 0, 55.574, -20.111, 0, 1); }
  4.44% { transform: matrix3d(0.817, 0.576, 0, 0, -0.576, 0.817, 0, 0, 0, 0, 1, 0, 67.198, -15.288, 0, 1); }
  4.84% { transform: matrix3d(0.799, 0.602, 0, 0, -0.602, 0.799, 0, 0, 0, 0, 1, 0, 69.482, -13.517, 0, 1); }
  6.46% { transform: matrix3d(0.744, 0.668, 0, 0, -0.668, 0.744, 0, 0, 0, 0, 1, 0, 73.129, -7.826, 0, 1); }
  6.63% { transform: matrix3d(0.74, 0.672, 0, 0, -0.672, 0.74, 0, 0, 0, 0, 1, 0, 73.148, -7.403, 0, 1); }
  8.82% { transform: matrix3d(0.72, 0.694, 0, 0, -0.694, 0.72, 0, 0, 0, 0, 1, 0, 70.858, -5.028, 0, 1); }
  10.62% { transform: matrix3d(0.727, 0.686, 0, 0, -0.686, 0.727, 0, 0, 0, 0, 1, 0, 68.428, -5.59, 0, 1); }
  14.51% { transform: matrix3d(0.756, 0.655, 0, 0, -0.655, 0.756, 0, 0, 0, 0, 1, 0, 66.337, -8.287, 0, 1); }
  14.79% { transform: matrix3d(0.757, 0.653, 0, 0, -0.653, 0.757, 0, 0, 0, 0, 1, 0, 66.314, -8.44, 0, 1); }
  20.21% { transform: matrix3d(0.769, 0.639, 0, 0, -0.639, 0.769, 0, 0, 0, 0, 1, 0, 66.542, -9.704, 0, 1); }
  23.12% { transform: matrix3d(0.768, 0.64, 0, 0, -0.64, 0.768, 0, 0, 0, 0, 1, 0, 66.608, -9.599, 0, 1); }
  31.49% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.613, -9.353, 0, 1); }
  31.59% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.613, -9.353, 0, 1); }
  37.5% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.612, -9.372, 0, 1); }
  42.98% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.611, -9.378, 0, 1); }
  54.37% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.611, -9.377, 0, 1); }
  56.15% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.611, -9.377, 0, 1); }
  56.25% { transform: matrix3d(0.766, 0.643, 0, 0, -0.643, 0.766, 0, 0, 0, 0, 1, 0, 66.611, -9.377, 0, 1); }
  57.45% { transform: matrix3d(0.892, 0.452, 0, 0, -0.452, 0.892, 0, 0, 0, 0, 1, 0, 45.932, -16.216, 0, 1); }
  57.65% { transform: matrix3d(0.905, 0.425, 0, 0, -0.425, 0.905, 0, 0, 0, 0, 1, 0, 42.972, -16.411, 0, 1); }
  58.61% { transform: matrix3d(0.95, 0.313, 0, 0, -0.313, 0.95, 0, 0, 0, 0, 1, 0, 30.921, -15.458, 0, 1); }
  59.01% { transform: matrix3d(0.961, 0.275, 0, 0, -0.275, 0.961, 0, 0, 0, 0, 1, 0, 26.962, -14.54, 0, 1); }
  60.37% { transform: matrix3d(0.984, 0.176, 0, 0, -0.176, 0.984, 0, 0, 0, 0, 1, 0, 16.781, -10.749, 0, 1); }
  60.94% { transform: matrix3d(0.989, 0.145, 0, 0, -0.145, 0.989, 0, 0, 0, 0, 1, 0, 13.731, -9.186, 0, 1); }
  61.72% { transform: matrix3d(0.994, 0.112, 0, 0, -0.112, 0.994, 0, 0, 0, 0, 1, 0, 10.468, -7.276, 0, 1); }
  62.5% { transform: matrix3d(0.996, 0.086, 0, 0, -0.086, 0.996, 0, 0, 0, 0, 1, 0, 8.012, -5.665, 0, 1); }
  63.31% { transform: matrix3d(0.998, 0.065, 0, 0, -0.065, 0.998, 0, 0, 0, 0, 1, 0, 6.078, -4.288, 0, 1); }
  64.48% { transform: matrix3d(0.999, 0.044, 0, 0, -0.044, 0.999, 0, 0, 0, 0, 1, 0, 4.078, -2.756, 0, 1); }
  65.63% { transform: matrix3d(1, 0.03, 0, 0, -0.03, 1, 0, 0, 0, 0, 1, 0, 2.772, -1.695, 0, 1); }
  67.2% { transform: matrix3d(1, 0.017, 0, 0, -0.017, 1, 0, 0, 0, 0, 1, 0, 1.656, -0.749, 0, 1); }
  70.33% { transform: matrix3d(1, 0.006, 0, 0, -0.006, 1, 0, 0, 0, 0, 1, 0, 0.626, 0.156, 0, 1); }
  72.67% { transform: matrix3d(1, 0.003, 0, 0, -0.003, 1, 0, 0, 0, 0, 1, 0, 0.334, 0.418, 0, 1); }
  75.02% { transform: matrix3d(1, 0.001, 0, 0, -0.001, 1, 0, 0, 0, 0, 1, 0, 0.206, 0.535, 0, 1); }
  78.15% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.141, 0.595, 0, 1); }
  93.75% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.111, 0.623, 0, 1); }
  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.111, 0.623, 0, 1); } 
`;

export const Lid = styled.div`
  position: absolute;
  left: 50%;
  bottom: 85px;
  margin-left: -43px;
  z-index: 3;

  ${(props) =>
    props.season === seasons.xmas &&
    css`
      margin-left: -42px;
    `}

  .lid-top {
    transform-origin: bottom;
  }

  animation: ${lidRotateOut} ${boxLidAnimDurationMs}ms linear infinite both
    ${initialDelayMs}ms;

  .lid-top {
    ${({ season }) => css`
      animation: ${generateLidPerspectiveKeyframes(season)}
        ${boxLidAnimDurationMs}ms linear infinite both ${initialDelayMs}ms;
    `}

    transform-origin: bottom;
  }
`;

export const LidWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LidTop = styled.svg`
  width: 98px;
  height: 14px;

  ${(props) =>
    props.season === seasons.xmas &&
    css`
      height: 30px;
    `}
`;

export const LidFace = styled.svg`
  width: 98px;
  height: 18px;
  margin-top: -1px;
`;
