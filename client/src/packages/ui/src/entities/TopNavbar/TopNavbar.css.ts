import { style } from '@vanilla-extract/css';

export const base = style({
	display: 'flex',
	alignContent: 'center',
	justifyContent: 'flex-end',
	alignItems: 'center',

	gap: 20,
	paddingRight: 20,
	height: '100vh',
	maxHeight: 42,
});

export const linkStyle = style({
	height: 70,
	display: 'flex',
	alignItems: 'center',
});

export const spanStyle = style({
	':hover': {
		color: '#FFC83C',
	},
});
