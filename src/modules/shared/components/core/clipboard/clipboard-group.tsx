import React, { FC } from 'react';
import classNames from 'classnames';

import { clipboardGroupRecipe } from './styles/clipboard-group-recipe.css';
import { ClipboardGroupProps } from './types';

export const ClipboardGroup: FC<ClipboardGroupProps> = (props) => {
  const { children, size, className, ...rest } = props;

  const classes = classNames(clipboardGroupRecipe({ size }), className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
