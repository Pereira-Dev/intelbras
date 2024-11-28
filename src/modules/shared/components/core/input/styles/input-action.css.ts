import { style, CSSProperties } from '@vanilla-extract/css';

import { theme } from '../../../../utils/styles/theme/theme.css';
import { inputRootStyle } from './input-root.css';
import { inputTriggerStyle } from './input-trigger.css';

export const inputActionDisabledStyle: CSSProperties = {
  cursor: 'no-drop',
  color: theme.colors.disabledBackground,
};

export const inputActionDisabledHoverStyle: CSSProperties = {
  filter: 'none',
};

export const inputActionDisabledActiveStyle: CSSProperties = {
  filter: 'none',
};

export const inputActionStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  fontSize: '1.6rem',
  color: theme.colors.primaryForeground,

  background: 'transparent',
  cursor: 'pointer',

  ':hover': {
    filter: 'brightness(0.8)',
  },
  ':active': {
    filter: 'brightness(1.2)',
  },

  selectors: {
    [`${inputRootStyle}:has(${inputTriggerStyle}[disabled]) &`]:
      inputActionDisabledStyle,
    [`${inputRootStyle}:has(${inputTriggerStyle}[disabled]) &:hover`]:
      inputActionDisabledHoverStyle,
    [`${inputRootStyle}:has(${inputTriggerStyle}[disabled]) &:active`]:
      inputActionDisabledActiveStyle,
  },
});
