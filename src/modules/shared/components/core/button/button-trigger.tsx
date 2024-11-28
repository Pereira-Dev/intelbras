import classNames from "classnames";
import { FC } from "react";

import { buttonTriggerRecipe } from "./styles/button-trigger-recipe.css";
import { buttonTriggerRippleStyle } from "./styles/button-trigger-ripple.css";
import { ButtonTriggerProps } from "./types";

export const ButtonTrigger: FC<ButtonTriggerProps> = (props) => {
  const {
    children,
    className,
    type,
    status,
    model,
    onlyIcon,
    foreground,
    disabled,
    ...rest
  } = props;

  const classes = classNames(
    className,
    buttonTriggerRecipe({
      model,
      status,
      onlyIcon,
      foreground,
      disabled,
    })
  );
  const buttonType = type ?? "button";

  return (
    <button {...rest} type={buttonType} className={classes} disabled={disabled}>
      <span className={buttonTriggerRippleStyle} />

      {children}
    </button>
  );
};
