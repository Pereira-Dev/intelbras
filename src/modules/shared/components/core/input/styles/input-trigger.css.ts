import { style } from "@vanilla-extract/css";

import { theme } from '../../../../utils/styles/theme/theme.css';

export const inputTriggerStyle = style({
  width: "100%",
  height: "100%",
  marginLeft: "0.8rem",
  marginRight: "0.8rem",

  fontSize: "1.6rem",
  fontFamily: theme.fonts.primary,

  borderRadius: "8px",
  backgroundColor: "transparent",

  "::-ms-reveal": {
    display: "none",
  },
});

export const inputTriggerNormalStyle = style({
  color: theme.colors.primaryForeground,

  "::placeholder": {
    color: theme.colors.primaryNormal,
  },
  "::selection": {
    backgroundColor: theme.colors.neutral,
  },
});

export const inputTriggerSuccessStyle = style({
  color: theme.colors.success,

  "::placeholder": {
    color: theme.colors.success,
    filter: "brightness(0.8)",
  },
  "::selection": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.success,
  },
});

export const inputTriggerAttentionStyle = style({
  color: theme.colors.attention,

  "::placeholder": {
    color: theme.colors.attention,
    filter: "brightness(0.8)",
  },
  "::selection": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.attention,
  },
});

export const inputTriggerAlertStyle = style({
  color: theme.colors.alert,

  "::placeholder": {
    color: theme.colors.alert,
    filter: "brightness(0.8)",
  },
  "::selection": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.alert,
  },
});

export const inputTriggerDisabledStyle = style({
  color: theme.colors.disabledBackground,

  "::placeholder": {
    color: theme.colors.disabledBackground,
    filter: "none",
  },
  "::selection": {
    color: theme.colors.disabledBackground,
  },
});
