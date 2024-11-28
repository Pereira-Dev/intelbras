import classNames from "classnames";
import { FC } from "react";


import { useSelect } from "./contexts/select-context";
import { selectInputTriggerStyle } from "./styles/select-input-trigger.css";
import { SelectInputTriggerProps } from "./types";
import { Input } from "../input";

type SelectProps = {
  defaultValue?: string;
};

export const SelectInputTrigger: FC<SelectInputTriggerProps & SelectProps> = (
  props
) => {
  const { className, defaultValue, ...rest } = props;
  const classes = classNames(selectInputTriggerStyle, className);

  const { selectedOption } = useSelect();

  return (
    <Input.Trigger
      {...rest}
      className={classes}
      profile="select"
      value={selectedOption?.label || defaultValue}
    />
  );
};
