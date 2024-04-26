import { style } from '@vanilla-extract/css';
import {
	RecipeVariants,
	recipe,
} from '@vanilla-extract/recipes';
import { relative } from 'path';

export const base = style({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	maxWidth: '1440px',
	maxHeight: '700px',
	width: '100%',
	height: '100vh',
	margin: 'auto',
});

export const imageYoutube = style({
	position: 'relative',
	width: '651px',
	height: '368px',
	border: `2px solid #FFC83C;`,
	backgroundImage:
		'url(https://cdn-ws.playcaliber.com/media/main/2021/10/Обложка-на-главную.jpg)',
	backgroundSize: '100% 100%',
	backgroundRepeat: 'no-repeat',
	':hover': {},
});

export const buttonPlay = style({
	position: 'absolute', // Позиционируем кнопку абсолютно относительно блока с изображением
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	top: '0%',
	left: '0%',

	width: '100%',
	height: '100%',
	zIndex: 2,

	backgroundImage:
		'url(https://playcaliber.com/s/img/main/icon_play_video.362a64bfceab.png)',
	backgroundSize: '85px 85px',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	cursor: 'pointer',
	':hover': {
		opacity: 1,
		backgroundImage:
			'url(https://playcaliber.com/s/img/main/icon_play_video_hover.cbdca13b1063.png)',
		pointerEvents: 'fill',
	},
	// ':hover': {},
});
