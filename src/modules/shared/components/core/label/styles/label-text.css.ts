import { CSSProperties, style } from "@vanilla-extract/css";

import { theme } from '../../../../utils/styles/theme/theme.css';
import { labelRootStyle } from "./label-root.css";
import { inputTriggerAlertStyle, inputTriggerAttentionStyle, inputTriggerDisabledStyle, inputTriggerNormalStyle, inputTriggerSuccessStyle } from "../../input/styles/input-trigger.css";

export const labelTextNormalStyle: CSSProperties = {
  color: theme.colors.primaryForeground,
};

export const labelTextSuccessStyle: CSSProperties = {
  color: theme.colors.success,
};

export const labelTextAttentionStyle: CSSProperties = {
  color: theme.colors.attention,
};

export const labelTextAlertStyle: CSSProperties = {
  color: theme.colors.alert,
};

export const labelTextDisabledStyle: CSSProperties = {
  color: theme.colors.disabledBackground,
};

export const labelTextStyle = style({
  fontSize: "1.4rem",
  color: theme.colors.primaryForeground,

  selectors: {
    [`${labelRootStyle}:has(${inputTriggerNormalStyle}) &`]:
      labelTextNormalStyle,
    [`${labelRootStyle}:has(${inputTriggerSuccessStyle}) &`]:
      labelTextSuccessStyle,
    [`${labelRootStyle}:has(${inputTriggerAttentionStyle}) &`]:
      labelTextAttentionStyle,
    [`${labelRootStyle}:has(${inputTriggerAlertStyle}) &`]: labelTextAlertStyle,
    [`${labelRootStyle}:has(${inputTriggerDisabledStyle}) &`]:
      labelTextDisabledStyle,
  },
});
