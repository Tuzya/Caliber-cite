import cn from 'classnames';
import { FC, ReactNode } from 'react';

import {
	CenterLayoutClasses,
	centerLayoutClasses,
} from './CenterLayout.css';

export interface CenterLayoutProps {
	children: ReactNode | ReactNode[];
}

const CenterLayout: FC<
	CenterLayoutProps & CenterLayoutClasses['recipe']
> = ({ children }): JSX.Element => (
	<div className={cn(centerLayoutClasses.recipe())}>
		<div />
		{children}
		<div />
	</div>
);

export { CenterLayout };
