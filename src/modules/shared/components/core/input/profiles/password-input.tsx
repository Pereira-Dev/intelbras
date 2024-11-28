"use client";

import { forwardRef, useState } from "react";

import { EyeIcon } from "../../../../assets/icons/eye";
import { EyeSlashIcon } from "../../../../assets/icons/eye-slash";
import { Toggle } from "../../../../utils/toggle";
import { When } from "../../../../utils/when";
import { InputAction } from "../input-action";
import { InputGroup } from "../input-group";
import { PasswordInputProps, PasswordInputRefProps } from "../types";

const PasswordInputRef: PasswordInputRefProps = (props, ref) => {
  const { disabled } = props;
  const [hidden, setHidden] = useState(true);
  const inputType = hidden ? "password" : "text";

  return (
    <>
      <input {...props} ref={ref} type={inputType} disabled={disabled} />

      <When value={disabled} expect={false} isDefault>
        <Toggle.Trigger enabled={!hidden} setEnabled={setHidden} asChild>
          <InputGroup>
            <Toggle.EnabledContent asChild>
              <InputAction id="eye-button">
                <EyeIcon customSize="2.2rem" />
              </InputAction>
            </Toggle.EnabledContent>

            <Toggle.DisabledContent asChild>
              <InputAction id="eye-slash-button">
                <EyeSlashIcon customSize="2.3rem" />
              </InputAction>
            </Toggle.DisabledContent>
          </InputGroup>
        </Toggle.Trigger>
      </When>

      <When value={disabled} expect={true}>
        <InputGroup>
          <InputAction id="eye-button-icon">
            <EyeIcon customSize="2.2rem" />
          </InputAction>
        </InputGroup>
      </When>
    </>
  );
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  PasswordInputRef
);
