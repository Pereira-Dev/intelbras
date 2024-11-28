import { recipe } from '@vanilla-extract/recipes';

import * as styles from './input-trigger.css';

export const inputTriggerRecipe = recipe({
  base: styles.inputTriggerStyle,
  variants: {
    status: {
      normal: styles.inputTriggerNormalStyle,
      success: styles.inputTriggerSuccessStyle,
      attention: styles.inputTriggerAttentionStyle,
      alert: styles.inputTriggerAlertStyle,
    },
    disabled: {
      true: styles.inputTriggerDisabledStyle,
    },
  },
  defaultVariants: {
    status: 'normal',
    disabled: false,
  },
});
