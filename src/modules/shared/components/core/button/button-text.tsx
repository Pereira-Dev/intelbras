import { FC } from 'react';
import classNames from 'classnames';

import { buttonTextStyle } from './styles/button-text.css';
import { ButtonTextProps } from './types';

export const ButtonText: FC<ButtonTextProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(buttonTextStyle, className);

  return (
    <p {...rest} className={classes}>
      {children}
    </p>
  );
};
