import React from "react";

import config from "../config";
import { useSeasonalState } from "../SeasonalContext";

import * as Styled from "./Snow.styles";

const {
  placeOrderAnimation: { seasons }
} = config;

export default function Snow() {
  const { season } = useSeasonalState();

  if (season !== seasons.xmas) return null;

  return (
    <Styled.SnowFlakesWrapper aria-hidden={true}>
      {Array(Styled.numberOfSnowFlakes)
        .fill()
        .map((idx) => (
          <Styled.SnowFlake key={idx} className="snowflake" />
        ))}
    </Styled.SnowFlakesWrapper>
  );
}
