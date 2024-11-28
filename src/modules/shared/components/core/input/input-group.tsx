import { FC } from 'react';
import classNames from 'classnames';

import { inputGroupStyle } from './styles/input-group.css';
import { InputItemGroupProps } from './types';

export const InputGroup: FC<InputItemGroupProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(inputGroupStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
