import { style } from '@vanilla-extract/css';

export const clipboardGroupStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const clipboardGroupFullStyle = style({
  width: '100%',
  flex: '1 1 100%',
});

export const clipboardGroupHalfStyle = style({
  flex: '0 1 calc(50% - 1.2rem)',
});
