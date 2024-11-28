import classNames from 'classnames';
import { FC } from 'react';

import { inputItemStyle } from './styles/input-item.css';
import { InputItemProps } from './types';

export const InputItem: FC<InputItemProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(inputItemStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
