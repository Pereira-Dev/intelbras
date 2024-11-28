import { FC } from 'react';
import classNames from 'classnames';
import * as PrimitiveSeparator from '@radix-ui/react-separator';

import { SeparatorProps } from './types';
import { separatorStyle } from './styles/separator.css';

export const Separator: FC<SeparatorProps> = (props) => {
  const { className, vertical, ...rest } = props;

  const classes = classNames(separatorStyle, className);

  return (
    <PrimitiveSeparator.Root
      {...rest}
      data-orientation={vertical ? 'vertical' : 'horizontal'}
      className={classes}
    />
  );
};
