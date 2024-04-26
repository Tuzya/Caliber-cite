import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';

const base = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	maxWidth: 1440,
	width: '100%',
	margin: '0 auto',
});

const centerColumnRecipe = recipe({
	base,
	variants: {},
	defaultVariants: {},
});

export const centerColumnClasses = {
	base,
	recipe: centerColumnRecipe,
};

export interface CenterColmunClasses {
	recipe: RecipeVariants<typeof centerColumnRecipe>;
}
