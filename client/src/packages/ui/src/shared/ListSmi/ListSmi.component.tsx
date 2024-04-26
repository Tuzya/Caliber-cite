import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ListSmi() {
	return (
		<div>
			<div>СЛЕДИТЕ ЗА НОВОСТЯМИ</div>
			<div>
				<Link
					href='https://vk.com/caliber_ru'
					target='_blank'
				>
					<Image
						src=''
						alt='...'
					/>
				</Link>
				<Link
					href='https://t.me/caliber_game'
					target='_blank'
				></Link>
				<Link
					href='https://discord.gg/caliber'
					target='_blank'
				></Link>
				<Link
					href='https://youtube.com/channel/UClC99bYmBA6zy6D-1mMhK6g'
					target='_blank'
				></Link>
			</div>
			<div>
				По общим вопросам:
				<Link href='mailto:hello@playcaliber.com'>
					hello@playcaliber.com
				</Link>
			</div>
			<div>
				Для СМИ:
				<Link href='mailto:pr@playcaliber.com'>
					pr@playcaliber.com
				</Link>
			</div>
		</div>
	);
}
