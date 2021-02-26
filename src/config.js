export default {
  placeOrderAnimationOverlay: {
    screenReaderText:
      "Your order is being placed - We'll redirect you to the order confirmation page shortly."
  },
  placeOrderAnimation: {
    seasons: {
      default: "default",
      defaultTu: "default-tu",
      xmas: "xmas",
      halloween: "halloween"
    },
    initialDelayMs: 2000,
    colors: {
      variants: {
        default: {
          bgMask: "#FFF9FA"
        },
        xmas: {}
      }
    },
    box: {
      lid: {
        animDurationMs: 4000
      }
    },
    products: {
      total: 3,
      animYAxisMoveDistancePx: 320,
      animTimingFunction: "cubic-bezier(0.280, 0.840, 0.420, 1)",
      animDurationMs: 3500
    },
    text: {
      intervalDurationMs: 3000,
      options: [
        "Calling elves...",
        "Shaking mistletoe...",
        "Working our magic...",
        "Won't be much longer..."
      ]
    }
  }
};
