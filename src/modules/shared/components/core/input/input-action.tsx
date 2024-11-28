import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

import { inputActionStyle } from './styles/input-action.css';
import { InputActionProps } from './types';

export const InputAction: FC<InputActionProps> = (props) => {
  const { children, className, type, asChild, ...rest } = props;
  const classes = classNames(inputActionStyle, className);
  const buttonType = type || 'button';

  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} type={buttonType} className={classes}>
      {children}
    </Component>
  );
};
