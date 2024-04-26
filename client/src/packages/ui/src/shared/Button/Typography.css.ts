import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';

import { breakpoints } from '../breakpoints.css';

const base = style({
	margin: 0,
	fontFamily: 'var(--inter)',
});

const typographyRecipe = recipe({
	base,
	variants: {
		clearLinkStyle: {
			true: {
				textDecoration: 'none',
			},
		},
		color: {
			subheader: {
				color: '#797A80',
			},
			headline: {
				color: '#2C2D2E',
			},
			time: {
				color: '#797A80',
			},
			textSecondary: {
				color: '#A5A7AD',
			},
			primary: {
				color: '#2C2D2E',
			},
			light: {
				color: '#fff',
			},
			inherit: {
				color: 'inherit',
			},
			links: {
				color: '#0786C3',
			},
		},
		mod: {
			capitalize: {
				textTransform: 'capitalize',
			},
			none: {
				textTransform: 'none',
			},
			uppercase: {
				textTransform: 'uppercase',
			},
		},
		variant: {
			'Headline 1': {
				fontSize: '48px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: '130%',
				letterSpacing: '-0.48px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '40px',
						fontStyle: 'normal',
						fontWeight: '400',
						letterSpacing: '-0.4px',
					},
					[breakpoints.small]: {
						fontSize: '24px',
						fontWeight: '400',
						letterSpacing: '-0.24px',
					},
				},
			},
			'Headline 2': {
				fontSize: '40px',
				fontStyle: 'normal',
				fontWeight: '600',
				lineHeight: '130%',
				letterSpacing: '-0.4px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '32px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '130%',
						letterSpacing: '-0.32px',
					},
				},
			},
			'Headline 3': {
				fontSize: '32px',
				fontStyle: 'normal',
				fontWeight: '600',
				lineHeight: '130%',
				letterSpacing: '-0.32px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '24px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '130%',
						letterSpacing: '-0.24px',
					},
				},
			},
			'Headline 4': {
				fontSize: '26px',
				fontStyle: 'normal',
				fontWeight: '600',
				lineHeight: '130%',
				letterSpacing: '-0.26px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '20px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '130%',
						letterSpacing: '-0.2px',
					},
				},
			},
			'Headline 5': {
				fontSize: '20px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: '130%',
				letterSpacing: '-0.2px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '16px',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '130%',
						letterSpacing: '-0.16px',
					},
				},
			},

			'Headline 6': {
				fontSize: '16px',
				fontStyle: 'normal',
				fontWeight: '600',
				lineHeight: '130%',
				letterSpacing: '-0.16px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '14px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '130%',
						letterSpacing: '-0.14px',
					},
				},
			},
			'Button 1': {
				fontSize: '24px',
				fontStyle: 'normal',
				fontWeight: '600',
				lineHeight: '120%',
				letterSpacing: '-0.24px',
				'@media': {
					[breakpoints.small]: {
						fontSize: '16px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '120%',
						letterSpacing: '-0.2px',
					},
					[breakpoints.medium]: {
						fontSize: '20px',
						fontStyle: 'normal',
						fontWeight: '600',
						lineHeight: '120%',
						letterSpacing: '-0.2px',
					},
				},
			},
			'Text 1': {
				fontSize: '24px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: '140%',
				letterSpacing: '-0.48px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '20px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '140%',
						letterSpacing: '-0.4px',
					},
				},
			},
			'Text 2': {
				fontFamily: 'Golos Text',
				fontSize: '20px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: '140%',
				letterSpacing: '-0.4px',
				'@media': {
					[breakpoints.medium]: {
						fontFamily: 'Golos Text',
						fontSize: '18px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '140%',
						letterSpacing: '-0.36px',
					},
				},
			},
			'Text 3': {
				fontSize: '18px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: '140%',
				letterSpacing: '-0.36px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '16px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '140%',
						letterSpacing: '-0.32px',
					},
				},
			},
			'Text 4': {
				fontSize: '16px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: '140%',
				letterSpacing: '-0.32px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '14px',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '140%',
						letterSpacing: '-0.28px',
					},
				},
			},

			'Text 5': {
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '400',
				lineHeight: '140%',
				letterSpacing: '-0.28px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '12px',
						fontStyle: 'normal',
						fontWeight: '400',
						lineHeight: '140%',
						letterSpacing: '-0.24px',
					},
				},
			},
			'Labels 1': {
				fontSize: '16px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: '130%',
				letterSpacing: '-0.16px',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '14px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '130%',
						letterSpacing: '-0.14px',
					},
				},
			},
			'Labels 2': {
				fontSize: '14px',
				fontStyle: 'normal',
				fontWeight: '500',
				lineHeight: '130%',
				letterSpacing: '-0.14px',
				textTransform: 'uppercase',
				'@media': {
					[breakpoints.medium]: {
						fontSize: '12px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: '130%',
						letterSpacing: '-0.12px',
					},
				},
			},
		},
		size: {
			'48': {
				fontSize: '48px',
			},
			'40': {
				fontSize: '40px',
			},
			'32': {
				fontSize: '32px',
			},
			'30': {
				fontSize: '30px',
			},
			'26': {
				fontSize: '26px',
			},
			'24': {
				fontSize: '24px',
			},
			'20': {
				fontSize: '20px',
			},
			'18': {
				fontSize: '18px',
			},
			'16': {
				fontSize: '16px',
			},
			'15': {
				fontSize: '15px',
			},
			'14': {
				fontSize: '14px',
			},
			'12': {
				fontSize: '12px',
			},
			'10': {
				fontSize: '10px',
			},
			'9': {
				fontSize: '9px',
			},
			'8': {
				fontSize: '8px',
			},
			'13': {
				fontSize: '13px',
			},
		},
		letterSpacing: {
			'-0.5': {
				letterSpacing: '-0.5px',
			},
			'-0.4': {
				letterSpacing: '-0.4px',
			},
			'-0.3': {
				letterSpacing: '-0.3px',
			},
			'-0.2': {
				letterSpacing: '-0.2px',
			},
			'-0.1': {
				letterSpacing: '-0.1px',
			},
			'0': {
				letterSpacing: '0',
			},
			'0.1': {
				letterSpacing: '0.1',
			},
			'0.5': {
				letterSpacing: '0.5px',
			},
			'0.4': {
				letterSpacing: '0.4px',
			},
			'0.3': {
				letterSpacing: '0.3px',
			},
			'0.2': {
				letterSpacing: '0.2px',
			},
		},
		lineHeight: {
			100: {
				lineHeight: '100%',
			},
			120: {
				lineHeight: '120%',
			},
			130: {
				lineHeight: '130%',
			},
			140: {
				lineHeight: '140%',
			},
			150: {
				lineHeight: '150%',
			},
		},
		weight: {
			black: {
				fontWeight: '700',
			},
			bold: {
				fontWeight: '600',
			},
			medium: {
				fontWeight: '500',
			},
			regular: {
				fontWeight: '400',
			},
			vf: {
				fontWeight: '300',
			},
			inherit: {
				fontWeight: 'inherit',
			},
		},
		clamp: {
			'4 line': {
				display: '-webkit-box',
				WebkitLineClamp: 4,
				WebkitBoxOrient: 'vertical',
				overflow: 'hidden',
			},
			'3 line': {
				display: '-webkit-box',
				WebkitLineClamp: 3,
				WebkitBoxOrient: 'vertical',
				overflow: 'hidden',
			},
			'2 line': {
				display: '-webkit-box',
				WebkitLineClamp: 2,
				WebkitBoxOrient: 'vertical',
				overflow: 'hidden',
			},
			'1 line': {
				display: '-webkit-box',
				WebkitLineClamp: 1,
				WebkitBoxOrient: 'vertical',
				overflow: 'hidden',
			},
		},
		max: {
			800: {
				maxWidth: '800px',
			},
		},
		textAlign: {
			left: {
				textAlign: 'left',
			},
			center: {
				textAlign: 'center',
			},
			right: {
				textAlign: 'right',
			},
		},
	},
});

export const typographyClasses = {
	base,
	recipe: typographyRecipe,
};

export type TypographyRecipeVariants = RecipeVariants<
	typeof typographyRecipe
>;

export type TypographyClasses = {
	recipe: TypographyRecipeVariants;
};

export { typographyRecipe };
