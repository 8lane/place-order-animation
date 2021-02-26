import React, { createContext, useState, useContext } from "react";

import config from "./config";

function canUseDom() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

const SeasonalContext = createContext();
const {
  placeOrderAnimation: { seasons }
} = config;

function SeasonalProvider({ children, value = seasons.default }) {
  const [season] = useState(value);

  if (!canUseDom()) return null;

  return (
    <SeasonalContext.Provider value={{ season }}>
      {children}
    </SeasonalContext.Provider>
  );
}

function useSeasonalState() {
  const context = useContext(SeasonalContext);
  if (context === undefined) {
    throw new Error("useSeasonalState must be used within a SeasonalProvider");
  }
  return context;
}

export { SeasonalProvider, useSeasonalState };
