import { style, CSSProperties } from '@vanilla-extract/css';

import { inputRootStyle } from './input-root.css';
import {
  inputTriggerAlertStyle,
  inputTriggerAttentionStyle,
  inputTriggerDisabledStyle,
  inputTriggerNormalStyle,
  inputTriggerSuccessStyle,
} from './input-trigger.css';
import { theme } from '../../../../utils/styles/theme/theme.css';

export const inputItemNormalStyle: CSSProperties = {
  color: theme.colors.neutral,
};

export const inputItemSuccessStyle: CSSProperties = {
  color: theme.colors.success,
};

export const inputItemAttentionStyle: CSSProperties = {
  color: theme.colors.attention,
};

export const inputItemAlertStyle: CSSProperties = {
  color: theme.colors.alert,
};

export const inputItemDisabledStyle: CSSProperties = {
  color: theme.colors.disabledBackground,
};

export const inputItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  selectors: {
    [`${inputRootStyle}:has(${inputTriggerNormalStyle}) &`]:
      inputItemNormalStyle,
    [`${inputRootStyle}:has(${inputTriggerSuccessStyle}) &`]:
      inputItemSuccessStyle,
    [`${inputRootStyle}:has(${inputTriggerAttentionStyle}) &`]:
      inputItemAttentionStyle,
    [`${inputRootStyle}:has(${inputTriggerAlertStyle}) &`]: inputItemAlertStyle,
    [`${inputRootStyle}:has(${inputTriggerDisabledStyle}) &`]:
      inputItemDisabledStyle,
  },
});
