import { CSSProperties, style } from "@vanilla-extract/css";

import { theme } from '../../../../utils/styles/theme/theme.css';
import {
  inputTriggerAlertStyle,
  inputTriggerAttentionStyle,
  inputTriggerNormalStyle,
  inputTriggerStyle,
  inputTriggerSuccessStyle,
} from "./input-trigger.css";

export const inputRootNormalStyle: CSSProperties = {
  color: theme.colors.primaryNormal,
};

export const inputRootSuccessStyle: CSSProperties = {
  borderColor: theme.colors.success,
};

export const inputRootAttentionStyle: CSSProperties = {
  borderColor: theme.colors.attention,
};

export const inputRootAlertStyle: CSSProperties = {
  borderColor: theme.colors.alert,
};

export const inputRootDisabledStyle: CSSProperties = {
  borderColor: theme.colors.disabledBackground,
};

export const inputRootStyle = style({
  minWidth: "12rem",
  height: "4.5rem",
  paddingLeft: "1.2rem",
  paddingRight: "1.2rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "start",

  fontSize: "1.6rem",
  fontFamily: theme.fonts.primary,

  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "8px",

  selectors: {
    [`&:has(${inputTriggerNormalStyle})`]: inputRootNormalStyle,
    [`&:has(${inputTriggerSuccessStyle})`]: inputRootSuccessStyle,
    [`&:has(${inputTriggerAttentionStyle})`]: inputRootAttentionStyle,
    [`&:has(${inputTriggerAlertStyle})`]: inputRootAlertStyle,

    [`&:has(${inputTriggerStyle}[disabled])`]: inputRootDisabledStyle,
  },
});

export const inputRootMediumStyle = style({
  width: "50%",
});

export const inputRootLargeStyle = style({
  width: "100%",
});

export const inputRootTextareaStyle = style({
  width: "100%",
  height: "15.2rem",
});
