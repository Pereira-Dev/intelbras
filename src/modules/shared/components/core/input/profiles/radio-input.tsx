import { forwardRef } from "react";

import classNames from "classnames";
import { radioStyle } from "../styles/input-radio.css";
import { InputFieldProps, InputFieldRefProps } from "../types";

const RadioInputRef: InputFieldRefProps = (props, ref) => {
  const { className } = props;
  const classes = classNames(radioStyle, className);

  return <input {...props} className={classes} type="radio" ref={ref} />;
};

export const RadioInput = forwardRef<HTMLInputElement, InputFieldProps>(
  RadioInputRef
);
