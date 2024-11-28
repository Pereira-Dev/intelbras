'use client';

import { forwardRef } from 'react';

import { ChevronDownIcon } from '../../../../assets/icons/chevron-down';
import { useSelectPortal } from '../../select';
import { InputGroup } from '../input-group';
import { InputAction } from '../input-action';
import { selectInputFlagRecipe } from '../styles/select-input-flag-recipe.css';
import { SelectInputProps, SelectInputRefProps } from '../types';

const SelectInputRef: SelectInputRefProps = (props, ref) => {
  const { ...rest } = props;
  const { opened } = useSelectPortal();

  return (
    <>
      <input {...rest} ref={ref} readOnly />

      <InputGroup>
        <InputAction className={selectInputFlagRecipe({ actived: opened })}>
          <ChevronDownIcon customSize="1.6rem" />
        </InputAction>
      </InputGroup>
    </>
  );
};

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  SelectInputRef,
);
