import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';

const base = style({
	position: 'relative', // Позиционируем, чтобы можно было использовать относительное позиционирование вложенных элементов
	// background: `url('https://cdn-ws.playcaliber.com/media/main/2024/04/BG_Desktop_site_2.jpg')`, // Устанавливаем фоновое изображение через CSS
	backgroundSize: 'cover', // Заполнение всего пространства
	backgroundPosition: 'center', // Центрируем изображение
	backgroundRepeat: 'no-repeat', // Отключаем повторение фонового изображения
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column',
	gap: 20,
	width: '100%',
	height: '100vh',
	maxHeight: '900px',
});

const mainPlayRecipe = recipe({
	base,
	variants: {
		variant: {
			videoWrapper: {
				position: 'absolute', // Устанавливаем видео поверх фонового изображения
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				objectFit: 'cover', // Заполняем всю доступную область
				zIndex: -1, // Устанавливаем z-index, чтобы видео было на заднем плане
			},
		},
	},
	defaultVariants: {},
});

export const mainPlayClasses = {
	base,
	recipe: mainPlayRecipe,
};

export interface mainPlayClasses {
	recipe: RecipeVariants<typeof mainPlayRecipe>;
}
