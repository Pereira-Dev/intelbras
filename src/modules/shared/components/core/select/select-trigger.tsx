import classNames from "classnames";
import React from "react";

import { Portal } from "@components/utils/portal";
import { selectTriggerStyle } from "./styles/select-trigger.css";
import { SelectTriggerProps } from "./types";

export const SelectTrigger: React.FC<SelectTriggerProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(selectTriggerStyle, className);

  return (
    <Portal.Trigger {...rest} className={classes}>
      {children}
    </Portal.Trigger>
  );
};
