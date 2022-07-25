import { styled } from "../../../stitches.config"; //fix this with@

export const Div = styled("div", {
  // base styles
  variants: {
    display: {
      flex: {
        display: "flex",
        alignItems: "baseline",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "$xl",
        gridAutoRows: "0.5fr",
      },
      colFlex: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    space: {
      fit: {
        p: "$xxxs",
      },
      press: {
        p: "$xl",
      },
    },
    size: {
      quarter: {
        height: "350px",
      },
    },
    color: {
      grey: {
        bc: "$bg03",
      },
    },
  },
});
