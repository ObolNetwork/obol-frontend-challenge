import { styled } from "../../../stitches.config";

export const Text = styled("p", {
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
      lightGrey: {
        color: "#475E64",
      },
    },
    space: {
      fit: {
        mr: "$sm",
      },
      zeroM: {
        m: "$2 0",
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
