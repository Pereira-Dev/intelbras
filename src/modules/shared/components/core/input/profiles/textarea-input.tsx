import classNames from "classnames";
import { forwardRef } from "react";

import { inputTextareaStyle } from "../styles/input-textarea.css";
import { TextareaInputProps, TextareaInputRefProps } from "../types";

const TextareaInputRef: TextareaInputRefProps = (props, ref) => {
  const { className } = props;
  const classes = classNames(inputTextareaStyle, className);

  return (
    <textarea
      {...props}
      className={classes}
      rows={3}
      cols={4}
      maxLength={200}
      ref={ref}
    />
  );
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  TextareaInputRef
);
