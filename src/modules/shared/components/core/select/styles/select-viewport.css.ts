import { style } from "@vanilla-extract/css";

import { theme } from '../../../../utils/styles/theme/theme.css';

export const selectViewportStyle = style({
  height: "12rem",
  paddingTop: "0.8rem",
  overflow: "hidden",
  position: "absolute",
  zIndex: 90890909,

  backgroundColor: theme.colors.primarySurface,
  borderRadius: "0 0 4px 4px",
});
