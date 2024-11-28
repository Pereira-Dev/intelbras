"use client";

import { forwardRef } from "react";


import { InputFieldProps, InputFieldRefProps } from "../types";

const InputIpRef: InputFieldRefProps = (props, ref: any) => {
  const { mask, defaultValue, ...rest } = props;

  return (
    <InputIpMask
      {...rest}
      ref={ref}
      defaultValue={defaultValue}
      mask="99.999.99.99"
      autoComplete="off"
    />
  );
};

export const InputIpMask = forwardRef<HTMLInputElement, InputFieldProps>(
  InputIpRef
);
