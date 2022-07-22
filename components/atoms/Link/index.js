import { styled } from "../../../stitches.config";

export const Link = styled("a", {
  // base styles

  variants: {
    color: {
      blue: {
        color: "$menu",
      },
      grey: {
        color: "$muted",
      },
      obolGreen: {
        color: "$obolGreen",
      },
      body: {
        color: "$body",
      },
      light: {
        color: "$light",
      },
    },
    display: {
      centerA: {
        textAlign: "center",
        display: "block",
      },
    },
    space: {
      fit: {
        mr: "$sm",
      },
      zeroM: {
        m: "$xs 0 0",
      },
    },
    font: {
      smallFont: {
        fontSize: "$3",
      },
      midFont: {
        fontSize: "$5",
      },
    },
  },
});
