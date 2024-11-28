import { recipe } from '@vanilla-extract/recipes';

import * as styles from './button-trigger.css';

export const buttonTriggerRecipe = recipe({
  base: styles.buttonTriggerStyle,
  variants: {
    model: {
      solid: styles.buttonTriggerSolidStyle,
      void: styles.buttonTriggerVoidStyle,
      raw: styles.buttonTriggerRawStyle,
    },
    status: {
      success: styles.buttonTriggerSuccessStyle,
      neutral: styles.buttonTriggerNeutralStyle,
      attention: styles.buttonTriggerAttentionStyle,
      alert: styles.buttonTriggerAlertStyle,
    },
    onlyIcon: {
      true: styles.buttonTriggerOnlyIconStyle,
    },
    foreground: {
      true: styles.buttonTriggerForegroundStyle,
    },
    disabled: {
      true: styles.buttonTriggerDisabledStyle,
    },
  },
  compoundVariants: [
    {
      variants: {
        model: 'solid',
        status: 'success',
      },
      style: styles.buttonTriggerSolidSuccessStyle,
    },
    {
      variants: {
        model: 'solid',
        status: 'neutral',
      },
      style: styles.buttonTriggerSolidSuccessStyle,
    },
    {
      variants: {
        model: 'solid',
        status: 'attention',
      },
      style: styles.buttonTriggerSolidAttentionStyle,
    },
    {
      variants: {
        model: 'solid',
        status: 'alert',
      },
      style: styles.buttonTriggerSolidAlertStyle,
    },
    {
      variants: {
        model: 'void',
        status: 'success',
      },
      style: styles.buttonTriggerVoidSuccessStyle,
    },
    {
      variants: {
        model: 'void',
        status: 'neutral',
      },
      style: styles.buttonTriggerVoidNeutralStyle,
    },
    {
      variants: {
        model: 'void',
        status: 'attention',
      },
      style: styles.buttonTriggerVoidAttentionStyle,
    },
    {
      variants: {
        model: 'void',
        status: 'alert',
      },
      style: styles.buttonTriggerVoidAlertStyle,
    },
    {
      variants: {
        model: 'raw',
        status: 'success',
      },
      style: styles.buttonTriggerRawSuccessStyle,
    },
    {
      variants: {
        model: 'raw',
        status: 'neutral',
      },
      style: styles.buttonTriggerRawNeutralStyle,
    },
    {
      variants: {
        model: 'raw',
        status: 'attention',
      },
      style: styles.buttonTriggerRawAttentionStyle,
    },
    {
      variants: {
        model: 'raw',
        status: 'alert',
      },
      style: styles.buttonTriggerRawAlertStyle,
    },
    {
      variants: {
        model: 'raw',
        onlyIcon: true,
      },
      style: styles.buttonTriggerRawOnlyIconStyle,
    },
    {
      variants: {
        model: 'raw',
        foreground: true,
      },
      style: styles.buttonTriggerRawForegroundStyle,
    },
    {
      variants: {
        model: 'raw',
        foreground: true,
        status: 'success',
      },
      style: styles.buttonTriggerRawForegroundSuccessStyle,
    },
    {
      variants: {
        model: 'raw',
        foreground: true,
        status: 'neutral',
      },
      style: styles.buttonTriggerRawForegroundNeutralStyle,
    },
    {
      variants: {
        model: 'raw',
        foreground: true,
        status: 'alert',
      },
      style: styles.buttonTriggerRawForegroundAlertStyle,
    },
    {
      variants: {
        model: 'raw',
        foreground: true,
        status: 'attention',
      },
      style: styles.buttonTriggerRawForegroundAttentionStyle,
    },
    {
      variants: {
        model: 'solid',
        disabled: true,
      },
      style: styles.buttonTriggerDisabledSolidStyle,
    },
    {
      variants: {
        model: 'void',
        disabled: true,
      },
      style: styles.buttonTriggerDisabledVoidStyle,
    },
    {
      variants: {
        model: 'raw',
        disabled: true,
      },
      style: styles.buttonTriggerDisabledRawStyle,
    },
  ],
  defaultVariants: {
    model: 'solid',
    status: 'success',
    foreground: false,
    onlyIcon: false,
    disabled: false,
  },
});
