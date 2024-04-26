import { style } from '@vanilla-extract/css';

export const base = style({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	minHeight: '70px',
	backgroundColor: 'rgb(33 37 42)',
	padding: '0px 10px 0px 10px',
	gap: '22px',
});

export const imageStyle = style({
	paddingLeft: '50px',
	width: '120px',
	height: '100%',
});

export const linkStyle = style({
	height: 70,
	display: 'flex',
	alignItems: 'center',

	':hover': {
		color: '#FFC83C',
		borderBottom: 'solid 2px #FFC83C;',
		textDecoration: 'none',
	},
});
