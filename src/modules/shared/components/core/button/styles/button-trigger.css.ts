import { style } from "@vanilla-extract/css";
import { softBackgroundHoverTransition, softForegroundHoverTransition } from "../../../../utils/styles/utils/soft-hover-transition.css";
import { theme } from "../../../../utils/styles/theme/theme.css";



export const buttonTriggerStyle = style({
  position: "relative",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  overflow: "hidden",

  fontFamily: theme.fonts.primary,

  borderRadius: "6px",
  cursor: "pointer",
});

export const buttonTriggerSuccessStyle = style({});

export const buttonTriggerNeutralStyle = style({});

export const buttonTriggerAttentionStyle = style({});

export const buttonTriggerAlertStyle = style({});

export const buttonTriggerSolidStyle = style([
  softBackgroundHoverTransition,
  {
    minHeight: "2.8rem",
    padding: "0.8rem",

    border: "none",
  },
]);

export const buttonTriggerVoidStyle = style([
  softBackgroundHoverTransition,
  {
    minHeight: "2.8rem",
    padding: "0.8rem",

    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "transparent",
  },
]);

export const buttonTriggerRawStyle = style([
  softForegroundHoverTransition,
  {
    minHeight: "auto",

    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent",
  },
]);

export const buttonTriggerOnlyIconStyle = style({
  minWidth: "4.8rem",
  minHeight: "2.8rem",
});

export const buttonTriggerForegroundStyle = style({});

export const buttonTriggerSolidSuccessStyle = style({
  color: theme.colors.primaryForeground,
  backgroundColor: theme.colors.successNeutral,

  ":hover": {
    backgroundColor: theme.colors.hoveredSuccessNeutral,
  },
});

export const buttonTriggerSolidAttentionStyle = style({
  color: theme.colors.contrastedForeground,
  backgroundColor: theme.colors.attention,

  ":hover": {
    backgroundColor: theme.colors.hoveredAttention,
  },
});

export const buttonTriggerSolidAlertStyle = style({
  color: theme.colors.primaryForeground,
  backgroundColor: theme.colors.alert,

  ":hover": {
    backgroundColor: theme.colors.hoveredAlert,
  },
});

export const buttonTriggerVoidSuccessStyle = style({
  color: theme.colors.success,
  borderColor: theme.colors.success,

  ":hover": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.success,
  },
});

export const buttonTriggerVoidNeutralStyle = style({
  color: theme.colors.primaryForeground,
  borderColor: theme.colors.primaryForeground,
  borderWidth: "1px",

  ":hover": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.hoveredNeutral,
  },
});

export const buttonTriggerVoidAttentionStyle = style({
  color: theme.colors.attention,
  borderColor: theme.colors.attention,

  ":hover": {
    color: theme.colors.contrastedForeground,
    backgroundColor: theme.colors.attention,
  },
});

export const buttonTriggerVoidAlertStyle = style({
  color: theme.colors.alert,
  borderColor: theme.colors.alert,

  ":hover": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.alert,
  },
});

export const buttonTriggerRawSuccessStyle = style({
  color: theme.colors.success,

  ":hover": {
    color: theme.colors.hoveredSuccess,
  },
});

export const buttonTriggerRawNeutralStyle = style({
  color: theme.colors.neutral,

  ":hover": {
    color: theme.colors.hoveredNeutral,
  },
});

export const buttonTriggerRawAttentionStyle = style({
  color: theme.colors.attention,

  ":hover": {
    color: theme.colors.hoveredAttention,
  },
});

export const buttonTriggerRawAlertStyle = style({
  color: theme.colors.alert,

  ":hover": {
    color: theme.colors.hoveredAlert,
  },
});

export const buttonTriggerRawOnlyIconStyle = style({
  minWidth: 0,
  minHeight: 0,
});

export const buttonTriggerRawForegroundStyle = style({
  color: theme.colors.primaryForeground,
});

export const buttonTriggerRawForegroundSuccessStyle = style({
  ":hover": {
    color: theme.colors.hoveredPrimaryForeground,
  },
});

export const buttonTriggerRawForegroundNeutralStyle = style({
  ":hover": {
    color: theme.colors.hoveredNeutral,
  },
});

export const buttonTriggerRawForegroundAttentionStyle = style({
  ":hover": {
    color: theme.colors.hoveredAttention,
  },
});

export const buttonTriggerRawForegroundAlertStyle = style({
  ":hover": {
    color: theme.colors.hoveredAlert,
  },
});

export const buttonTriggerDisabledStyle = style({
  cursor: "no-drop",
});

export const buttonTriggerDisabledSolidStyle = style({
  color: theme.colors.primaryForeground,
  backgroundColor: theme.colors.disabledBackground,

  ":hover": {
    color: theme.colors.primaryForeground,
    backgroundColor: theme.colors.disabledBackground,
  },
});

export const buttonTriggerDisabledVoidStyle = style({
  color: theme.colors.disabledBackground,
  borderColor: theme.colors.disabledBackground,

  ":hover": {
    color: theme.colors.disabledBackground,
    backgroundColor: "transparent",
  },
});

export const buttonTriggerDisabledRawStyle = style({
  color: theme.colors.disabledBackground,

  ":hover": {
    color: theme.colors.disabledBackground,
  },
});
