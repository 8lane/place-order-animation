import React from "react";
// import { CSSTransition } from 'react-transition-group'

// import animConfig from '../config'

import * as Styled from "./ProgressText.styles";

// const {
//   text: { intervalDurationMs, options },
// } = animConfig

export default function ProgressText() {
  // const [progress, setProgress] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((counter) => (counter === options.length - 1 ? 0 : counter + 1))
  //   }, intervalDurationMs)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  return (
    <Styled.ProgressTextWrapper>
      <Styled.ProgressTextHeading as="h1" level="h1">
        <Styled.ProgressText>
          <span>Placing order</span>
          <Styled.ElipsesWrapper>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </Styled.ElipsesWrapper>
        </Styled.ProgressText>

        {/* TODO: Improve text animation in the future */}
        {/* {options.map((text, idx) => {
          return (
            <CSSTransition
              key={text}
              in={progress === idx}
              timeout={{ enter: Styled.progressTextInDuration, exit: Styled.progressTextOutDuration }}
              appear
              mountOnEnter
              unmountOnExit>
              <Styled.ProgressText>{text}</Styled.ProgressText>
            </CSSTransition>
          )
        })} */}
      </Styled.ProgressTextHeading>
    </Styled.ProgressTextWrapper>
  );
}
