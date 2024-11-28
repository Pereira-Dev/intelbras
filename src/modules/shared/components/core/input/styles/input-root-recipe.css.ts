import { recipe } from '@vanilla-extract/recipes';

import * as styles from './input-root.css';

export const inputRootRecipe = recipe({
  base: styles.inputRootStyle,
  variants: {
    size: {
      medium: styles.inputRootMediumStyle,
      large: styles.inputRootLargeStyle,
      textarea: styles.inputRootTextareaStyle,
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
