import cn from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

import logo from '../../public/logotypes/Game Logo/Logo RU/CALIBER_Logo_MainVersion_Horizontal_WhiteR_Ru.png';
import { Button } from '../../shared';
import { buttonPlayWrapper } from '../../shared/Button/Button.css';

import { mainPlayClasses } from './MainPlay.css';

export type TMainPlayProps = {};

const MainPlay: FC<
	TMainPlayProps & mainPlayClasses['recipe']
> = ({}): JSX.Element => {
	return (
		<div className={cn(mainPlayClasses.recipe())}>
			<div>
				<h1
					style={{
						fontSize: '24px',
						textTransform: 'uppercase',
					}}
				>
					Командная Тактическая Игра
				</h1>
			</div>
			<div>
				<Image
					src={
						'/logotypes/Game Logo/Logo RU/CALIBER_Logo_MainVersion_Horizontal_WhiteR_Ru.png'
					}
					alt='Калибр'
					title='Калибр'
					width={600}
					height={130}
				/>
			</div>
			<div className={buttonPlayWrapper}>
				<Button
					label='Играть'
					variant='play'
				/>
			</div>

			<video
				autoPlay // Автоматическое воспроизведение
				loop // Зацикливание видео
				playsInline // Воспроизведение на мобильных устройствах внутри элемента страницы
				muted // Заглушить звук (чтобы не было проблем с автовоспроизведением на некоторых браузерах)
				className={cn(
					mainPlayClasses.recipe({
						variant: 'videoWrapper',
					}),
				)}
			>
				{/* Указываем источник видео */}
				<source
					src='https://s-dt2.cloud.edgecore.ru/caliber-website/media/1stPerson_for_Site.mp4'
					type='video/mp4'
				/>
			</video>
		</div>
	);
};

export default MainPlay;
