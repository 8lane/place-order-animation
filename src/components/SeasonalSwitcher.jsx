import React from "react";
import styled from "styled-components";

import config from "../config";
import { useSeasonalState } from "../SeasonalContext";

const {
  placeOrderAnimation: { seasons }
} = config;

const Switcher = styled.div`
  && {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 114px;
    left: 20px;
    padding: 15px;
    border-radius: 11px;

    button {
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      border: 0;
      background: transparent;
      text-decoration: none;
      text-align: left;
    }

    button:not(:first-child) {
      padding-top: 5px;
    }

    button:not(:last-child) {
      padding-bottom: 5px;
    }
  }
`;

export default function SeasonalSwitcher() {
  const { season } = useSeasonalState();

  const handleUpdateSeason = (selectedValue) => {
    localStorage.setItem("season-switcher", selectedValue);
    window.location.reload();
  };

  return (
    <Switcher>
      <button type="button" onClick={() => handleUpdateSeason(seasons.default)}>
        Default &nbsp;
        <span role="img" aria-hidden>
          📦
        </span>
        {season === seasons.default && "→"}
      </button>
      <button
        type="button"
        onClick={() => handleUpdateSeason(seasons.defaultTu)}
      >
        Default Tu &nbsp;
        <span role="img" aria-hidden>
          👕
        </span>
        {season === seasons.defaultTu && "→"}
      </button>
      <button type="button" onClick={() => handleUpdateSeason(seasons.xmas)}>
        Christmas &nbsp;
        <span role="img" aria-hidden>
          🎄
        </span>
        {season === seasons.xmas && "→"}
      </button>
    </Switcher>
  );
}
