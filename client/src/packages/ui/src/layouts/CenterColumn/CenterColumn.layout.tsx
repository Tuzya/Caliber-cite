import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import {
	CenterColmunClasses,
	centerColumnClasses,
} from './CenterColumn.css';

export type TCenterColumnProps = {
	children: ReactNode | ReactNode[];
};

const CenterColumn: FC<
	TCenterColumnProps & CenterColmunClasses['recipe']
> = ({ children }): JSX.Element => {
	return (
		<div className={cn(centerColumnClasses.recipe())}>
			{children}
		</div>
	);
};

export default CenterColumn;
