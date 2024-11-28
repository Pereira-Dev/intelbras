import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

import { InputTriggerProps } from "../input/types";
import { PortalTriggerProps } from "../../../utils/portal/types";

export type SelectOption = {
  label: string;
  value: string | number;
  content: string | ReactElement;
  filledOption?: string | ReadonlyArray<string> | number | undefined | [];
};

export type SelectContextOption = Omit<SelectOption, "content"> | null;

export type SelectContextProps = {
  selectedOption: SelectContextOption;
  setSelectedOption: (option: SelectContextOption) => void;
};

export type SelectProviderProps = {
  children: ReactNode;
};

export type SelectRootProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
};

export type SelectTriggerProps = HTMLAttributes<HTMLDivElement> &
  PortalTriggerProps;

export type SelectInputTriggerProps = InputTriggerProps;

export type SelectOptionProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<SelectOption, "content"> & {
    asChild?: boolean;
  };

export type SelectViewportProps = HTMLAttributes<HTMLDivElement> & {
  options: SelectOption[];
};
