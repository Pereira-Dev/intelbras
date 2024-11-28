import { HTMLAttributes, LabelHTMLAttributes } from 'react';

export type LabelRootProps = HTMLAttributes<HTMLDivElement>;

export type LabelTextProps = LabelHTMLAttributes<HTMLLabelElement> & { markRequired?: boolean; };
