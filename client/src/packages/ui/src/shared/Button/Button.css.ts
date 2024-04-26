import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';

const base = style({
	display: 'flex',
	alignItems: 'center',
	width: 'min-content',
	height: 'min-content',
	textDecoration: 'none',
	color: '#2C2D2E',
	borderRadius: '0',
	background: 'transparent',
	border: 'none',
	lineHeight: '100%',
	cursor: 'pointer',
	transition: 'all 0.5s cubic-bezier(0.42, 0, 0.1, 0.99)',
	outline: 'none',
	fontSize: '16px',
});

const buttonRecipe = recipe({
	base,
	variants: {
		sizes: {},
		variant: {
			play: {
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				fontWeight: 'bold',
				letterSpacing: '4px',
				lineHeight: '30px',
				fontSize: '28px',
				color: '#1A1D22',
				backgroundColor: '#FFC83C',
				textTransform: 'uppercase',
				':hover': {
					backgroundColor: `#FFE68F`,
					textDecoration: `none`,
				},
			},
			playFree: {
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

				letterSpacing: '1px',
				lineHeight: '30px',
				color: '#1A1D22',
				backgroundColor: '#FFC83C',
				textTransform: 'uppercase',
				':hover': {
					backgroundColor: `#FFE68F`,
					textDecoration: `none`,
				},
			},
			linkFooter: {
				color: '#EBEDF3',
				height: '26px',
				fontSize: '18px',
				fontWeight: 'bold',
				paddingBottom: '20px',
				borderBottom: '1px solid #FFC83C',

				':hover': {
					color: 'rgba(255,200,60,1)',
				},
			},
			listOperativesFooter: {
				color: '#999999',
				height: '26px',
				fontSize: '13px',
				display: 'flex',
				alignItems: 'center',

				':hover': {
					color: 'rgba(255,200,60,1)',
				},
			},
		},
		fill: {
			false: {},
			true: {
				width: '100% !important',
			},
		},
		wrap: {
			false: {
				whiteSpace: 'nowrap',
			},
		},
	},
});

export const buttonClasses = {
	base,
	recipe: buttonRecipe,
};

export const buttonPlayWrapper = style({
	width: '270px',
	height: '78px',
	border: '1px solid #FFC83C',
	padding: '4px 4px 4px 4px ',
	':hover': {
		border: '2px solid #FFC83C',
	},
});

export interface ButtonClasses {
	recipe: RecipeVariants<typeof buttonRecipe>;
}
