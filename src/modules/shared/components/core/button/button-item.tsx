import { FC } from 'react';
import classNames from 'classnames';

import { buttonItemStyle } from './styles/button-item.css';
import { ButtonItemProps } from './types';

export const ButtonItem: FC<ButtonItemProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(buttonItemStyle, className);

  return (
    <span {...rest} className={classes}>
      {children}
    </span>
  );
};
