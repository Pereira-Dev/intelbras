import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';

import { buttonTriggerRecipe } from './styles/button-trigger-recipe.css';
import { BUTTON_TRIGGER_MODELS, BUTTON_TRIGGER_STATUS } from './constants';

export type ButtonTriggerStatus = (typeof BUTTON_TRIGGER_STATUS)[number];

export type ButtonTriggerModel = (typeof BUTTON_TRIGGER_MODELS)[number];

export type ButtonTriggerVariants = RecipeVariants<typeof buttonTriggerRecipe>;

export type ButtonItemProps = HTMLAttributes<HTMLDivElement>;

export type ButtonRootProps = HTMLAttributes<HTMLDivElement>;

export type ButtonTextProps = HTMLAttributes<HTMLParagraphElement>;

export type ButtonTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonTriggerVariants;
