import SwiperCore, {
	Navigation,
	Pagination,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

// Установка модулей Swiper
SwiperCore.use([Navigation, Pagination]);

export default function MySwiper() {
	return (
		<Swiper
			navigation
			pagination={{ clickable: true }}
			className='mySwiper'
			modules={Navigation}
		>
			<SwiperSlide>Slide 1</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
			{/* Добавьте свои слайды здесь */}
		</Swiper>
	);
}
