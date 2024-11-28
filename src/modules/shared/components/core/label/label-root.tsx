import classNames from 'classnames';
import { FC } from 'react';

import { labelRootStyle } from './styles/label-root.css';
import { LabelRootProps } from './types';

export const LabelRoot: FC<LabelRootProps> = (props) => {
  const { children, className, ...rest } = props;
  const classes = classNames(labelRootStyle, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};
