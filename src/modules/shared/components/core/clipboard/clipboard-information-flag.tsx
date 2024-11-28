import React, { FC } from 'react';
import classNames from 'classnames';

import { clipboardInformationFlagStyle } from './styles/clipboard-information-flag.css';
import { ClipboardInformationFlagProps } from './types';

export const ClipboardInformationFlag: FC<ClipboardInformationFlagProps> = (
  props,
) => {
  const { children, className, ...rest } = props;

  const classes = classNames(clipboardInformationFlagStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
