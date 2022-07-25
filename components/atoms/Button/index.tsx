import { CSS, styled } from "../../../stitches.config"; //fix this with@

export const Button = styled("button", {
  // base styles
  cursor: "pointer",
  height: "$md",
  width: "7vw",
  textAlign: "center",
  variants: {
    color: {
      green: {
        bc: "$obolGreen",
        color: "$bg04",
        border: "$obolGreen",
        "&:hover": {
          bc: "$obolGreenHover",
          border: "$obolGreenHover",
        },
      },
    },
    space: {
      fit: {
        p: "$xxxs",
        br: "$1",
        ml: "$xs",
      },
    },
    font: {
      smallFont: {
        fontWeight: "$bold",
        fontSize: "$2",
        lh: "$shorter",
      },
    },
  },
});
