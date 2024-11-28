import { forwardRef } from 'react';

import { CalendarDaysIcon } from '../../../../assets/icons/calendar-days';
import { When } from '../../../../utils/when';
import { InputGroup } from '../input-group';
import { InputAction } from '../input-action';
import { InputField } from '../input-field';

import { DateInputProps, DateInputRefProps } from '../types';

const DateInputRef: DateInputRefProps = (props, ref) => {
  const { dateFormat, ...rest } = props;

  return (
    <>
      <When value={dateFormat} expect={'date'} isDefault>
        <InputField
          {...rest}
          ref={ref}
          mask="99/99/99"
          placeholder="12/12/12"
        />

        <InputGroup>
          <InputAction>
            <CalendarDaysIcon customSize="1.8rem" />
          </InputAction>
        </InputGroup>
      </When>

      <When value={dateFormat} expect={'date-time'}>
        <InputField
          {...rest}
          ref={ref}
          mask="99/99/99   99:99:99"
          placeholder="12/12/12  12:12:12"
        />

        <InputGroup>
          <InputAction>
            <CalendarDaysIcon customSize="1.8rem" />
          </InputAction>
        </InputGroup>
      </When>
    </>
  );
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  DateInputRef,
);
