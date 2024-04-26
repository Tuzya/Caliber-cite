import { style } from '@vanilla-extract/css';
import {
    recipe,
    RecipeVariants,
} from '@vanilla-extract/recipes';

const base = style({
    display: 'grid',
    placeContent: 'center',
    gridTemplateColumns: '8.33% 1fr 8.33%',
    width: '100%',
    height: '100%',
    flexGrow: '1',
});

const centerLayoutRecipe = recipe({
    base,
    variants: {},
    defaultVariants: {},
});

export const centerLayoutClasses = {
    base,
    recipe: centerLayoutRecipe,
};

export interface CenterLayoutClasses {
    recipe: RecipeVariants<typeof centerLayoutRecipe>;
}
