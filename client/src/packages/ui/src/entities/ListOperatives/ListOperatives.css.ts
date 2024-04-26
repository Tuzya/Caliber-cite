import { style } from '@vanilla-extract/css';

export const flexContainter = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '60px',
});

export const iconList = style({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'flex-end',
	gap: '5.9px',
	marginTop: '65px',
	cursor: 'pointer',
	':hover': {
		fill: 'red',
		stroke: 'red',
	},
});

export const iconListTEST = style({
	display: 'flex',
	// flexDirection: '',
	width: '139px',
	height: '139px',
	color: 'black',
	alignSelf: 'flex-end',
	gap: '5.9px',
	marginTop: '65px',
	cursor: 'pointer',
});

export const ulList = style({
	paddingTop: '40px',
});

export const backSvg = style({
	paddingTop: '40px',
	position: 'absolute',
	zIndex: -1,
	width: 196,
	height: 200,
});
