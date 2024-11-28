import { theme } from '../../../../utils/styles/theme/theme.css';
import { style } from "@vanilla-extract/css";

export const radioStyle = style({
    marginRight: "8px",
    appearance: "none",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    border: `2px solid ${theme.colors.success}`,
    outline: "none",
    cursor: "pointer",

    ':checked': {
        backgroundColor: theme.colors.success,
        boxShadow: `inset 0 0 0 2px ${theme.colors.secondarySurface}`
    }
})