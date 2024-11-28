import React, { FC } from 'react';
import classNames from 'classnames';

import { clipboardContentStyle } from './styles/clipboard-content.css';
import { ClipboardContentProps } from './types';

export const ClipboardContent: FC<ClipboardContentProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames(clipboardContentStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
