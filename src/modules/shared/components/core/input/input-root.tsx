
import { FC } from 'react';
import classNames from 'classnames';

import { inputRootRecipe } from './styles/input-root-recipe.css';
import { InputRootProps } from './types';

export const InputRoot: FC<InputRootProps> = (props) => {
  const { children, className, size, ...rest } = props;
  const classes = classNames(inputRootRecipe({ size }), className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
