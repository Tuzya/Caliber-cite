import React, { FC } from 'react';

import { Button } from '../../shared';
import { buttonPlayWrapper } from '../../shared/Button/Button.css';

import { playFreeClasses } from './PlayFree.css';

const PlayFree: FC<
	playFreeClasses['recipe']
> = (): JSX.Element => {
	return (
		<div className={playFreeClasses.recipe()}>
			<div
				className={buttonPlayWrapper}
				style={{ width: 500 }}
			>
				<Button
					label='Играть бесплатно'
					variant='play'
					href='/'
				/>
			</div>
		</div>
	);
};

export default PlayFree;
