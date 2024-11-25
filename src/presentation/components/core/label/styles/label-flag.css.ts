import { CSSProperties, style } from '@vanilla-extract/css';

import { inputTriggerStyle } from '@components/core/input/styles/input-trigger.css';
import { theme } from '../../../styles/theme/theme.css';
import { labelRootStyle } from './label-root.css';

export const labelFlagVisibleStyle: CSSProperties = {
  display: 'inline',
  color: theme.colors.alert,
};

export const labelFlagDisabledStyle: CSSProperties = {
  color: theme.colors.disabledBackground,
};

export const labelOnlyMark = style({
  marginLeft: '0.4rem',
  display: 'inline',
  color: theme.colors.alert,
})

export const labelFlagStyle = style({
  marginLeft: '0.4rem',
  display: 'none',

  selectors: {
    [`${labelRootStyle}:has(${inputTriggerStyle}[required]) &`]:
      labelFlagVisibleStyle,
    [`${labelRootStyle}:has(${inputTriggerStyle}[disabled]) &`]:
      labelFlagDisabledStyle,
  },
});
