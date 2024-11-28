import { FC } from 'react';
import classNames from 'classnames';

import { buttonRootStyle } from './styles/button-root.css';
import { ButtonRootProps } from './types';

export const ButtonRoot: FC<ButtonRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(buttonRootStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
