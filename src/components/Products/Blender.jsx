import React from "react";

import * as Styled from "./Products.styles";

export default function Blender() {
  return (
    <Styled.Blender
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 79"
      data-test="brendas-blender"
      className="product"
    >
      <defs>
        <linearGradient
          id="blender-linearGradient-1"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#F4FDFF"></stop>
          <stop offset="100%" stopColor="#CAE9F0"></stop>
        </linearGradient>
        <linearGradient
          id="blender-linearGradient-2"
          x1="50%"
          x2="50%"
          y1=".505%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#B24"></stop>
          <stop offset="100%" stopColor="#E52852"></stop>
        </linearGradient>
        <linearGradient
          id="blender-linearGradient-3"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFF"></stop>
          <stop offset="100%" stopColor="#DFF4F8"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g>
          <g transform="translate(4.114 2.371)">
            <g>
              <path
                fill="#99DEF0"
                d="M4.51.366h30.776a4 4 0 013.974 4.456l-3.827 33.376a4 4 0 01-3.974 3.544H8.519a4 4 0 01-3.971-3.523L.538 4.843A4 4 0 014.509.366z"
              ></path>
              <path
                fill="url(#blender-linearGradient-1)"
                d="M5.913 0h27.885a4 4 0 013.978 4.425l-3.49 32.644a4 4 0 01-3.977 3.575H9.69a4 4 0 01-3.973-3.54L1.939 4.46A4 4 0 015.913 0z"
              ></path>
            </g>
            <path
              fill="url(#blender-linearGradient-2)"
              d="M4.634 41.742h30.534A4 4 0 0139.13 46.3l-3.618 25.687a4 4 0 01-3.96 3.442H8.423a4 4 0 01-3.957-3.417L.677 46.326a4 4 0 013.957-4.584z"
              transform="matrix(1 0 0 -1 0 117.17)"
            ></path>
            <path
              fill="url(#blender-linearGradient-3)"
              d="M5.557 4.76h.511a1 1 0 01.997.921c.465 5.904.904 10.658 1.317 14.264.422 3.695 1.16 9.182 2.214 16.46a.504.504 0 01-.5.577.7.7 0 01-.687-.573L6.386 19.97a1 1 0 01-.008-.052L4.565 5.889a1 1 0 01.992-1.129z"
            ></path>
            <path
              fill="url(#blender-linearGradient-3)"
              d="M30.23 4.76h.511a1 1 0 01.997.921c.465 5.904.904 10.658 1.317 14.264.422 3.695 1.16 9.182 2.214 16.46a.504.504 0 01-.5.577.7.7 0 01-.687-.573L31.059 19.97a1 1 0 01-.008-.052l-1.813-14.03a1 1 0 01.992-1.129z"
              transform="matrix(-1 0 0 1 64.444 0)"
            ></path>
            <g fill="#99DFEA" transform="translate(19.15 4.76)">
              <path d="M0 0H1.473V32.222H0z" opacity="0.569"></path>
              <g opacity="0.55" transform="translate(2.946)">
                <path d="M0 0H1.473V1H0z"></path>
                <path d="M0 3.93H1.473V4.93H0z"></path>
                <path d="M0 7.859H1.473V8.859H0z"></path>
                <path d="M0 11.789H1.473V12.789H0z"></path>
                <path d="M0 15.718H1.473V16.718H0z"></path>
                <path d="M0 19.648H1.473V20.648H0z"></path>
                <path d="M0 23.577H1.473V24.577H0z"></path>
                <path d="M0 27.507H1.473V28.507H0z"></path>
                <path d="M0 31.436H1.473V32.436H0z"></path>
              </g>
            </g>
          </g>
          <g fill="#DB274F" transform="matrix(1 0 0 -1 0 6.486)">
            <g transform="translate(.216)">
              <path d="M1.763 0h42.732c.974 0 1.764.79 1.764 1.763a1.997 1.997 0 01-1.754 1.982c-9.44 1.16-16.442 1.74-21.006 1.74-4.576 0-11.824-.583-21.745-1.75A1.986 1.986 0 010 1.764C0 .79.79 0 1.763 0z"></path>
            </g>
          </g>
          <circle cx="24" cy="62.4" r="6.171" fill="#DD5D7A"></circle>
          <circle cx="24" cy="62.029" r="6.171" fill="#6B1125"></circle>
          <ellipse cx="24" cy="62" fill="#FFB3B3" rx="1" ry="3"></ellipse>
        </g>
      </g>
    </Styled.Blender>
  );
}
