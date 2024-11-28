import React, { FC } from 'react';
import classNames from 'classnames';

import { Container } from '../container';
import { clipboardRootStyle } from './styles/clipboard-root.css';
import { ClipboardRootProps } from './types';

export const ClipboardRoot: FC<ClipboardRootProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames(clipboardRootStyle, className);

  return (
    <Container {...rest} className={classes}>
      {children}
    </Container>
  );
};
