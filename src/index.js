import React from "react";
import ReactDOM from "react-dom";

import PlaceOrderAnimation from "./PlaceOrderAnimation";

function canUseDom() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

const season =
  (canUseDom() && localStorage.getItem("season-switcher")) || "xmas";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PlaceOrderAnimation season={season} />
  </React.StrictMode>,
  rootElement
);
