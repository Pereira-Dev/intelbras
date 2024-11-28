import { style } from '@vanilla-extract/css';

import { theme } from '../../../../utils/styles/theme/theme.css';

export const labelRootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',

  textAlign: 'left',
  fontFamily: theme.fonts.primary,
});
