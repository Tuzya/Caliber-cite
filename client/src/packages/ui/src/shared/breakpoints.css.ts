const small = 'only screen and (max-width: 560px)';
const demismall =
	'only screen and (min-width: 561px) and (max-width: 1020px)';
const demimedium = 'only screen and (max-width: 1020px)';
const medium =
	'only screen and (min-width: 1021px) and (max-width: 1450px)';
const large =
	'only screen and (min-width: 1451px) and (max-width: 1920px)';
const extraLarge = 'only screen and (min-width: 1921px)';
const wLess1280px = '(width <= 1280px)';

export const breakpoints = {
	small,
	demismall,
	demimedium,
	medium,
	large,
	extraLarge,
	wLess1280px,
};
