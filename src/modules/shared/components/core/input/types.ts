import { RecipeVariants } from '@vanilla-extract/recipes';
import {
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  HTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import * as constants from './constants';
import { inputRootRecipe } from './styles/input-root-recipe.css';
import { inputTriggerRecipe } from './styles/input-trigger-recipe.css';

export type InputRootSize = (typeof constants.INPUT_ROOT_SIZES)[number];

export type InputTriggerProfile =
  (typeof constants.INPUT_TRIGGER_PROFILES)[number];

export type InputTriggerStatus =
  (typeof constants.INPUT_TRIGGER_STATUS)[number];

export type InputTriggerDateFormat =
  (typeof constants.INPUT_TRIGGER_DATE_FORMAT)[number];

export type InputTriggerSize = (typeof constants.INPUT_ROOT_SIZES)[number];

export type InputRootVariants = RecipeVariants<typeof inputRootRecipe>;

export type InputTriggerVariants = RecipeVariants<typeof inputTriggerRecipe>;

export type InputActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export type InputItemGroupProps = HTMLAttributes<HTMLDivElement>;

export type InputItemProps = HTMLAttributes<HTMLDivElement>;

export type InputRootProps = HTMLAttributes<HTMLDivElement> & InputRootVariants;

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

export type InputTextareProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputFieldProps = InputTextProps & {
  mask?: string;
};
export type InputFieldRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  InputFieldProps
>;

export type TextInputProps = InputFieldProps;
export type TextInputRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
>;

export type PasswordInputProps = Omit<InputTextProps, 'type'>;
export type PasswordInputRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  PasswordInputProps
>;

export type SelectInputProps = Omit<InputTextProps, 'readOnly'>;
export type SelectInputRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  SelectInputProps
>;

export type PhoneInputProps = Omit<InputFieldProps, 'placeholder'>;
export type PhoneInputRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  PhoneInputProps
>;
export type PhoneInputTriggerRefProps = PhoneInputRefProps;

export type DateInputProps = InputFieldProps & {
  dateFormat?: string;
};
export type DateInputRefProps = ForwardRefRenderFunction<
  HTMLInputElement,
  DateInputProps
>;

export type TextareaInputProps = InputTextareProps;
export type TextareaInputRefProps = ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaInputProps
>;

export type InputProfileProps =
  | TextInputProps
  | PasswordInputProps
  | SelectInputProps
  | PhoneInputProps
  | DateInputProps
  | TextareaInputProps;

export type InputTriggerElement = HTMLInputElement | HTMLTextAreaElement;

export type InputTriggerProps = InputProfileProps &
  InputTriggerVariants & {
    profile?: InputTriggerProfile;
  };

export type InputTriggerRefProps = ForwardRefRenderFunction<
  InputTriggerElement,
  InputTriggerProps
>;

export type InputTemplateProps = {
  text: string;
  labelText: string;
  withIcon: boolean;
  withButton: boolean;
  rootSize?: InputTriggerSize;
  profile?: InputTriggerProfile;
  disabled?: boolean;
};
