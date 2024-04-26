import React, {
	ElementType,
	FC,
	HTMLAttributes,
} from 'react';

//   import {
//     typeographyRecipe,
//     TypeographyRecipeVariants,
//   } from '@apostroph/styles';

export interface TypographyProps
	extends HTMLAttributes<HTMLOrSVGElement> {
	as?: ElementType;
	// variants?: TypeographyRecipeVariants;
}

const Typography: FC<TypographyProps> = (
	{
		// variants,
	},
) => <p style={{ fontSize: 20 }}></p>;

export { Typography };
