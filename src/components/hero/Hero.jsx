import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./Hero.scss";

const HeroS = () => {
	const slides = [
		{
			id: 1,
			title: "Slide 1",
			image:
				"https://images.unsplash.com/photo-1763037152119-f86924827076?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Slide 2",
			image:
				"https://images.unsplash.com/photo-1763046289892-857b83dc070f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Slide 3",
			image:
				"https://images.unsplash.com/photo-1762715461119-cbd8d82a0aee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			loop={true}
		>
			{slides.map((slide) => (
				<SwiperSlide key={slide.id}>
					<div
						className='hero-slide'
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						{/* <div className='slide-copy'>
							<h1>{slide.title}</h1>
						</div> */}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-copy'>
				<h1>Gotowi na coś więcej?</h1>
			</div>
			<div className='hero-image'></div>
		</div>
	);
};

export default Hero;
