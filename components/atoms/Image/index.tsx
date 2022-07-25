import { styled } from "../../../stitches.config"; //fix this with@

export const Image = styled("img", {
  // base styles
  variants: {
    size: {
      halfHeight: {
        height: "60%",
        width: "100%",
      },
    },
  },
});
