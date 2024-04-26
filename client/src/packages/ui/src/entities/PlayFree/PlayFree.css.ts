import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';

const base = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-end',
	background: `url('https://playcaliber.com/s/img/main/landing_bg_11.8e786e14153e.jpg')`, // Устанавливаем фоновое изображение через CSS
	backgroundSize: '100% ', // Заполнение всего пространства
	backgroundPosition: 'center', // Центрируем изображение
	backgroundRepeat: 'no-repeat',
	maxWidth: '1440px',
	maxHeight: '700px',
	width: '100%',
	height: '100vh',
	margin: 'auto',
});

const playFreeRecipe = recipe({
	base,
	variants: {
		variant: {},
	},
	defaultVariants: {},
});

export const playFreeClasses = {
	base,
	recipe: playFreeRecipe,
};

export interface playFreeClasses {
	recipe: RecipeVariants<typeof playFreeRecipe>;
}
