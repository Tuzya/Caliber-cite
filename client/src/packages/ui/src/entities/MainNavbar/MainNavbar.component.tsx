import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '../../../../../../public/logotypes/Game Logo/Symbol/CALIBER_Symbol_WhiteR.png';
import { Button } from '../../shared';

import {
	base,
	imageStyle,
	linkStyle,
} from './MainNavbar.css';
import { mainMenu } from './constants';

export default function MainNavbar() {
	return (
		<div className={base}>
			<div>
				<Link href='/'>
					<Image
						src={logo}
						alt='image'
						className={imageStyle}
					/>
				</Link>
			</div>
			<div className={base}>
				{mainMenu.map((item) => (
					<Link
						href={item?.href}
						key={item.id}
						className={linkStyle}
					>
						{item.text}
					</Link>
				))}
				<div style={{ width: 217, height: 46 }}>
					<Button
						label='Играть бесплатно'
						variant='playFree'
					/>
				</div>
			</div>
		</div>
	);
}
