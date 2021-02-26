import React from "react";

import config from "./config";
import { SeasonalProvider } from "./SeasonalContext";

import ProgressText from "./components/ProgressText";
import SeasonalSwitcher from "./components/SeasonalSwitcher";
import BackgroundMask from "./components/BackgroundMask";
import Box from "./components/Box";
import Snow from "./components/Snow";
import Gamepad from "./components/Products/Gamepad";
import TeddyBear from "./components/Products/TeddyBear";
import Blender from "./components/Products/Blender";

import * as Styled from "./PlaceOrderAnimation.styles";

const {
  placeOrderAnimation: { seasons }
} = config;

export default function PlaceOrderAnimation({
  switcher = true,
  season = seasons.default
}) {
  return (
    <SeasonalProvider value={season}>
      <Styled.AnimationContainer data-test="place-order-animation">
        <Styled.AnimationViewport>
          <BackgroundMask />
          <Snow />
          <Box />
          <Styled.ProductsMask>
            <Styled.ProductsAnimation>
              <Gamepad />
              <TeddyBear />
              <Blender />
            </Styled.ProductsAnimation>
          </Styled.ProductsMask>
        </Styled.AnimationViewport>
        <ProgressText />
      </Styled.AnimationContainer>

      {/* Dev only season switcher */}
      {switcher && <SeasonalSwitcher />}
    </SeasonalProvider>
  );
}
