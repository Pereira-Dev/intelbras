"use client";

import { forwardRef, useState } from "react";

import { InputFieldProps, InputFieldRefProps } from "../types";

const formatMAC = (value: any) => {
  const cleanedValue = value.replace(/[^a-fA-F0-9]/g, "");

  let formattedValue = "";
  for (let i = 0; i < cleanedValue.length; i++) {
    if (i > 0 && i % 2 === 0) {
      formattedValue += ":";
    }
    formattedValue += cleanedValue[i].toUpperCase();
  }

  return formattedValue;
};

const InputMacRef: InputFieldRefProps = (props, ref) => {
  const { mask, defaultValue, ...rest } = props;

  const [mac, setMac] = useState(defaultValue);

  const handleChange = (e: any) => {
    setMac(formatMAC(e.target.value));
  };

  return (
    <input
      {...rest}
      ref={ref}
      value={mac}
      onChange={handleChange}
      maxLength={17}
    />
  );
};

export const InputMac = forwardRef<HTMLInputElement, InputFieldProps>(
  InputMacRef
);
