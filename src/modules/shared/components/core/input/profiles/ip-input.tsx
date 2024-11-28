"use client";

import { forwardRef, useState } from "react";

import { InputFieldProps, InputFieldRefProps } from "../types";

const formatIp = (value: string) => {
  return value.replace(/[^0-9.]/g, "");
};

const InputIpRef: InputFieldRefProps = (props, ref) => {
  const { mask, defaultValue, ...rest } = props;

  const [ip, setIp] = useState(defaultValue);

  const handleChange = (e: any) => {
    setIp(formatIp(e.target.value));
  };

  return <input {...rest} ref={ref} value={ip} onChange={handleChange} />;
};

export const InputIp = forwardRef<HTMLInputElement, InputFieldProps>(
  InputIpRef
);
