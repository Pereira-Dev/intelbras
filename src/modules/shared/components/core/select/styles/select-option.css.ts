import { style } from "@vanilla-extract/css";

import { theme } from '../../../../utils/styles/theme/theme.css';

export const selectOptionStyle = style({
  width: "100%",
  height: "3.6rem",
  paddingLeft: "1.6rem",
  paddingRight: "1.6rem",
  textAlign: "left",
  fontFamily: theme.fonts.primary,
  color: theme.colors.primaryForeground,
  fontSize: "1.4rem",

  backgroundColor: "transparent",
  transition: "background-color 0.3s linear",
  cursor: "pointer",

  ":hover": {
    backgroundColor: theme.colors.hoveredOptionBackground,
  },
});
