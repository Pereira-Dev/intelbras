"use client";

import { forwardRef } from "react";

import { PasswordInputProps, PasswordInputRefProps } from "../types";

const PasswordInputWithoutEyeRef: PasswordInputRefProps = (props, ref) => {
  const { disabled } = props;

  return <input {...props} ref={ref} type={"password"} disabled={disabled} />;
};

export const PasswordInputWithoutEye = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(PasswordInputWithoutEyeRef);
