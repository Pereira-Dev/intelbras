import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { clipboardGroupRecipe } from './styles/clipboard-group-recipe.css';
import { ContainerProps } from '../container/types';

export type ClipboardRootProps = ContainerProps;

export type ClipboardHeaderProps = HTMLAttributes<HTMLDivElement>;

export type ClipboardContentProps = HTMLAttributes<HTMLDivElement>;

export type ClipboardGroupVariants = RecipeVariants<
  typeof clipboardGroupRecipe
>;

export type ClipboardActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export type ClipboardGroupProps = HTMLAttributes<HTMLDivElement> &
  ClipboardGroupVariants;

export type ClipboardInformationFlagProps = HTMLAttributes<HTMLDivElement>;
