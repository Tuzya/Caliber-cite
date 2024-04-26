import React, { FC, ReactNode } from 'react';

import { base } from './VideoPlayerBLock.css';

export type TVideoPlayerBlockProps = {
	children: ReactNode | ReactNode[];
};

const VideoPlayerBLock: FC<TVideoPlayerBlockProps> = ({
	children,
}): JSX.Element => {
	return <div className={base}>{children}</div>;
};

export default VideoPlayerBLock;
