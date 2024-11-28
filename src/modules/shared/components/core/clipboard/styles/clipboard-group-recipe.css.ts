import { recipe } from '@vanilla-extract/recipes';

import * as styles from './clipboard-group.css';

export const clipboardGroupRecipe = recipe({
  base: styles.clipboardGroupStyle,
  variants: {
    size: {
      full: styles.clipboardGroupFullStyle,
      half: styles.clipboardGroupHalfStyle,
    },
  },
  defaultVariants: {
    size: 'full',
  },
});
