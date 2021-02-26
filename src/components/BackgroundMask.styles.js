import styled, { css } from "styled-components";

import config from "../config";

const {
  placeOrderAnimation: {
    seasons,
    colors: {
      variants: {
        default: { bgMask }
      }
    }
  }
} = config;

export const Mask = styled.svg`
  ${(props) =>
    props.season === seasons.default &&
    css`
      fill: ${bgMask};
    `}

  ${(props) =>
    props.season === seasons.xmas &&
    css`
      shape-rendering: crispEdges;
      fill: url(#NightTimeGradient);
    `}
`;

export const SnowPatch = styled.svg`
  width: 124px;
  height: 27px;
  position: absolute;
  left: 50%;
  margin-left: -55px;
  bottom: 25px;
  z-index: 3;
`;
