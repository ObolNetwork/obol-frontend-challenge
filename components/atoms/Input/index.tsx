import { styled } from "../../../stitches.config";

export const Input = styled("input", {
  // base styles
  height: "$md",
  width: "50vw",
  variants: {
    color: {
      grey: {
        bc: "$bg02",
        border: "$2 solid $bg04",
        color: "$menu",
      },
    },
    space: {
      fit: {
        br: "$1",
        pl: "$xxs",
      },
    },
    font: {
      smallFont: {
        fontSize: "$5",
        lh: "$shorter",
      },
    },
  },
});
