'use client';

import { LegacyRef, forwardRef } from 'react';
import ReactInputMask from 'react-input-mask';

import { When } from '@components/utils/when';
import { InputFieldProps, InputFieldRefProps } from './types';

const InputFieldRef: InputFieldRefProps = (props, ref) => {
  const { mask, ...rest } = props;

  return (
    <>
      <When value={mask} expect={[undefined, '']} isDefault>
        <input {...rest} ref={ref} />
      </When>

      <When value={mask} not expect={[undefined, '']}>
        <ReactInputMask // TO DO: create fragment for this
          {...rest}
          ref={ref as LegacyRef<ReactInputMask>}
          mask={mask as string}
        />
      </When>
    </>
  );
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  InputFieldRef,
);
