import React, { FC } from 'react';
import classNames from 'classnames';

import { clipboardActionGroupStyle } from './styles/clipboard-action-group.css';
import { ClipboardGroupProps } from './types';

export const ClipboardActionGroup: FC<ClipboardGroupProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames(clipboardActionGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
