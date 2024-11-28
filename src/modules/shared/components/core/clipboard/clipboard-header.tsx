'use client';
import React, { FC } from 'react';
import classNames from 'classnames';

import { Separator } from '../separator';
import {
  clipboardHeaderSeparatorStyle,
  clipboardHeaderStyle,
} from './styles/clipboard-header.css';
import { ClipboardHeaderProps } from './types';

export const ClipboardHeader: FC<ClipboardHeaderProps> = (props) => {
  const { children, className, ...rest } = props;

  const classes = classNames(clipboardHeaderStyle, className);

  return (
    <>
      <header {...rest} className={classes}>
        {children}
      </header>
      <Separator className={clipboardHeaderSeparatorStyle} />
    </>
  );
};
