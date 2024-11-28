import { recipe } from '@vanilla-extract/recipes';

import * as styles from './select-input-flag.css';

export const selectInputFlagRecipe = recipe({
  variants: {
    actived: {
      true: styles.selectInputFlagActiveStyle,
      false: styles.selectInputFlagInactiveStyle,
    },
  },
});
