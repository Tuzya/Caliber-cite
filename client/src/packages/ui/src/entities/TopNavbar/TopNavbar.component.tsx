import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
	base,
	linkStyle,
	spanStyle,
} from './TopNavbar.css';
import { topMenu } from './constants';

export default function TopNavbar() {
	return (
		<div className={base}>
			{topMenu.map((item) => (
				<Link
					href={item?.href}
					key={item.id}
				>
					<div className={linkStyle}>
						{item.icon && (
							<Image
								src={item?.icon}
								alt='s'
								width={30}
							/>
						)}
						<span className={spanStyle}>
							{item.text}
						</span>
					</div>
				</Link>
			))}
		</div>
	);
}
