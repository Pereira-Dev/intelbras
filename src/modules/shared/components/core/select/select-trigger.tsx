import classNames from "classnames";
import React from "react";


import { selectTriggerStyle } from "./styles/select-trigger.css";
import { SelectTriggerProps } from "./types";
import { Portal } from "../../../utils/portal";

export const SelectTrigger: React.FC<SelectTriggerProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(selectTriggerStyle, className);

  return (
    <Portal.Trigger {...rest} className={classes}>
      {children}
    </Portal.Trigger>
  );
};
