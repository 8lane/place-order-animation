import styled from "styled-components";

import config from "../../config";
import { generateProductKeyframes } from "../../AnimationHelpers";

const {
  placeOrderAnimation: {
    initialDelayMs,
    box: {
      lid: { animDurationMs: boxAnimDuration }
    },
    products: {
      total,
      animYAxisMoveDistancePx,
      animTimingFunction,
      animDurationMs: productAnimDuration
    }
  }
} = config;

const [
  teddyBearDropIn,
  gamepadDropIn,
  blenderDropIn
] = generateProductKeyframes({
  numberOfProducts: total,
  productAnimDurationSeconds: productAnimDuration / 1000,
  boxAnimDurationSeconds: boxAnimDuration / 1000,
  productEndPositionPx: animYAxisMoveDistancePx
});

// Active
export const Gamepad = styled.svg`
  width: 47px;
  height: 24px;
  margin-left: -15px;
  animation: ${gamepadDropIn} 12s ${animTimingFunction} infinite both
    ${initialDelayMs}ms;
`;

export const TeddyBear = styled.svg`
  width: 48px;
  height: 54px;
  margin-left: -15px;
  animation: ${teddyBearDropIn} 12s ${animTimingFunction} infinite both
    ${initialDelayMs}ms;
`;

export const Blender = styled.svg`
  width: 36px;
  height: 58px;
  margin-left: -11px;
  animation: ${blenderDropIn} 12s ${animTimingFunction} infinite both
    ${initialDelayMs}ms;
`;
