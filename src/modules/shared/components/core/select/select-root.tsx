import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';

import { Portal } from '@components/utils/portal';
import { SelectProvider } from './contexts/select-context';
import { selectRootStyle } from './styles/select-root.css';
import { SelectRootProps } from './types';

export const SelectRoot: React.FC<SelectRootProps> = (props) => {
  const { children, className, asChild, ...rest } = props;
  const classes = classNames(selectRootStyle, className);

  const Component = asChild ? Slot : 'div';

  return (
    <Portal.Provider>
      <SelectProvider>
        <Component {...rest} className={classes}>
          {children}
        </Component>
      </SelectProvider>
    </Portal.Provider>
  );
};
