import { style } from '@vanilla-extract/css';
import { theme } from '../../../../utils/styles/theme/theme.css';


export const clipboardInformationFlagStyle = style({
  cursor: 'pointer',
  transitionProperty: 'filter',
  transitionDuration: '600ms',
  transitionTimingFunction: 'ease-out',

  ':hover': {
    filter: 'brightness(1.2)',
    color: theme.colors.neutral,
  },
});
