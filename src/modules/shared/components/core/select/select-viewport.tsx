import classNames from "classnames";
import { FC } from "react";


import { SelectOption, TypeSelectViewport } from "./select-option";
import { selectViewportStyle } from "./styles/select-viewport.css";
import { SelectViewportProps } from "./types";
import { Portal } from "../../../utils/portal";
import { ScrollArea } from "../scroll-area";

export const SelectViewport: FC<SelectViewportProps & TypeSelectViewport> = (
  props
) => {
  const {
    className,
    options,
    filledOption,
    width,
    position,
    onClickOption = () => {},
    ...rest
  } = props;
  const classes = classNames(selectViewportStyle, className);

  const setHeightView = (value: number) => {
    if (value < 3) {
      return `${value * 5}rem`;
    } else {
      return "12rem";
    }
  };

  return (
    <Portal.Viewport asChild>
      <div
        {...rest}
        style={{
          height: `${setHeightView(options.length)}`,
          width: width ? width : "100%",
          position: position ? position : "absolute",
        }}
        className={classes}
      >
        <ScrollArea>
          {options.map((option) => {
            return (
              <SelectOption
                id="select-option-viewport"
                key={option.label}
                value={option.value}
                label={option.label}
                onClickOption={onClickOption}
              >
                {option.content}
              </SelectOption>
            );
          })}
        </ScrollArea>
      </div>
    </Portal.Viewport>
  );
};
