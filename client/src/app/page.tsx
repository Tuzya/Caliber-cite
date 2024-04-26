import Image from 'next/image';
import Link from 'next/link';
import { relative } from 'path';

// Импорт стилей пагинации
// import Swiper from 'swiper';
import { iconSquad } from '../../public';

import MySwiper from '@/packages/ui/src/components/Swiper/Swiper.component';
import {
	iconList,
	iconListTEST,
} from '@/packages/ui/src/entities/ListOperatives/ListOperatives.css';
import MainPlay from '@/packages/ui/src/entities/MainPlay/MainPlay.component';
import PlayFree from '@/packages/ui/src/entities/PlayFree/PlayFree.component';
import VideoPlayer from '@/packages/ui/src/entities/VideoPlayer/VideoPlayer.component';
import CenterColumn from '@/packages/ui/src/layouts/CenterColumn/CenterColumn.layout';
import { Button } from '@/packages/ui/src/shared';
import { buttonPlayWrapper } from '@/packages/ui/src/shared/Button/Button.css';

export default function Home() {
	return (
		<>
			<MainPlay />
			<CenterColumn>
				<PlayFree />
				<VideoPlayer />
			</CenterColumn>
			<div className={iconListTEST}>
				{iconSquad.map<any>((item: any) => (
					<Image
						key={item.icon}
						style={{
							marginRight: '20px',
						}}
						width={139}
						height={139}
						src={item.icon}
						alt='...'
					/>
				))}
			</div>
			<MySwiper />
		</>
	);
}
