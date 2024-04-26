import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { iconSquad } from '../../../../../../public/constnant';
import assault from '../../../../../../public/logotypes/assault.svg';
import medic from '../../../../../../public/logotypes/medic.svg';
import sniper from '../../../../../../public/logotypes/sniper.svg';
import support from '../../../../../../public/logotypes/support.svg';
import { Button } from '../../shared';
import ListSmi from '../../shared/ListSmi/ListSmi.component';

import {
	backSvg,
	flexContainter,
	iconList,
	ulList,
} from './ListOperatives.css';
import { useGetOperativesQuery } from '@/packages/store/api/operativesApi';
import { IListOperatives } from '@/packages/store/src/types/src';

const ListOperatives = () => {
	const { data, isLoading, isError } =
		useGetOperativesQuery({
			per_page: 999,
		});
	console.log(data);

	if (isLoading) {
		return <div>Loading....</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div className={flexContainter}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<div className={iconList}>
					{iconSquad.map<any>((item: any) => (
						<Image
							key={item.icon}
							style={{
								marginRight: '20px',
							}}
							width={20}
							height={20}
							src={item.icon}
							alt='...'
						/>
					))}
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					gap: '150px',
				}}
			>
				<div>
					<Image
						src={assault}
						alt=''
						className={backSvg}
					/>
					<Button
						label='Штурмовики'
						href='/	'
						variant='linkFooter'
					/>
					<ul className={ulList}>
						{data.map(
							(item: IListOperatives) =>
								item.class_id === 1 &&
								item.nickname && (
									<Button
										label={
											item?.nickname
										}
										href='/'
										key={item?.id}
										variant='listOperativesFooter'
									/>
								),
						)}
					</ul>
				</div>
				<div>
					<Image
						src={support}
						alt=''
						className={backSvg}
					/>
					<Button
						label='Поддержки'
						href='/'
						variant='linkFooter'
					/>
					<ul className={ulList}>
						{data.map(
							(item: IListOperatives) =>
								item.class_id === 2 &&
								item.nickname && (
									<Button
										label={
											item?.nickname
										}
										href=''
										key={item?.id}
										variant='listOperativesFooter'
									/>
								),
						)}
					</ul>
				</div>
				<div>
					<Image
						src={medic}
						alt=''
						className={backSvg}
					/>
					<Button
						label='Медики'
						href=''
						variant='linkFooter'
					/>
					<ul className={ulList}>
						{data.map(
							(item: IListOperatives) =>
								item.class_id === 3 &&
								item.nickname && (
									<Button
										label={
											item?.nickname
										}
										href=''
										key={item?.id}
										variant='listOperativesFooter'
									/>
								),
						)}
					</ul>
				</div>
				<div>
					<Image
						src={sniper}
						alt=''
						className={backSvg}
					/>
					<Button
						label='Снайперы'
						href='/'
						variant='linkFooter'
					/>
					<ul className={ulList}>
						{data.map(
							(item: IListOperatives) =>
								item.class_id === 4 &&
								item.nickname && (
									<Button
										label={
											item?.nickname
										}
										href=''
										key={item?.id}
										variant='listOperativesFooter'
									/>
								),
						)}
					</ul>
				</div>
			</div>
			{/* <ListSmi /> */}
		</div>
	);
};

export default ListOperatives;
