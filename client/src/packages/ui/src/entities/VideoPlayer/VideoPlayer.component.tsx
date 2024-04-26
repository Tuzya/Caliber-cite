'use client';

import Image from 'next/image';
import React, { FC, ReactNode, useState } from 'react';

import {
	base,
	buttonPlay,
	imageYoutube,
} from './VideoPlayer.css';

export type TVideoPlayerBlockProps = {
	children?: ReactNode | ReactNode[];
};

const VideoPlayer: FC<TVideoPlayerBlockProps> = ({
	children,
}): JSX.Element => {
	const [active, setActive] = useState(true);
	const switchAtcive = () => {
		console.log('123', active);
		setActive((prew) => !prew);
	};

	return (
		<div className={base}>
			{active ? (
				<div className={imageYoutube}>
					<div
						className={buttonPlay}
						onClick={switchAtcive}
					/>
				</div>
			) : (
				<div>{children}</div>
			)}
		</div>
	);
};

export default VideoPlayer;
