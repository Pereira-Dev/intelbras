import classNames from "classnames";
import { FC } from "react";

import { labelFlagStyle, labelOnlyMark } from "./styles/label-flag.css";
import { labelTextStyle } from "./styles/label-text.css";
import { LabelTextProps } from "./types";

export const LabelText: FC<LabelTextProps> = (props) => {
  const { children, className, markRequired, ...rest } = props;
  const classes = classNames(labelTextStyle, className);

  return (
    <label {...rest} className={classes}>
      {children}
      <span className={markRequired ? labelOnlyMark : labelFlagStyle}> *</span>
    </label>
  );
};
