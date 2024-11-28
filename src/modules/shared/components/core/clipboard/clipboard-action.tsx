import React, { FC } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';

import { clipboardActionStyle } from './styles/clipboard-action.css';
import { ClipboardActionProps } from './types';

export const ClipboardAction: FC<ClipboardActionProps> = (props) => {
  const { children, asChild, className, ...rest } = props;

  const classes = classNames(clipboardActionStyle, className);

  const Component = asChild ? Slot : 'button';

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
