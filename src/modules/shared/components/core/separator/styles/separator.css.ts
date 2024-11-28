import { theme } from '../../../../utils/styles/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const separatorStyle = style({
  backgroundColor: theme.colors.neutral,
  width: '100%',
  height: '0.1rem',
  selectors: {
    [`&[data-orientation=vertical]`]: { height: '100%', width: '0.1rem' },
  },
});
