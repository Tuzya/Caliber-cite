import Link from 'next/link';
import React, { FC, MouseEvent, ReactNode } from 'react';

import { ButtonClasses, buttonClasses } from './Button.css';

export type TButtonProps = {
	href?: string;
	label: string;
	variant?: string;
	sizes?: string;
	wrap?: boolean;
	fill?: boolean;

	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

//TODO add onClick action. polimorph type for link and button

const Button: FC<
	TButtonProps & ButtonClasses['recipe']
> = ({
	href = null,
	label,
	variant,
	sizes,
	onClick,
	wrap = true,
	fill = false,
}) => {
	if (href) {
		return (
			<Link
				className={buttonClasses.recipe({
					variant,
					sizes,
					wrap,
					fill,
				})}
				href={href}
			>
				{label}
			</Link>
		);
	}
	return (
		<button
			className={buttonClasses.recipe({
				variant,
				sizes,
				wrap,
				fill,
			})}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export { Button };
