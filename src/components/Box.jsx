import React from "react";

import config from "../config";
import { useSeasonalState } from "../SeasonalContext";

import * as Styled from "./Box.styles";

const {
  placeOrderAnimation: { seasons }
} = config;

export default function Box() {
  const { season } = useSeasonalState();

  return (
    <Styled.BoxAndLid>
      <Styled.Lid season={season}>
        <Styled.LidWrapper>
          {/* Box Lid Top Variants */}
          {season.includes(seasons.default) && (
            <Styled.LidTop
              season={season}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 98 14"
              className="lid-top"
            >
              <defs>
                <radialGradient
                  id="lidradialGradient-1"
                  cx="50%"
                  cy="0%"
                  r="276.2%"
                  fx="50%"
                  fy="0%"
                  gradientTransform="matrix(0 1 -.13542 0 .5 -.5)"
                >
                  <stop offset="0%" stopColor="#E7B584"></stop>
                  <stop offset="100%" stopColor="#DDA773"></stop>
                </radialGradient>
                <linearGradient
                  id="lidlinearGradient-2"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FECB99"></stop>
                  <stop offset="100%" stopColor="#FFCD9C"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g>
                  <path
                    fill="#E3AF7D"
                    d="M0 14L14.7536058 0 84.4110577 0 98 14z"
                  ></path>
                  <path
                    fill="url(#lidradialGradient-1)"
                    d="M1 14L14.8276367 1 84.369873 1 97 14z"
                  ></path>
                  <path
                    fill="url(#lidlinearGradient-2)"
                    d="M45.5 1L53.5532227 1 55 14 44 14z"
                  ></path>
                </g>
              </g>
            </Styled.LidTop>
          )}

          {season === seasons.xmas && (
            <Styled.LidTop
              season={season}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 98 30"
              className="lid-top"
            >
              <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1="33.728%" y2="100%">
                  <stop offset="0%" stopColor="#FFB124"></stop>
                  <stop offset="100%" stopColor="#FFD85A"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path fill="#C3242B" d="M0 30l14.754-14h69.657L98 30z"></path>
                <path fill="#CA3D44" d="M1 30l13.828-13H84.37L97 30z"></path>
                <path fill="#FFD85A" d="M45.5 17h8.053L55 30H44z"></path>
                <path
                  fill="#FFD85A"
                  d="M31.976.249a39.88 39.88 0 011.62.28c3.301.633 8.523 5.18 15.667 13.64a6 6 0 01.844 6.425 5.317 5.317 0 01-5.4 3.02c-3.304-.368-6.373-.709-9.207-1.021-3.539-.39-7.43-1.671-11.67-3.843a8 8 0 01-2.411-1.894c-1.696-1.964-2.307-3.524-1.834-4.68.382-.934.897-3.403 2.98-6.602.326-.5 1.072-1.408 2.238-2.723A8 8 0 0131.976.25z"
                ></path>
                <path
                  fill="#FFB124"
                  d="M24.365 11.534c2.829.917 4.322 1.402 4.48 1.455 3.307 1.1 8.055 3.053 10.26 4.012 2.026.883 3.719 1.478 5.076 1.787a1.59 1.59 0 011.238 1.55 1.33 1.33 0 01-1.355 1.33c-3.75-.073-7.108-.527-10.072-1.364-2.869-.81-5.75-1.992-8.643-3.548a4.5 4.5 0 01-1.969-2.107l-.605-1.337a1.304 1.304 0 011.59-1.778z"
                ></path>
                <path
                  fill="#FFD85A"
                  d="M67.454.249a39.88 39.88 0 00-1.62.28c-3.301.633-8.523 5.18-15.667 13.64a6 6 0 00-.844 6.425 5.317 5.317 0 005.401 3.02c3.303-.368 6.372-.709 9.206-1.021 3.539-.39 7.43-1.671 11.67-3.843a8 8 0 002.411-1.894c1.696-1.964 2.307-3.524 1.834-4.68-.382-.934-.897-3.403-2.98-6.602-.326-.5-1.072-1.408-2.237-2.723A8 8 0 0067.454.25z"
                ></path>
                <path
                  fill="#FFB124"
                  d="M75.065 11.534c-2.829.917-4.322 1.402-4.48 1.455-3.307 1.1-8.055 3.053-10.26 4.012-2.026.883-3.719 1.478-5.076 1.787a1.59 1.59 0 00-1.238 1.55 1.33 1.33 0 001.355 1.33c3.751-.073 7.109-.527 10.072-1.364 2.869-.81 5.75-1.992 8.643-3.548a4.5 4.5 0 001.969-2.107l.605-1.337a1.304 1.304 0 00-1.59-1.778z"
                ></path>
                <path
                  fill="url(#a)"
                  d="M54.5 24c0-5.523-1.41-10-5-10s-5 4.477-5 10h10z"
                ></path>
              </g>
            </Styled.LidTop>
          )}

          {/* Box Lid Face Variants */}
          {season.includes(seasons.default) && (
            <Styled.LidFace
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 98 18"
              className="lid-face"
            >
              <defs>
                <linearGradient
                  id="facelinearGradient-1"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#EAB785"></stop>
                  <stop offset="100%" stopColor="#E5B282"></stop>
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g transform="translate(0 -14)">
                  <g transform="translate(0 14)">
                    <path
                      fill="url(#facelinearGradient-1)"
                      stroke="#E7B483"
                      d="M97.5.5v17H.5V.5h97z"
                    ></path>
                    <path fill="#FFCD9C" d="M44 0H55V18H44z"></path>
                  </g>
                </g>
              </g>
            </Styled.LidFace>
          )}

          {season === seasons.xmas && (
            <Styled.LidFace
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 98 18"
              className="lid-face"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FF4750"
                  stroke="#C3242B"
                  d="M97.5.5v17H.5V.5h97z"
                ></path>
                <path fill="#FFD85A" d="M44 0h11v18H44z"></path>
              </g>
            </Styled.LidFace>
          )}
        </Styled.LidWrapper>
      </Styled.Lid>

      {/* Box Body Variants */}
      {season.includes(seasons.default) && (
        <Styled.Box
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 89 70"
        >
          <defs>
            <linearGradient
              id="boxlinearGradient-1"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFCD9C"></stop>
              <stop offset="100%" stopColor="#FDCA99"></stop>
            </linearGradient>
            <path id="path-2" d="M0 0.028H89V68.028H0z"></path>
            <linearGradient
              id="boxlinearGradient-4"
              x1="50%"
              x2="50%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F1BD8B"></stop>
              <stop offset="100%" stopColor="#D8A26D"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g>
              <path
                fill="#F1BD8B"
                stroke="#F1BD8B"
                d="M0.5 13.537H88.5V68.598H0.5z"
              ></path>
              <path
                fill="url(#boxlinearGradient-1)"
                d="M39 14.028H50V68.028H39z"
              ></path>
              <mask id="mask-3" fill="#fff">
                <use xlinkHref="#path-2"></use>
              </mask>
              <g
                fill="url(#boxlinearGradient-4)"
                stroke="#F2C79E"
                mask="url(#mask-3)"
              >
                <path
                  d="M73.406.214l13.377 11H-1.02l13.515-11h60.91z"
                  transform="translate(1.306 2)"
                ></path>
              </g>
            </g>
          </g>
        </Styled.Box>
      )}

      {season === seasons.xmas && (
        <Styled.Box
          season={season}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 97 74"
        >
          <defs>
            <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset=".093%" stopColor="#D86A7C"></stop>
              <stop offset="100%" stopColor="#FFF9FA"></stop>
            </linearGradient>
            <path id="b" d="M4 .028h89v68H4z"></path>
          </defs>
          <g fill="none" fillRule="evenodd" transform="translate(0 .972)">
            <path
              fill="url(#a)"
              fillOpacity="0.5"
              d="M5 55.083h86.235l5.685 17.453H0z"
            ></path>
            <path
              fill="#FF4750"
              stroke="#C3242B"
              d="M4.5 13.537h88v55.061h-88z"
            ></path>
            <path fill="#FFD85A" d="M43 14.028h11v54H43z"></path>
            <mask id="c" fill="#fff">
              <use xlinkHref="#b"></use>
            </mask>
            <g stroke="#C3242B" mask="url(#c)">
              <path
                fill="#E7363F"
                d="M78.713 2.214l13.376 11H4.287l13.516-11h60.91z"
              ></path>
              <path
                strokeLinecap="square"
                d="M78.987 2.502v10.034M18.013 2.502v10.034"
              ></path>
            </g>
          </g>
        </Styled.Box>
      )}
    </Styled.BoxAndLid>
  );
}
