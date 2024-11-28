import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import { FC } from "react";

import { Portal } from "@components/utils/portal";
import { useSelect } from "./contexts/select-context";
import { selectOptionStyle } from "./styles/select-option.css";
import { SelectOptionProps } from "./types";

export type TypeSelectViewport = {
  onClickOption?: (value: any) => void;
  width?: string;
  position?: any;
  filledOption?: string | ReadonlyArray<string> | number | undefined;
};

export const SelectOption: FC<SelectOptionProps & TypeSelectViewport> = (
  props
) => {
  const {
    children,
    className,
    asChild,
    label,
    value,
    filledOption,
    onClickOption = () => {},
    ...rest
  } = props;
  const classes = classNames(selectOptionStyle, className);

  const { setSelectedOption } = useSelect();
  const Component = asChild ? Slot : "button";

  const handleOnSelectOption = () => {
    onClickOption({ label, value });
    setSelectedOption({ label, value });
  };

  return (
    <Portal.Close asChild>
      <Component {...rest} className={classes} onClick={handleOnSelectOption}>
        {children}
      </Component>
    </Portal.Close>
  );
};
