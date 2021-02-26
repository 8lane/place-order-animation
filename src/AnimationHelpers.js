import { keyframes } from "styled-components";

/* We can create a single infinite looping animation for each of the
  products by generating keyframe percentages that start at the necessary points over the duration of the
  box animation. This is done by taking the position of the product within the animation sequence and
  multiplying it by the pecentage of total products for the starting point, and then adding the duration
  of the product animation for the last step */
export function generateProductKeyframes({
  numberOfProducts,
  productAnimDurationSeconds,
  boxAnimDurationSeconds,
  productEndPositionPx
}) {
  const durationPercent =
    (productAnimDurationSeconds * 100) /
    (boxAnimDurationSeconds * numberOfProducts); // 350 ÷ 21 = 16.66

  return Array(numberOfProducts)
    .fill()
    .map((_, idx) => {
      const firstStep = (100 / numberOfProducts) * idx;
      const lastStep = firstStep + durationPercent;

      return keyframes`
        ${firstStep.toFixed(2)}% { transform: scale(1.3) }
        ${lastStep.toFixed(
          2
        )}% { transform: scale(1) translateY(${productEndPositionPx}px); }
        100% { transform: scale(1) translateY(${productEndPositionPx}px); }
    `;
    });
}
