import classNames from "classnames";
import { forwardRef, Ref } from "react";


import { InputField } from "./input-field";
import { DateInput } from "./profiles/date-input";
import { PasswordInput } from "./profiles/password-input";
import { SelectInput } from "./profiles/select-input";
import { Textarea } from "./profiles/textarea-input";

import { InputMac } from "./profiles/input-mac";
import { InputIp } from "./profiles/ip-input";
import { PasswordInputOnlyNumbers } from "./profiles/password-input-only-numbers";
import { PasswordInputWithoutEye } from "./profiles/password-input-without-eye";
import { RadioInput } from "./profiles/radio-input";
import { inputTriggerRecipe } from "./styles/input-trigger-recipe.css";
import {
  InputTextareProps,
  InputTriggerElement,
  InputTriggerProps,
  InputTriggerRefProps,
  TextInputProps,
} from "./types";
import { When } from "../../../utils/when";

const InputTriggerRef: InputTriggerRefProps = (props, ref) => {
  const { className, profile, status, disabled, ...rest } = props;
  const classes = classNames(
    inputTriggerRecipe({ status, disabled }),
    className
  );
  const inputRest = { ...rest } as TextInputProps;
  const textareaRest = { ...rest } as InputTextareProps;

  return (
    <>
      <When value={profile} expect="text" isDefault>
        <InputField
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
          autoComplete="off"
        />
      </When>

      <When value={profile} expect="input-mac">
        <InputMac
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
          autoComplete="off"
        />
      </When>

      <When value={profile} expect="ip-input">
        <InputIp
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          autoComplete="off"
        />
      </When>

      <When value={profile} expect="password">
        <PasswordInput
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="password-only-numbers">
        <PasswordInputOnlyNumbers
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="password-without-eye">
        <PasswordInputWithoutEye
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="radio">
        <RadioInput
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="select">
        <SelectInput
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="date">
        <DateInput
          {...inputRest}
          ref={ref as Ref<HTMLInputElement>}
          className={classes}
          disabled={disabled}
        />
      </When>

      <When value={profile} expect="textarea">
        <Textarea
          {...textareaRest}
          ref={ref as Ref<HTMLTextAreaElement>}
          className={classes}
          disabled={disabled}
        />
      </When>
    </>
  );
};

export const InputTrigger = forwardRef<InputTriggerElement, InputTriggerProps>(
  InputTriggerRef
);
