import "./Testimonials.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Avatar from "../../assets/icons/avatar.webp";
import Janet from "./assets/janet.jpg";
import Gary from "./assets/gary.jpg";

const Testimonials = () => {
	const testimonials = [
		{
			avatar: Janet,
			author: "Janet Jackson",
			company: "Jackson's 5",
			quote:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil deleniti? Quasi inventore non reprehenderit quia sunt, corporis repudiandae voluptatem ",
		},
		{
			avatar: Gary,
			author: "Gary Oldman",
			company: "Milka",
			quote:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil deleniti? Quasi inventore non reprehenderit quia sunt, corporis repudiandae voluptatem ",
		},
		{
			avatar: null,
			author: "Charles Darwin",
			company: "Galapagos inc.",
			quote:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil deleniti? Quasi inventore non reprehenderit quia sunt, corporis repudiandae voluptatem. Ex, saepe! Magnam, doloremque assumenda. ",
		},
		{
			avatar: null,
			author: "Felix Staples",
			company: "Anonymous",
			quote:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil deleniti?",
		},
	];
	return (
		<div className='testimonials'>
			<Swiper
				className='testimonials-swiper'
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{ delay: 8000, disableOnInteraction: false }}
				navigation
				spaceBetween={24}
				pagination={{ clickable: true }}
				loop={true}
			>
				{testimonials.map((item, index) => (
					<SwiperSlide className='ttt' key={index}>
						<div className='testimonial'>
							<div className='avatar'>
								{item.avatar ? (
									<img className='pic' src={item.avatar} alt={item.author} />
								) : (
									<img
										className='placeholder'
										src={Avatar}
										alt='placeholder avatar'
									/>
								)}
							</div>
							<div className='content'>
								<div className='person'>
									<span className='author'>{item.author}</span>
									<span className='company'>{item.company}</span>
								</div>
								<p className='quote'>“{item.quote}”</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonials;
