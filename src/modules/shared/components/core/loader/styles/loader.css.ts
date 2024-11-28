import { style } from '@vanilla-extract/css';

import { theme } from '../../../../utils/styles/theme/theme.css';

export const loaderStyle = style({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9999"
})

export const iconLoaderStyle = style({
    color: theme.colors.success
})