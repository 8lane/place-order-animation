import styled, { keyframes } from "styled-components";

// export const progressTextInDuration = 1520

// export const progressTextOutDuration = 1000

// /* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bs%3A%5B%7BT%3A%22t%22%2Ce%3A%22b%22%2Cd%3A500%2CD%3A0%2Cf%3A%7Bx%3A-300%2Cy%3A0%7D%2Ct%3A%7Bx%3A0%2Cy%3A0%7D%2Cs%3A2%2Cb%3A2%7D%2C%7BT%3A%22t%22%2Ce%3A%22S%22%2Cd%3A1000%2CD%3A520%2Cf%3A%7Bx%3A0%2Cy%3A0%7D%2Ct%3A%7Bx%3A0%2Cy%3A-50%7D%2Cs%3A2%2Cb%3A4%7D%5D%7D */
// const progressTextKeyframesIn = keyframes`
//   0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -300, 0, 0, 1); }
//   1.19% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -201.629, 0, 0, 1); }
//   2.37% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -124.051, 0, 0, 1); }
//   3.56% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -67.967, 0, 0, 1); }
//   4.71% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -31.406, 0, 0, 1); }
//   7.05% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4.009, 0, 0, 1); }
//   9.38% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 11.054, 0, 0, 1); }
//   15.97% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.921, 0, 0, 1); }
//   22.56% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -0.211, 0, 0, 1); }
//   32.89% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
//   34.11% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
//   34.21% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
//   36.58% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15.312, 0, 1); }
//   38.95% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -19.275, 0, 1); }
//   41.92% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -15.606, 0, 1); }
//   44.81% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.111, 0, 1); }
//   47.78% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.395, 0, 1); }
//   50.67% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.013, 0, 1); }
//   55.42% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1.622, 0, 1); }
//   67.14% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.002, 0, 1); }
//   71.88% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.137, 0, 1); }
//   83.6% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
//   88.34% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.011, 0, 1); }
//   100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
// `

// /* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bs%3A%5B%7BT%3A%22t%22%2Ce%3A%22b%22%2Cd%3A1000%2CD%3A0%2Cf%3A%7Bx%3A0%2Cy%3A0%7D%2Ct%3A%7Bx%3A400%2Cy%3A0%7D%2Cs%3A2%2Cb%3A4%7D%5D%7D */
// const progressTextKeyframesOut = keyframes`
//   0% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
//   4.5% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 194.107, 0, 0, 1); }
//   9.01% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 351.991, 0, 0, 1); }
//   13.51% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 434.968, 0, 0, 1); }
//   17.92% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 455.687, 0, 0, 1); }
//   29.03% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 412.914, 0, 0, 1); }
//   34.63% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 397.627, 0, 0, 1); }
//   40.14% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 393.83, 0, 0, 1); }
//   62.36% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 400.684, 0, 0, 1); }
//   84.68% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 399.924, 0, 0, 1); }
//   100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 400, 0, 0, 1); }
// `

// https://martinwolf.org/before-2018/blog/2015/01/pure-css-savingloading-dots-animation/
const elipsesBlink = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

export const ProgressTextWrapper = styled.div`
  position: relative;
  height: 60px;
  margin-top: 30px;
  text-align: center;
`;

export const ProgressTextHeading = styled.h1`
  && {
    font-size: 2.6rem;
    font-weight: 400;
    user-select: none;
    @media (min-width: ${(props) => props.theme.screen_md_min}) {
      font-size: 3rem;
    }
  }
`;

// TODO: Uncomment when doing future text animation
// export const ProgressText = styled.span`
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 300px;
//   margin-left: -150px;
//   text-align: center;
//   white-space: nowrap;
//   transform: translateX(-400px);

//   &.enter-done,
//   &.appear-done {
//     animation: ${progressTextKeyframesIn} ${progressTextInDuration}ms linear both;
//   }

//   &.exit-active {
//     animation: ${progressTextKeyframesOut} ${progressTextOutDuration}ms linear both;
//   }
// `

export const ProgressText = styled.span``;

export const ElipsesWrapper = styled.span`
  span {
    animation: ${elipsesBlink} 1.4s ease-in infinite both;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;
