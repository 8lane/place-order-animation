import React from "react";

import config from "../config";
import { useSeasonalState } from "../SeasonalContext";

import * as Styled from "./BackgroundMask.styles";

const {
  placeOrderAnimation: { seasons }
} = config;

export default function BackgroundMask() {
  const { season } = useSeasonalState();

  return (
    <>
      {season === seasons.defaultTu && (
        <Styled.Mask
          season={"default"}
          xmlns="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 329"
        >
          <defs>
            <path
              id="path-1"
              d="M174.5 329c39.219 0 89.58-14.898 117.847-37.807C329.56 261.034 339 216.132 339 164.5c0-36.434-7.95-82.547-28-109.807C281.056 13.978 228.917 0 174.5 0 83.65 0 .776 63.952.776 154.803c0 30.82 9.488 70.54 24.236 95.197 28.726 48.025 89.458 79 149.488 79z"
            ></path>
            <radialGradient
              id="radialGradient-3"
              cx="50%"
              cy="0%"
              r="83.114%"
              fx="50%"
              fy="0%"
              gradientTransform="matrix(0 1 -.29843 0 .5 -.5)"
            >
              <stop offset="0%" stopColor="#FFF"></stop>
              <stop offset="0%" stopColor="#D4D4D4" stopOpacity="0.5"></stop>
              <stop offset="100%" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="radialGradient-4"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#9F69FF"></stop>
              <stop offset="100%" stopColor="#5F2FB6"></stop>
            </radialGradient>
            <filter id="filter-5">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
            <radialGradient
              id="radialGradient-6"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#99EAFF"></stop>
              <stop offset="100%" stopColor="#08B2DE"></stop>
            </radialGradient>
            <filter id="filter-7">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
            <radialGradient
              id="radialGradient-8"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#FFF"></stop>
              <stop offset="100%" stopColor="#F0F0F0"></stop>
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g>
              <g>
                <mask id="mask-2" fill="#fff">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use fill="#28282A" xlinkHref="#path-1"></use>
                <path
                  fill="#4A4C55"
                  d="M2 269H384V383H2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#171719"
                  d="M309 174h42a2 2 0 012 2v18h-46v-18a2 2 0 012-2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#1E1E1F"
                  d="M2 246H384V269H2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="url(#radialGradient-3)"
                  d="M-18 269H364V383H-18z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#FFF"
                  d="M138.615234 279.414062L215.306346 279.414062 230 300 119 300z"
                  mask="url(#mask-2)"
                  opacity="0.07"
                ></path>
                <path
                  fill="#34353E"
                  d="M138.615234 278.414062L215.306346 278.414062 230 299 119 299z"
                  mask="url(#mask-2)"
                ></path>
                <g mask="url(#mask-2)">
                  <g transform="translate(13 18)">
                    <rect
                      width="103"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="0"
                      y="2"
                      fill="url(#radialGradient-4)"
                      rx="2"
                    ></rect>
                    <g fill="none" strokeWidth="1" filter="url(#filter-5)">
                      <g fillRule="nonzero" transform="translate(24 21)">
                        <path
                          fill="#7B1970"
                          d="M12.117 2.922l-2.213.23.084-.24c.292-.835.02-1.18-.595-1.18-.616 0-1.127.345-1.42 1.18l-.96 2.723c-.291.835-.03 1.179.585 1.179.626 0 1.127-.334 1.43-1.18l.042-.114h2.128l-.041.115a4.153 4.153 0 01-4.164 2.9c-1.774 0-2.817-.886-2.087-2.963l.918-2.609A4.226 4.226 0 019.998.01c1.774 0 2.849.835 2.119 2.901M17.115 6.7l-.845 1.722h-5.093L14.1.136h2.129l-2.306 6.563h3.193m2.368 1.711h-2.118L20.287.136h2.129L19.494 8.41m9.454-5.488l-2.223.24.084-.24c.302-.835.031-1.18-.585-1.18-.615 0-1.127.345-1.419 1.18l-.97 2.713c-.303.835-.032 1.179.584 1.179s1.127-.334 1.42-1.18l.041-.114h2.14l-.043.115a4.153 4.153 0 01-4.163 2.9c-1.774 0-2.817-.886-2.087-2.963l.908-2.609C23.365.897 25.035.01 26.819.01c1.784 0 2.849.835 2.118 2.901m3.59 5.5L31.41 4.768 30.127 8.42h-2.118L30.93.125h2.13l-1.253 3.538L35.459.115h2.452L33.612 4.1l1.492 4.31h-2.567"
                        ></path>
                        <path
                          fill="#D8232A"
                          d="M42.273 2.358c-.125.355.052.72.334 1.044.866-.428 1.336-.772 1.482-1.18.156-.459-.126-.73-.647-.73-.47 0-.981.345-1.127.741l-.042.125zm.094 4.279l-1.012-1.19c-.365.25-.564.46-.658.72l-.03.083c-.147.418.103.69.625.69.355 0 .71-.105 1.075-.303zm.908 1.064a5.322 5.322 0 01-2.849.835c-1.617 0-2.39-.877-1.92-2.192l.021-.062c.334-.94 1.148-1.503 1.962-1.9a2.18 2.18 0 01-.282-2.024l.02-.062C40.688.99 42.138.01 43.912.01c1.962 0 2.286 1.21 1.962 2.119-.386 1.095-1.492 1.805-2.4 2.254l.626.72c.209-.261.407-.533.574-.835h1.774c-.386.584-.845 1.252-1.409 1.899l.835.94-1.795 1.554-.803-.94v-.02z"
                        ></path>
                        <path
                          fill="#7B1970"
                          d="M7.494 12.209l-2.233.25.083-.23c.303-.845.032-1.189-.584-1.189s-1.127.344-1.42 1.18l-.96 2.723c-.302.834-.03 1.19.585 1.19.616 0 1.127-.345 1.43-1.19l.042-.115h2.128l-.042.115c-.73 2.076-2.39 2.9-4.163 2.9-1.774 0-2.817-.886-2.087-2.953l.918-2.608c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.849.824 2.118 2.89"
                        ></path>
                        <path
                          fill="#7B1970"
                          d="M10.447 12.209l-.96 2.723c-.292.835-.02 1.19.584 1.19.626 0 1.138-.345 1.43-1.19l.96-2.713c.292-.845.031-1.19-.584-1.19-.616 0-1.127.345-1.43 1.18zm4.122.062l-.919 2.609a4.237 4.237 0 01-4.173 2.953c-1.774 0-2.828-.887-2.098-2.953l.918-2.609c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.828.887 2.098 2.953zm5.248 3.726l-.834 1.721H13.89l2.922-8.285h2.129l-2.317 6.574h3.193m6.188 0l-.845 1.711h-5.092L23 9.433h2.129l-2.317 6.574h3.204m4.695-4.863l-.521 1.482h3.047l-.606 1.722h-3.057l-.584 1.649h3.443l-.616 1.721h-5.561l2.921-8.285h5.562l-.605 1.711H30.7M40.843 12.209l-2.201.24.083-.23c.292-.845.021-1.19-.595-1.19-.615 0-1.127.345-1.419 1.19l-.96 2.713c-.302.835-.031 1.19.585 1.19.615 0 1.127-.345 1.43-1.19l.041-.115h2.129l-.042.115c-.73 2.077-2.39 2.901-4.164 2.901-1.773 0-2.817-.887-2.087-2.953l.919-2.609c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.848.825 2.118 2.89m6.167-1.064H45.55l-2.317 6.574h-2.129l2.317-6.574h-1.722l.605-1.711h5.562l-.835 1.711"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g mask="url(#mask-2)">
                  <g transform="translate(234 18)">
                    <rect
                      width="105"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="2"
                      y="2"
                      fill="url(#radialGradient-6)"
                      rx="2"
                    ></rect>
                    <g fill="none" strokeWidth="1" filter="url(#filter-7)">
                      <g transform="translate(43 15)">
                        <path
                          fill="#333"
                          fillRule="nonzero"
                          d="M14.143 14.4V8.8h-2.357v5.6h2.357zm1.571 0h4.715V1.6H1.57v12.8h4.715V8c0-.442.351-.8.785-.8h7.858c.434 0 .785.358.785.8v6.4zm-7.857 0h2.357V8.8H7.857v5.6zm.786-11.2h4.714c.434 0 .786.358.786.8 0 .442-.352.8-.786.8H8.643a.793.793 0 01-.786-.8c0-.442.352-.8.786-.8zM1.57 0H20.43C21.296 0 22 .716 22 1.6v12.8c0 .884-.704 1.6-1.571 1.6H1.57C.704 16 0 15.284 0 14.4V1.6C0 .716.704 0 1.571 0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="#FFF"
                      fillRule="nonzero"
                      strokeWidth="1"
                      transform="translate(19 37)"
                    >
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                    </g>
                  </g>
                </g>
                <g mask="url(#mask-2)">
                  <g transform="translate(122 18)">
                    <rect
                      width="105"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="2"
                      y="2"
                      fill="url(#radialGradient-8)"
                      rx="2"
                    ></rect>
                    <image
                      width="32"
                      height="26"
                      x="37"
                      y="18"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACFCAYAAAA3mUirAAAMYmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSWiBCEgJvYnSCSAlhBZBQKogKiEJJJQYE4KKDdFlFVy7iGJZ0VURRVdXQNaCiN1FsffFgsrKuriKDZU3IQFdfeV75/vmzp8zZ/5TMnPvDAA6HXyZLA/VBSBfWiCPjwhhjU9NY5EeARJgAF3gBoz4AoWMExcXDaAM9v+U19cAouovu6i4vh3/r6IvFCkEACDpEGcKFYJ8iJsBwEsEMnkBAMRQqLeeViBTYTHEBnIYIMSzVDhbjZepcKYabx2wSYznQtwIAJnG58uzAdBuhXpWoSAb8mg/gthVKpRIAdAxgDhQIOYLIU6EeER+/hQVLobYAdrLIN4BMTvzC87sf/BnDvHz+dlDWJ3XgJBDJQpZHn/G/1ma/y35ecpBH3aw0cTyyHhV/rCGN3KnRKkwDeJuaWZMrKrWEL+VCNV1BwClipWRSWp71FSg4ML6ASbErkJ+aBTEphCHS/NiojX6zCxJOA9iuFrQ6ZICXqJm7kKRIixBw7lePiU+dhBnybkczdw6vnzAr8q+VZmbxNHw3xCLeIP8r4rEiSkQUwHAqIWS5BiItSE2UOQmRKltMKsiMTdm0EaujFfFbwMxWySNCFHzY+lZ8vB4jb0sXzGYL1YqlvBiNLiyQJwYqa4PtlPAH4jfCOJ6kZSTNMgjUoyPHsxFKAoNU+eOtYmkSZp8sXuygpB4zdweWV6cxh4ni/IiVHoriE0UhQmaufjoArg41fx4tKwgLlEdJ56Rwx8Tp44HLwTRgAtCAQsoYcsEU0AOkLR1N3TDX+qRcMAHcpANRMBFoxmckTIwIoXPBFAE/oRIBBRD80IGRkWgEOo/DmnVTxeQNTBaODAjFzyGOB9EgTz4WzkwSzrkLRk8ghrJN94FMNY82FRj3+o4UBOt0SgHeVk6g5bEMGIoMZIYTnTETfBA3B+Phs9g2NxxNu47GO1ne8JjQjvhAeEqoYNwc7KkRP5VLGNBB+QP12Sc+WXGuB3k9MJD8ADIDplxJm4CXHBP6IeDB0HPXlDL1cStyp31b/IcyuCLmmvsKK4UlDKMEkxx+HqmtpO21xCLqqJf1kcda+ZQVblDI1/7535RZyHso762xBZi+7FT2DHsDHYIawAs7CjWiJ3HDqvw0Bp6NLCGBr3FD8STC3kk3/jja3yqKqlwrXXtcv2gGQMFoukFqg3GnSKbIZdkiwtYHPgVELF4UsHIESx3V3dXAFTfFPVr6iVz4FuBMM9+1s23BCBgRn9//6HPuqiLAOw/DLf5rc86+074OjgLwOk1AqW8UK3DVQ8CfBvowB1lDMyBNXCAGbkDb+APgkEYGANiQSJIBZNgncVwPcvBNDALzAOloBwsA6vBOrAJbAE7wG6wDzSAQ+AYOAnOgYvgKrgN108neAZ6wGvQhyAICaEjDMQYsUBsEWfEHWEjgUgYEo3EI6lIBpKNSBElMguZj5QjK5B1yGakBvkZOYgcQ84g7chN5D7ShfyNvEcxlIYaoGaoHToKZaMcNApNRCei2ehUtAhdgC5BK9FqdBdajx5Dz6FX0Q70GdqLAUwLY2KWmAvGxrhYLJaGZWFybA5WhlVg1Vgd1gT/6ctYB9aNvcOJOANn4S5wDUfiSbgAn4rPwRfj6/AdeD3eil/G7+M9+CcCnWBKcCb4EXiE8YRswjRCKaGCsI1wgHAC7qZOwmsikcgk2hN94G5MJeYQZxIXEzcQ9xCbie3Eh8ReEolkTHImBZBiSXxSAamUtJa0i3SUdInUSXpL1iJbkN3J4eQ0spRcQq4g7yQfIV8iPyH3UXQpthQ/SixFSJlBWUrZSmmiXKB0UvqoelR7agA1kZpDnUetpNZRT1DvUF9qaWlZaflqjdOSaBVrVWrt1TqtdV/rHU2f5kTj0tJpStoS2nZaM+0m7SWdTrejB9PT6AX0JfQa+nH6PfpbbYb2SG2etlB7rnaVdr32Je3nOhQdWx2OziSdIp0Knf06F3S6dSm6drpcXb7uHN0q3YO613V79Rh6bnqxevl6i/V26p3Re6pP0rfTD9MX6i/Q36J/XP8hA2NYM7gMAWM+YyvjBKPTgGhgb8AzyDEoN9ht0GbQY6hv6GmYbDjdsMrwsGEHE2PaMXnMPOZS5j7mNeb7YWbDOMNEwxYNqxt2adgbo+FGwUYiozKjPUZXjd4bs4zDjHONlxs3GN81wU2cTMaZTDPZaHLCpHu4wXD/4YLhZcP3Db9lipo6mcabzjTdYnretNfM3CzCTGa21uy4Wbc50zzYPMd8lfkR8y4LhkWghcRilcVRiz9YhiwOK49VyWpl9ViaWkZaKi03W7ZZ9lnZWyVZlVjtsbprTbVmW2dZr7Juse6xsbAZazPLptbmli3Flm0rtl1je8r2jZ29XYrd93YNdk/tjex59kX2tfZ3HOgOQQ5THaodrjgSHdmOuY4bHC86oU5eTmKnKqcLzqizt7PEeYNz+wjCCN8R0hHVI6670Fw4LoUutS73RzJHRo8sGdkw8vkom1Fpo5aPOjXqk6uXa57rVtfbbvpuY9xK3Jrc/nZ3che4V7lf8aB7hHvM9Wj0eOHp7Cny3Oh5w4vhNdbre68Wr4/ePt5y7zrvLh8bnwyf9T7X2QbsOPZi9mlfgm+I71zfQ77v/Lz9Cvz2+f3l7+Kf67/T/+lo+9Gi0VtHPwywCuAHbA7oCGQFZgT+GNgRZBnED6oOehBsHSwM3hb8hOPIyeHs4jwPcQ2RhxwIecP1487mNodioRGhZaFtYfphSWHrwu6FW4Vnh9eG90R4RcyMaI4kREZFLo+8zjPjCXg1vJ4xPmNmj2mNokUlRK2LehDtFC2PbhqLjh0zduXYOzG2MdKYhlgQy4tdGXs3zj5uatyv44jj4sZVjXsc7xY/K/5UAiNhcsLOhNeJIYlLE28nOSQpk1qSdZLTk2uS36SEpqxI6Rg/avzs8edSTVIlqY1ppLTktG1pvRPCJqye0JnulV6afm2i/cTpE89MMpmUN+nwZJ3J/Mn7MwgZKRk7Mz7wY/nV/N5MXub6zB4BV7BG8EwYLFwl7BIFiFaInmQFZK3IepodkL0yu0scJK4Qd0u4knWSFzmROZty3uTG5m7P7c9LyduTT87PyD8o1ZfmSlunmE+ZPqVd5iwrlXVM9Zu6emqPPEq+TYEoJioaCwzg4f280kH5nfJ+YWBhVeHbacnT9k/Xmy6dfn6G04xFM54UhRf9NBOfKZjZMsty1rxZ92dzZm+eg8zJnNMy13rugrmdxRHFO+ZR5+XO+63EtWRFyav5KfObFpgtKF7w8LuI72pLtUvlpde/9/9+00J8oWRh2yKPRWsXfSoTlp0tdy2vKP+wWLD47A9uP1T+0L8ka0nbUu+lG5cRl0mXXVsetHzHCr0VRSserhy7sn4Va1XZqlerJ68+U+FZsWkNdY1yTUdldGXjWpu1y9Z+WCded7UqpGrPetP1i9a/2SDccGlj8Ma6TWabyje9/1Hy443NEZvrq+2qK7YQtxRuebw1eeupn9g/1Wwz2Va+7eN26faOHfE7Wmt8amp2mu5cWovWKmu7dqXvurg7dHdjnUvd5j3MPeV7wV7l3j9+zvj52r6ofS372fvrfrH9Zf0BxoGyeqR+Rn1Pg7ihozG1sf3gmIMtTf5NB34d+ev2Q5aHqg4bHl56hHpkwZH+o0VHe5tlzd3Hso89bJnccvv4+ONXWse1tp2IOnH6ZPjJ46c4p46eDjh96IzfmYNn2Wcbznmfqz/vdf7Ab16/HWjzbqu/4HOh8aLvxab20e1HLgVdOnY59PLJK7wr567GXG2/lnTtxvX06x03hDee3sy7+eJW4a2+28V3CHfK7urerbhneq/6d8ff93R4dxy+H3r//IOEB7cfCh4+e6R49KFzwWP644onFk9qnro/PdQV3nXxjwl/dD6TPevrLv1T78/1zx2e//JX8F/ne8b3dL6Qv+j/e/FL45fbX3m+aumN6733Ov9135uyt8Zvd7xjvzv1PuX9k75pH0gfKj86fmz6FPXpTn9+f7+ML+cPHAUw2NCsLAD+3g4APRUABjxDUCeo73wDgqjvqQMI/CesvhcOiDcAdbBTHde5zQDshc2uGHLDXnVUTwwGqIfHUNOIIsvDXc1Fgzcewtv+/pdmAJCaAPgo7+/v29Df/xHeUbGbADRPVd81VUKEd4MfA1ToqpGwGHwl6nvoFzl+3QNVBJ7g6/5fOVKKYDDgjDAAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAKOgAwAEAAAAAQAAAIUAAAAA3p/AQwAAB/BJREFUeAHtnVmIHFUUhhPXJBokiRJBSRCNiC+iKBpRUNRohOAKvijxySAEFFFRRAQX8EUwRAXBEKOCuIBEUfBFDeKSKO4LKpqo+KDgvms0/mdMTaZmuuv29L3nTNf0d+Gklnvvf2599ae6q6a6auaMGTN2KCjtI3CuhryxfcPuPuLduldRA4FYApgxljfZGghgxgY4VMUSwIyxvMnWQAAzNsChKpYAZozlTbYGApixAQ5VsQQwYyxvsjUQwIwNcKiKJYAZY3mTrYEAZmyAQ1UsAcwYy5tsDQQwYwMcqmIJYMZY3mRrIIAZG+BQFUsAM8byJlsDAczYAIeqWAKYMZY32RoIYMYGOFTFEsCMsbzJ1kAAMzbAoSqWAGaM5U22BgJ7qG5VQ/0gVd2mwewfMKA1yvFBQJ7cFG/lCtC/fwKfqav9xts7lvU/RHrmEOBjOocefYsSwIxFcSKWQwAz5tCjb1ECmLEoTsRyCGDGHHr0LUoAMxbFiVgOAcyYQ4++RQlgxqI4EcshgBlz6NG3KAHMWBQnYjkEMGMOPfoWJYAZi+JELIcAZsyhR9+iBDBjUZyI5RDAjDn06FuUAGYsihOxHAKYMYcefYsSwIxFcSKWQwAz5tCjb1ECmLEoTsRyCGDGHHr0LUoAMxbFiVgOAcyYQ4++RQlgxqI4EcshgBlz6NG3KAHMWBQnYn0QOFF99rZ+mLEPenQpRuAyKT2vsGc+/f+PzVAgEEhgrnKtVawcm3PEkWNXMA8BZwInS3+D4pDxefiYHk+EZS8CCyW8XrFJMcGIlpQjo1GgeBI4QOJXKVYr9m1KhBmb6FDXL4FZ6niG4hLFOYq9FMmCGZOIaJAgsED1hyuWKI5WHKc4RjFbMW1L255ce5f2hOdTdtdN4Z62p/vaScinhbZxH9sWjoxGgdIrATsKPqhY3muHybTDjJOhNdxt7eH+LyqO8MLApR0vstNP9yFPIxouzDj9TOOxRWdL9EwP4bGamHEsDea7EbBrhO4FM7ojbn0C88gpEVuBGSMotzvHIg0/5JohZmy3USJGPyciieXAjFGkyZMkgBmTiGgQRQAzRpEmT5IAZkwiokEUAcwYRZo8SQKYMYmIBlEEMGMUafIkCWDGJCIaRBHAjFGkyZMkgBmTiGgQRQAzRpEmT5IAZkwiokEUAcwYRZo8SQKYMYmIBlEEMGMUafIkCWDGJCIaRBHAjFGkyZMkgBmTiGgQRQAzRpEmT5IAZkwiokEUAcwYRZo8SQKYMYmIBlEEMGMUafIkCWDGJCIaRBHAjFGkyZMkgBmTiGgQRQAz+pHe7ic9oryns34l39PD4avGfU7/sn6YsU96PXT7rYc2OU2inoHT+LqMnA3Y2fdvTS0w404gHhNvM87zGHQHTe88o5w4MnagX2jV74V0usks7lZReL13nl+r8WLGikT56XflJWuK9txEe/mPd7F3vHiW7ytxzFiRKD/9vLxkTdFOYOwlQN7lBOcE2yp9zFiRKD8dhVxeelTx9NE5n5n5kvU2/NZq6JixIlF++qUk/ykvW1O8oLZUfmGFJL3fFTT6CYIZy+/AStEuV9gr5jzLURJf6pjgckftSvqjagYzViR8ppt9ZGuqN9aWyi2cJanjy8l1VdpS1WDGioTPNMKMyzX0iwoPf6701hTW7CRnnxxfVxWYsSLhM33VR3aC6n1ac+SEtf2vuEddvS/p2OheGTtEzDiWRvn5tyX5Q3nZCYr2J7snFbkGMj/cobhYEVE2RSTxyGGHdM/3N1faywoP3l6JW2l7T79Vrn7f8Wev790YOFa70rBQ0crSVjOeJ9reJhyv/4xyHtvjXt5P7a5X2BF8vI7nsr0uuFa8ryHVkg3pwrPabrsZIOouG8NsJzUWdg3PjPme4ivFNwo7OTlQsUhxmuIkxVT44AnlbW1p65HRgN+v8DzKtE3b7l88SFErnMDUcLgtRFwmcRu8g/Cj0rQjda1gxhoOt4U3pVy7jOGWqR3CazsNEzN2ouKz7k4f2dap2rXXzZ1GjRk7UfFZ95hkX/eRbpXqDd1Gixm7kSm/3k4yri4v2yrFpzTa57qNGDN2I+Oz3v7i8LSP9MCr2kVuu57ZtWDGrmjcKlZL+Sc39cEVvl1De79peJixiY5P3TbJXukjPbCqdjXh5tToMGOKkE/9esk+7iM9cKp/akQrFSM/1G8aHWZsouNbt0ryH/umGAh12853exkJZuyFkk8b+ymr3U1tfy+eruUWbdiGXjcOM/ZKyqfdVsmer/jDR35KVR9W9psmMwLMOBlaPm1fkqzdYfOzj/yUqD6irPY9ccdksmPGydDya/uCpO12Lu+nUPhtwS7lBzRrd4qPPMxp1+r0HGZMM4pq8ZoSmSG/iEpYOI8dBW9VXKrYrpjWpc33M05mxyxQY/srje3ctoTdJW7ffYemDIsZbYfOVFynsGt0g25I+867WDFUZZjMWO3YwzRjPxsYREPa99srFLsrhq4MoxmrnXyhZuwC+SCY0i5D3a2wrxNDW4bZjLbT7WRzhWKLYipM+Yvy2s8nDlYMfRl2M1YGsO+TpyrWKbx/XvqvcryssDuNhvpIqO2vFcxYwzGyMEv/2lnsvYoPFSWOmHZ7m53NX6M4VBFW7H9ZW8q1Guj8gMHaEeeTgDweKewJDUsV9piTJTvDfhI6WzFHMU9hZ+j2kfujwoxn/8ltey3eUbyhsBthw8t/TJKC89zmGcwAAAAASUVORK5CYII="
                    ></image>
                  </g>
                </g>
                <g fill="#171719" mask="url(#mask-2)">
                  <g transform="translate(-20 78)">
                    <path d="M73 0H75V168H73z"></path>
                    <path d="M194 0H196V168H194z"></path>
                    <path d="M308 0H310V168H308z"></path>
                    <path d="M30 16H353V18H30z"></path>
                    <path d="M0 116H400V118H0z"></path>
                    <path d="M10 67H409V69H10z"></path>
                  </g>
                </g>
              </g>
              <g fill="#171719" transform="translate(12 110)">
                <path d="M47 52h28a2 2 0 012 2v30H45V54a2 2 0 012-2zM239 21h33a2 2 0 012 2v13h-37V23a2 2 0 012-2zM220 2h13a2 2 0 012 2v31h-17V4a2 2 0 012-2zM81 68h12a2 2 0 012 2v14H79V70a2 2 0 012-2zM25.564 19h10.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54V35H23V21.564c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267zM2 0h17a2 2 0 012 2v33H0V2a2 2 0 012-2zM99 61h19a2 2 0 012 2v21H97V63a2 2 0 012-2z"></path>
              </g>
            </g>
          </g>
        </Styled.Mask>
      )}

      {season === seasons.default && (
        <Styled.Mask
          season={"default"}
          xmlns="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 339 329"
        >
          <defs>
            <path
              id="path-1"
              d="M174.5 329c39.219 0 89.58-14.898 117.847-37.807C329.56 261.034 339 216.132 339 164.5c0-36.434-7.95-82.547-28-109.807C281.056 13.978 228.917 0 174.5 0 83.65 0 .776 63.952.776 154.803c0 30.82 9.488 70.54 24.236 95.197 28.726 48.025 89.458 79 149.488 79z"
            ></path>
            <radialGradient
              id="radialGradient-3"
              cx="50%"
              cy="0%"
              r="83.114%"
              fx="50%"
              fy="0%"
              gradientTransform="matrix(0 1 -.29843 0 .5 -.5)"
            >
              <stop offset="0%" stopColor="#FFF"></stop>
              <stop offset="0%" stopColor="#D4D4D4" stopOpacity="0.5"></stop>
              <stop offset="100%" stopOpacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="radialGradient-4"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#9F69FF"></stop>
              <stop offset="100%" stopColor="#5F2FB6"></stop>
            </radialGradient>
            <filter id="filter-5">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
            <radialGradient
              id="radialGradient-6"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#99EAFF"></stop>
              <stop offset="100%" stopColor="#08B2DE"></stop>
            </radialGradient>
            <filter id="filter-7">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
            <radialGradient
              id="radialGradient-8"
              cx="50%"
              cy="-10.505%"
              r="60.505%"
              fx="50%"
              fy="-10.505%"
              gradientTransform="matrix(0 1 -.7863 0 .417 -.605)"
            >
              <stop offset="0%" stopColor="#FC6A6A"></stop>
              <stop offset="100%" stopColor="#B20C0C"></stop>
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g>
              <g>
                <mask id="mask-2" fill="#fff">
                  <use xlinkHref="#path-1"></use>
                </mask>
                <use fill="#28282A" xlinkHref="#path-1"></use>
                <path
                  fill="#4A4C55"
                  d="M2 269H384V383H2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#171719"
                  d="M309 174h42a2 2 0 012 2v18h-46v-18a2 2 0 012-2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#1E1E1F"
                  d="M2 246H384V269H2z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="url(#radialGradient-3)"
                  d="M-18 269H364V383H-18z"
                  mask="url(#mask-2)"
                ></path>
                <path
                  fill="#FFF"
                  d="M138.615234 279.414062L215.306346 279.414062 230 300 119 300z"
                  mask="url(#mask-2)"
                  opacity="0.07"
                ></path>
                <path
                  fill="#34353E"
                  d="M138.615234 278.414062L215.306346 278.414062 230 299 119 299z"
                  mask="url(#mask-2)"
                ></path>
                <g mask="url(#mask-2)">
                  <g transform="translate(13 18)">
                    <rect
                      width="103"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="0"
                      y="2"
                      fill="url(#radialGradient-4)"
                      rx="2"
                    ></rect>
                    <g fill="none" strokeWidth="1" filter="url(#filter-5)">
                      <g fillRule="nonzero" transform="translate(24 21)">
                        <path
                          fill="#7B1970"
                          d="M12.117 2.922l-2.213.23.084-.24c.292-.835.02-1.18-.595-1.18-.616 0-1.127.345-1.42 1.18l-.96 2.723c-.291.835-.03 1.179.585 1.179.626 0 1.127-.334 1.43-1.18l.042-.114h2.128l-.041.115a4.153 4.153 0 01-4.164 2.9c-1.774 0-2.817-.886-2.087-2.963l.918-2.609A4.226 4.226 0 019.998.01c1.774 0 2.849.835 2.119 2.901M17.115 6.7l-.845 1.722h-5.093L14.1.136h2.129l-2.306 6.563h3.193m2.368 1.711h-2.118L20.287.136h2.129L19.494 8.41m9.454-5.488l-2.223.24.084-.24c.302-.835.031-1.18-.585-1.18-.615 0-1.127.345-1.419 1.18l-.97 2.713c-.303.835-.032 1.179.584 1.179s1.127-.334 1.42-1.18l.041-.114h2.14l-.043.115a4.153 4.153 0 01-4.163 2.9c-1.774 0-2.817-.886-2.087-2.963l.908-2.609C23.365.897 25.035.01 26.819.01c1.784 0 2.849.835 2.118 2.901m3.59 5.5L31.41 4.768 30.127 8.42h-2.118L30.93.125h2.13l-1.253 3.538L35.459.115h2.452L33.612 4.1l1.492 4.31h-2.567"
                        ></path>
                        <path
                          fill="#D8232A"
                          d="M42.273 2.358c-.125.355.052.72.334 1.044.866-.428 1.336-.772 1.482-1.18.156-.459-.126-.73-.647-.73-.47 0-.981.345-1.127.741l-.042.125zm.094 4.279l-1.012-1.19c-.365.25-.564.46-.658.72l-.03.083c-.147.418.103.69.625.69.355 0 .71-.105 1.075-.303zm.908 1.064a5.322 5.322 0 01-2.849.835c-1.617 0-2.39-.877-1.92-2.192l.021-.062c.334-.94 1.148-1.503 1.962-1.9a2.18 2.18 0 01-.282-2.024l.02-.062C40.688.99 42.138.01 43.912.01c1.962 0 2.286 1.21 1.962 2.119-.386 1.095-1.492 1.805-2.4 2.254l.626.72c.209-.261.407-.533.574-.835h1.774c-.386.584-.845 1.252-1.409 1.899l.835.94-1.795 1.554-.803-.94v-.02z"
                        ></path>
                        <path
                          fill="#7B1970"
                          d="M7.494 12.209l-2.233.25.083-.23c.303-.845.032-1.189-.584-1.189s-1.127.344-1.42 1.18l-.96 2.723c-.302.834-.03 1.19.585 1.19.616 0 1.127-.345 1.43-1.19l.042-.115h2.128l-.042.115c-.73 2.076-2.39 2.9-4.163 2.9-1.774 0-2.817-.886-2.087-2.953l.918-2.608c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.849.824 2.118 2.89"
                        ></path>
                        <path
                          fill="#7B1970"
                          d="M10.447 12.209l-.96 2.723c-.292.835-.02 1.19.584 1.19.626 0 1.138-.345 1.43-1.19l.96-2.713c.292-.845.031-1.19-.584-1.19-.616 0-1.127.345-1.43 1.18zm4.122.062l-.919 2.609a4.237 4.237 0 01-4.173 2.953c-1.774 0-2.828-.887-2.098-2.953l.918-2.609c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.828.887 2.098 2.953zm5.248 3.726l-.834 1.721H13.89l2.922-8.285h2.129l-2.317 6.574h3.193m6.188 0l-.845 1.711h-5.092L23 9.433h2.129l-2.317 6.574h3.204m4.695-4.863l-.521 1.482h3.047l-.606 1.722h-3.057l-.584 1.649h3.443l-.616 1.721h-5.561l2.921-8.285h5.562l-.605 1.711H30.7M40.843 12.209l-2.201.24.083-.23c.292-.845.021-1.19-.595-1.19-.615 0-1.127.345-1.419 1.19l-.96 2.713c-.302.835-.031 1.19.585 1.19.615 0 1.127-.345 1.43-1.19l.041-.115h2.129l-.042.115c-.73 2.077-2.39 2.901-4.164 2.901-1.773 0-2.817-.887-2.087-2.953l.919-2.609c.73-2.066 2.4-2.953 4.174-2.953 1.774 0 2.848.825 2.118 2.89m6.167-1.064H45.55l-2.317 6.574h-2.129l2.317-6.574h-1.722l.605-1.711h5.562l-.835 1.711"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g mask="url(#mask-2)">
                  <g transform="translate(234 18)">
                    <rect
                      width="105"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="2"
                      y="2"
                      fill="url(#radialGradient-6)"
                      rx="2"
                    ></rect>
                    <g fill="none" strokeWidth="1" filter="url(#filter-7)">
                      <g transform="translate(43 15)">
                        <path
                          fill="#333"
                          fillRule="nonzero"
                          d="M14.143 14.4V8.8h-2.357v5.6h2.357zm1.571 0h4.715V1.6H1.57v12.8h4.715V8c0-.442.351-.8.785-.8h7.858c.434 0 .785.358.785.8v6.4zm-7.857 0h2.357V8.8H7.857v5.6zm.786-11.2h4.714c.434 0 .786.358.786.8 0 .442-.352.8-.786.8H8.643a.793.793 0 01-.786-.8c0-.442.352-.8.786-.8zM1.57 0H20.43C21.296 0 22 .716 22 1.6v12.8c0 .884-.704 1.6-1.571 1.6H1.57C.704 16 0 15.284 0 14.4V1.6C0 .716.704 0 1.571 0z"
                        ></path>
                      </g>
                    </g>
                    <g
                      fill="#FFF"
                      fillRule="nonzero"
                      strokeWidth="1"
                      transform="translate(19 37)"
                    >
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                      <path d="M1.865 9.667V6.429h1.853c1.495 0 2.78-.812 2.78-2.65v-.2c0-1.85-1.285-2.662-2.78-2.662H.964v8.75h.901zm1.853-4.013H1.865v-3.95h1.853c1.063 0 1.89.538 1.89 1.888v.162c0 1.35-.827 1.9-1.89 1.9zm5.689 4.138c.593 0 1.408-.188 1.89-.975l.074.85h.754V5.329C12.112 3.654 11 3.292 9.913 3.292c-.802 0-1.642.275-2.198.55l.222.65c.531-.25 1.248-.5 1.915-.5.642 0 1.408.162 1.408 1.312v.575c-2.817.05-3.768.8-3.768 2.063v.062c0 .913.606 1.788 1.915 1.788zm.272-.7c-.803 0-1.322-.438-1.322-1.138v-.05c0-.937.815-1.337 2.903-1.375v.938c0 1.037-.692 1.625-1.581 1.625zm4.614 3.2c.877 0 1.458-.325 2.026-2.013l2.334-6.862h-.852l-1.668 5.262-1.741-5.262h-.877L15.7 9.842l-.198.562c-.32.913-.592 1.213-1.272 1.213-.148 0-.519-.05-.803-.125l-.074.675c.395.087.692.125.939.125zm11.303-2.5c1.137 0 1.977-.438 2.582-1.188l1.186 1.138.556-.65-1.272-1.225c.32-.613.568-1.363.74-2.213h-.802a6.895 6.895 0 01-.482 1.688l-2.112-2.025c1.062-.438 2.334-1.163 2.334-2.5 0-1.2-.95-2.025-2.408-2.025-1.409 0-2.459.75-2.459 2.112v.063c0 .85.544 1.612 1.186 2.225-.89.512-1.68 1.225-1.68 2.312v.063c0 1.462 1.235 2.225 2.631 2.225zm-.123-4.975l-.21-.2c-.433-.413-.927-1.013-.927-1.65v-.075c0-.888.667-1.388 1.594-1.388.951 0 1.618.475 1.618 1.338 0 .937-.778 1.462-2.075 1.975zm.21 4.225c-.976 0-1.816-.5-1.816-1.5v-.075c0-.775.543-1.338 1.297-1.775l2.483 2.4c-.568.737-1.297.95-1.964.95zm11.674.75c1.495 0 2.78-.8 2.78-2.8v-.125h-.903v.125c0 1.475-.815 2.012-1.877 2.012-1.075 0-1.89-.537-1.89-2.012v-3.4c0-1.475.815-2.013 1.89-2.013 1.062 0 1.877.538 1.877 2.013v.15l.902-.15c0-2-1.284-2.8-2.78-2.8-1.506 0-2.79.812-2.79 2.812V6.98c0 2 1.284 2.813 2.79 2.813zm6.739 0c1.173 0 2.31-.638 2.31-2.4v-1.7c0-1.763-1.137-2.4-2.31-2.4-1.174 0-2.323.637-2.323 2.4v1.7c0 1.762 1.15 2.4 2.323 2.4zm0-.7c-.779 0-1.458-.475-1.458-1.625v-1.85c0-1.15.68-1.625 1.458-1.625.778 0 1.445.475 1.445 1.625v1.85c0 1.15-.667 1.625-1.445 1.625zm5.058.575V.754l-.864.163v8.75h.864zm2.91 0V.754l-.865.163v8.75h.865zm4.194.125c1.05 0 1.779-.313 2.26-.55l-.123-.65c-.58.287-1.248.5-1.977.5-.778 0-1.618-.4-1.618-1.7v-.675h3.657c.05-.338.074-.688.074-1.025 0-1.763-1.1-2.4-2.273-2.4-1.174 0-2.322.637-2.322 2.4v1.687c0 1.813 1.26 2.413 2.322 2.413zm1.433-3.713H54.8v-.462c0-1.15.679-1.625 1.457-1.625s1.445.475 1.445 1.625c0 .15 0 .312-.012.462zm4.75 3.713c.976 0 1.692-.35 2.063-.563l-.223-.637c-.494.262-1.05.5-1.692.5-.766 0-1.52-.4-1.52-1.7v-1.7c0-1.3.754-1.7 1.52-1.7.642 0 1.198.237 1.692.5l.223-.638a4.114 4.114 0 00-2.063-.562c-1.05 0-2.236.6-2.236 2.412V7.38c0 1.813 1.186 2.413 2.236 2.413zm5.528 0c.395 0 .618-.038.964-.125l-.1-.675c-.246.075-.506.1-.703.1-.655 0-.828-.325-.828-1.2V4.117h1.371l.16-.7h-1.531v-1.25h-.865v1.25h-.815v.7h.815v3.8c0 1.487.655 1.875 1.532 1.875z"></path>
                    </g>
                  </g>
                </g>
                <g mask="url(#mask-2)">
                  <g transform="translate(122 18)">
                    <rect
                      width="105"
                      height="62"
                      x="0"
                      y="0"
                      fill="#171719"
                      rx="2"
                    ></rect>
                    <rect
                      width="101"
                      height="58"
                      x="2"
                      y="2"
                      fill="url(#radialGradient-8)"
                      rx="2"
                    ></rect>
                    <g
                      fill="#FFF"
                      fillRule="nonzero"
                      strokeWidth="1"
                      transform="translate(29 18)"
                    >
                      <g transform="translate(0 17)">
                        <path d="M24.447 7.982A44.112 44.112 0 0048.54.853c.62-.39.265-1.03-.407-.764-9.251 3.822-15.248 5.227-23.686 5.227S10.012 3.91.76.089C.088-.178-.265.444.354.853a44.168 44.168 0 0024.093 7.13"></path>
                      </g>
                      <g transform="translate(41 4)">
                        <path d="M1.1 3.569c0 1.552 1.85 2 2.8 2.241.467.121 1.417.362 1.433.983.034.673-.716 1.035-1.466 1.035-.784 0-1.284-.328-1.717-.914-.2-.259-.433-.328-.733-.224-.35.103-.734.31-1.1.569-.217.155-.3.396-.184.69.6 1.482 2.2 1.948 3.584 1.948 2.183 0 4.083-.983 4.55-2.983.466-1.966-1.084-2.69-2.484-3.104-.916-.276-1.6-.5-1.55-1.138.05-.672 1.534-1.103 2.55.121.25.31.517.345.817.224.317-.12.833-.362 1-.483.35-.224.417-.43.217-.81C8.3.76 7.033.121 5.6.121c-2.717.034-4.5 1.5-4.5 3.448"></path>
                      </g>
                      <g>
                        <path d="M9.616 3.278c.054 1.613.214 5.352.214 5.352H6.02c.854-1.595 2.35-3.898 3.472-5.37.089-.159.124.018.124.018M9.795.213C9.17.248 8.655.3 8.174.868 6.624 2.694 3.063 8.17.249 13.15c-.196.355-.053.692.374.692H2.69c.338 0 .57-.071.801-.461.25-.426.855-1.489 1.39-2.393h4.932s.054 1.684.072 2.304c.017.337.213.55.658.55h1.817c.303 0 .588-.142.57-.568-.054-1.754-.499-10.367-.66-12.387-.035-.496-.284-.709-.854-.709-.552-.018-1.175 0-1.62.036"></path>
                      </g>
                      <g transform="translate(31 4)">
                        <path d="M4.17 7.845c1.644 0 2.355-1.38 2.78-2.845.406-1.466.575-2.845-1.086-2.845-1.66 0-2.356 1.38-2.762 2.845-.441 1.483-.594 2.845 1.067 2.845zm-.187 2.052c-2.95 0-4.305-1.983-3.712-4.88.61-2.896 2.797-4.88 5.746-4.88 2.966 0 4.322 1.984 3.712 4.88-.593 2.897-2.78 4.88-5.746 4.88"></path>
                      </g>
                      <g transform="translate(19 4)">
                        <path d="M9.922 9c.753-3.037 1.451-5.909 1.917-7.957.107-.494-.18-.823-.555-.823-.27 0-1.057 0-1.308.018-.43.018-.68.238-.788.603-.018.092-.054.183-.107.403-.018.091-.054.091-.09.018C8.811.896 8.006.073 6.609.073c-2.543 0-4.299 2.506-5.033 4.83-.466 1.463-.501 3.146.09 4.06.537.824 1.397 1.354 2.722 1.372 1.11.019 2.078-.365 2.561-.987.054-.074.108-.037.09.036-.645 2.268-2.006 2.89-3.063 2.89-.698 0-1.2-.292-1.45-.457-.395-.238-.52-.256-.878-.165-.394.11-.86.293-1.236.55-.448.31-.358.621-.197.896.842 1.39 2.794 1.737 3.94 1.737 2.83 0 4.818-1.994 5.767-5.835zM4.066 5.213C4.62 3.22 5.57 2.195 6.86 2.232c1.647.055 1.307 1.7.949 2.963-.555 1.92-1.415 2.945-2.758 2.835-1.38-.128-1.29-1.756-.985-2.817"></path>
                      </g>
                      <g transform="translate(13 4)">
                        <path d="M8.876.455c.177-.164.071-.437-.211-.437-1.589 0-3.106 0-4.236 1.073-.017.018-.07.018-.053-.036.018-.091.071-.291.124-.528.07-.272-.088-.509-.388-.509-.477 0-.97 0-1.553.018-.353 0-.547.146-.635.546-.177.818-1.395 7-1.748 8.854-.052.255.16.455.371.455h1.888c.336 0 .512-.164.565-.455.3-1.472.688-3.454.812-4.145.194-1.018.6-1.818.988-2.127.37-.291.882-.491 1.906-.546.459-.018.635-.163.882-.527.388-.636.741-1.11 1.288-1.636"></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g fill="#171719" mask="url(#mask-2)">
                  <g transform="translate(-20 78)">
                    <path d="M73 0H75V168H73z"></path>
                    <path d="M194 0H196V168H194z"></path>
                    <path d="M308 0H310V168H308z"></path>
                    <path d="M30 16H353V18H30z"></path>
                    <path d="M0 116H400V118H0z"></path>
                    <path d="M10 67H409V69H10z"></path>
                  </g>
                </g>
              </g>
              <g fill="#171719" transform="translate(12 110)">
                <path d="M47 52h28a2 2 0 012 2v30H45V54a2 2 0 012-2zM239 21h33a2 2 0 012 2v13h-37V23a2 2 0 012-2zM220 2h13a2 2 0 012 2v31h-17V4a2 2 0 012-2zM81 68h12a2 2 0 012 2v14H79V70a2 2 0 012-2zM25.564 19h10.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54V35H23V21.564c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267zM2 0h17a2 2 0 012 2v33H0V2a2 2 0 012-2zM99 61h19a2 2 0 012 2v21H97V63a2 2 0 012-2z"></path>
              </g>
            </g>
          </g>
        </Styled.Mask>
      )}

      {season === seasons.xmas && (
        <>
          <Styled.SnowPatch
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 27"
          >
            <defs>
              <radialGradient
                id="a2"
                cx="50%"
                cy="40.291%"
                r="213.273%"
                fx="50%"
                fy="40.291%"
                gradientTransform="matrix(.21568 0 0 .27249 .392 .293)"
              >
                <stop offset="0%" stopColor="#FFF"></stop>
                <stop offset="99.902%" stopColor="#DBF1FF"></stop>
              </radialGradient>
            </defs>
            <path
              fill="url(#a2)"
              fillRule="evenodd"
              d="M62 324c34.242 0 62-6.044 62-13.5 0-2.049-6.21-1.434-11.613-3.318-5.708-1.99-10.805-6.456-17.94-7.728-7.793-1.389-12.158 4.336-22.436 3.904-3.82-.16-5.976-2.577-10.011-2.577-2.523 0-5.006-3.689-7.44-3.52-3.846.268-10.307 4.045-13.804 6.097-2.34 1.373-1.787 1.148-4.038 1.642-3.687.81-8.72-2.663-12.136.07-1.598 1.278-3.865 1.665-5.276 2.112-4.478 1.416-5.115-3.224-8.342-2.112C4.914 307.154 0 307.852 0 310.5c0 7.456 27.758 13.5 62 13.5z"
              transform="translate(0 -297)"
            ></path>
          </Styled.SnowPatch>
          <Styled.Mask
            season={"default"}
            xmlns="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340 331"
          >
            <defs>
              <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="47.424%">
                <stop offset="0%" stopColor="#EAF5F6"></stop>
                <stop offset="100%" stopColor="#C3E1F6"></stop>
              </linearGradient>
              <linearGradient id="e" x1="50%" x2="50%" y1="0%" y2="62.33%">
                <stop offset="0%" stopColor="#FEFEFE"></stop>
                <stop offset="32.591%" stopColor="#FDFDFD"></stop>
                <stop offset="100%" stopColor="#D1E7F6"></stop>
              </linearGradient>
              <linearGradient
                id="f"
                x1="39.921%"
                x2="-14.413%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="g"
                x1="43.55%"
                x2="8.775%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="h"
                x1="46.372%"
                x2="26.811%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="i"
                x1="47.959%"
                x2="36.956%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="j"
                x1="39.921%"
                x2="-14.413%"
                y1="51.733%"
                y2="86.688%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="k"
                x1="43.347%"
                x2="7.477%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="l"
                x1="46.659%"
                x2="28.647%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="m"
                x1="47.918%"
                x2="36.691%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="n"
                x1="39.921%"
                x2="-14.413%"
                y1="51.713%"
                y2="86.27%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="o"
                x1="43.309%"
                x2="7.234%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="p"
                x1="46.461%"
                x2="27.38%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <linearGradient
                id="q"
                x1="47.664%"
                x2="35.067%"
                y1="51.833%"
                y2="88.814%"
              >
                <stop offset="0%" stopColor="#FFFEFF"></stop>
                <stop offset="35.618%" stopColor="#DAEEFA"></stop>
                <stop offset="100%" stopColor="#B3DCF5"></stop>
              </linearGradient>
              <radialGradient
                id="b"
                cx="50%"
                cy="50%"
                r="100%"
                fx="50%"
                fy="50%"
                gradientTransform="matrix(0 1 -.97273 0 .986 0)"
              >
                <stop offset="0%" stopColor="#1B2735"></stop>
                <stop offset="100%" stopColor="#090A0F"></stop>
              </radialGradient>
              <clipPath id="bgMaskClip">
                <path
                  id="a"
                  d="M173.724 329.545c39.22 0 89.58-14.898 117.847-37.806 37.213-30.16 46.653-75.062 46.653-126.694 0-36.434-7.95-82.547-28-109.807C280.28 14.523 228.141.545 173.724.545 82.874.545 0 64.497 0 155.348c0 30.82 9.488 70.54 24.237 95.197 28.726 48.026 89.458 79 149.487 79z"
                ></path>
              </clipPath>
            </defs>
            <g fill="none" fillRule="evenodd" transform="translate(.776 .455)">
              <mask id="d" fill="#fff">
                <use xlinkHref="#a"></use>
              </mask>
              <use fill="url(#b)" xlinkHref="#a"></use>
              <path
                fill="url(#c)"
                d="M201.116 385.996c128.36 0 308.108-66.082 308.108-103.633 0-23.842-5.17-42.055-62.503-40.188-20.402.665-130.942 1.17-162.806 0-19.62-.72-47.567 5.385-65.424 5.385-16.04 0-85.568-12.832-115.317-21.33-40.426-11.547-45.416-13.731-63.526-14.866-31.973-2.004-40.02 7.613-41.699 8.798-20.162 14.226-23.941 62.294-23.941 78.154 0 18.014-19.271 65.504 19.548 90.433 42.102 27.035 140.777-2.753 207.56-2.753z"
                mask="url(#d)"
              ></path>
              <path
                fill="url(#e)"
                d="M212.627 432.008c128.201 0 307.728-66.026 307.728-103.545 0-23.822 73.255-87.982 15.994-86.116-20.377.664-97.966-24.18-129.791-25.349-5.557-.204-41.365 12.293-57.11 12.047-25.222-.394-55.972 7.348-83.724 10.5-16.01 1.818-32.594-.636-42.5 0-20.052 1.288-54.09 7.943-88.288 9.558-32.52 1.535-58.817-.815-67.465 0-31.798 2.997-54.12 16.574-62.147 20.451-26.601 12.849-31.571 13.306-31.571 29.153 0 17.998-7.2 111.144 31.571 136.051 42.05 27.013 140.603-2.75 207.303-2.75z"
                mask="url(#d)"
              ></path>
              <g mask="url(#d)">
                <path
                  fill="url(#f)"
                  d="M11.283 42c5.438 0 10.384-1.044 10.68-2.047.39-1.321-2.33-1.79-4.623-4.368-1.46-1.642-4.766-9.46-4.864-11.398-.097-1.937-.978-4.782-1.193-4.077-2.805 9.18-4.203 11.996-6.437 14.998C3.42 37.022 0 39.098 0 40.548 0 42 5.68 42 11.283 42z"
                  transform="translate(39.224 175.545)"
                ></path>
                <path
                  fill="url(#g)"
                  d="M11.109 33c4.006 0 7.65-.969 7.868-1.9.287-1.226-2.144-1.156-3.833-3.547-1.076-1.524-2.49-9.38-2.562-11.178-.072-1.797-.435-3.907-.593-3.253-2.067 8.518-2.365 8.91-5.44 14.718-.975 1.843-3.857 3.594-3.522 4.377C3.362 33 6.98 33 11.109 33z"
                  transform="translate(39.224 175.545)"
                ></path>
                <path
                  fill="url(#h)"
                  d="M11.07 27c3.046 0 5.745-1.715 5.91-2.61.219-1.177-1.434-1.177-2.718-3.474-.818-1.465-2.088-8.946-2.142-10.673-.055-1.727-.33-3.754-.451-3.126-1.572 8.185-1.572 8.503-3.788 14.206-1.1 2.83-3.02 4.092-2.873 4.613.119.418 2.925 1.064 6.063 1.064z"
                  transform="translate(39.224 175.545)"
                ></path>
                <path
                  fill="url(#i)"
                  d="M10.553 20c2.284 0 4.308-1.715 4.432-2.61.164-1.177-1.076-1.177-2.039-3.474-.613-1.465-1.565-8.946-1.606-10.673-.041-1.727-.248-3.753-.34-3.126C9.823 8.302 9.823 8.62 8.161 14.323c-.825 2.83-2.266 4.092-2.155 4.613C6.095 19.354 8.2 20 10.553 20z"
                  transform="translate(39.224 175.545)"
                ></path>
              </g>
              <g mask="url(#d)">
                <path
                  fill="url(#j)"
                  d="M18.463 68c8.898 0 16.992-1.661 17.476-3.257.637-2.102-3.813-2.848-7.564-6.948-2.39-2.614-7.8-15.051-7.96-18.133-.159-3.082-1.6-7.608-1.952-6.488-4.59 14.607-6.878 19.085-10.534 23.861C5.597 60.081 0 63.382 0 65.691S9.295 68 18.463 68z"
                  transform="translate(16.224 152.545)"
                ></path>
                <path
                  fill="url(#k)"
                  d="M18.177 54c6.51 0 12.431-1.55 12.785-3.04.467-1.96-3.484-1.85-6.228-5.675-1.749-2.439-4.046-15.008-4.163-17.884-.117-2.876-.707-6.252-.964-5.206-3.36 13.63-3.843 14.257-8.84 23.55-1.585 2.947-6.267 5.75-5.723 7.003C5.588 54 11.47 54 18.177 54z"
                  transform="translate(16.224 152.545)"
                ></path>
                <path
                  fill="url(#l)"
                  d="M17.612 44c4.821 0 9.095-2.83 9.357-4.305.345-1.944-2.272-1.944-4.304-5.734-1.295-2.417-3.306-14.76-3.392-17.61-.086-2.85-.523-6.194-.714-5.158-2.488 13.505-2.488 14.03-5.997 23.44-1.741 4.67-4.783 6.752-4.55 7.612.188.689 4.632 1.755 9.6 1.755z"
                  transform="translate(16.224 152.545)"
                ></path>
                <path
                  fill="url(#m)"
                  d="M17.588 33c3.807 0 7.18-2.83 7.388-4.305.272-1.944-1.794-1.944-3.399-5.734-1.022-2.417-2.61-14.76-2.677-17.61-.069-2.85-.414-6.194-.564-5.158-1.964 13.505-1.964 14.03-4.734 23.44-1.375 4.67-3.777 6.752-3.592 7.612.148.689 3.657 1.755 7.578 1.755z"
                  transform="translate(16.224 152.545)"
                ></path>
              </g>
              <g mask="url(#d)">
                <path
                  fill="url(#n)"
                  d="M15.386 56c7.415 0 14.16-1.377 14.563-2.699.531-1.741-3.178-2.36-6.303-5.757-1.992-2.165-6.5-12.47-6.633-15.024-.133-2.554-1.333-6.304-1.627-5.375-3.826 12.102-5.732 15.812-8.778 19.77C4.665 49.438 0 52.173 0 54.087 0 56 7.746 56 15.386 56z"
                  transform="translate(50.224 169.545)"
                ></path>
                <path
                  fill="url(#o)"
                  d="M14.15 44c5.508 0 10.518-1.308 10.818-2.565.395-1.654-2.948-1.56-5.27-4.788-1.48-2.058-3.424-12.664-3.523-15.09-.098-2.427-.598-5.275-.816-4.393-2.842 11.5-3.25 12.03-7.479 19.87-1.341 2.488-5.303 4.852-4.843 5.91C3.497 44 8.474 44 14.15 44z"
                  transform="translate(50.224 169.545)"
                ></path>
                <path
                  fill="url(#p)"
                  d="M15.094 36c4.06 0 7.66-2.315 7.88-3.522.29-1.59-1.913-1.59-3.625-4.692-1.09-1.977-2.783-12.076-2.856-14.408-.073-2.331-.44-5.068-.601-4.22-2.095 11.05-2.095 11.479-5.05 19.178-1.467 3.82-4.028 5.524-3.831 6.228.158.564 3.9 1.436 8.083 1.436z"
                  transform="translate(50.224 169.545)"
                ></path>
                <path
                  fill="url(#q)"
                  d="M14.577 27c3.298 0 6.222-2.315 6.402-3.522.236-1.59-1.555-1.59-2.945-4.692-.886-1.977-2.262-12.076-2.32-14.408-.06-2.331-.36-5.068-.49-4.22-1.702 11.05-1.702 11.479-4.102 19.178-1.192 3.82-3.273 5.524-3.113 6.228.128.564 3.169 1.436 6.568 1.436z"
                  transform="translate(50.224 169.545)"
                ></path>
              </g>
            </g>
          </Styled.Mask>
        </>
      )}
    </>
  );
}
