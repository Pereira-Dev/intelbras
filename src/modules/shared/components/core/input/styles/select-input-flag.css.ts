import { style } from '@vanilla-extract/css';

export const selectInputFlagInactiveStyle = style({
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(0deg)',
});

export const selectInputFlagActiveStyle = style({
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(180deg)',
});
