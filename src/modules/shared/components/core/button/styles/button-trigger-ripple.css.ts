import { CSSProperties, style } from "@vanilla-extract/css";


import {
  buttonTriggerDisabledStyle,
  buttonTriggerOnlyIconStyle,
  buttonTriggerRawStyle,
  buttonTriggerSolidStyle,
  buttonTriggerVoidStyle,
} from "./button-trigger.css";
import { theme } from "../../../../utils/styles/theme/theme.css";
import { rippleAnimation, smallRippleAnimation } from "../../../../utils/styles/animations/ripple.css";

export const buttonTriggerAnimatedSolidVoidStyle: CSSProperties = {
  animationName: rippleAnimation,
};

export const buttonTriggerAnimatedOnlyIconStyle: CSSProperties = {
  animationName: smallRippleAnimation,
};

export const buttonTriggerNoAnimatedRawDisabledStyle: CSSProperties = {
  animationName: "none",
};

export const buttonTriggerRippleStyle = style({
  position: "absolute",
  borderRadius: "10px",
  transform: "scale(0)",
  backgroundColor: theme.colors.actionRipple,

  animationDuration: "500ms",
  animationTimingFunction: "ease-out",

  selectors: {
    [`${buttonTriggerSolidStyle}:active &, ${buttonTriggerVoidStyle}:active &`]:
      buttonTriggerAnimatedSolidVoidStyle,
    [`${buttonTriggerOnlyIconStyle}:active &`]:
      buttonTriggerAnimatedOnlyIconStyle,
    [`${buttonTriggerRawStyle}:active &, ${buttonTriggerDisabledStyle}:active &`]:
      buttonTriggerNoAnimatedRawDisabledStyle,
  },
});
