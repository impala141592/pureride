import "./Services.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";

import { Heading, Button } from "../../components/Components";

import Events from "./assets/events.jpg";
import Scenario from "./assets/scenario.jpg";
import Sport from "./assets/sport.jpg";
import Emergency from "./assets/emergency.jpg";
import Travel from "./assets/travel.jpg";
import Wave from "../../assets/wave.svg";

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Kreatywne eventy",
			subtitle: "Lorem ipsum produkcje",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Events,
			url: "/oferta#kreatywne-eventy",
		},
		{
			id: 2,
			title: "Gry scenariuszowe",
			subtitle: "immersyjne doświadczenia",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Scenario,
			url: "/oferta#gry-scenariuszowe",
		},
		{
			id: 3,
			title: "Szkolenia",
			subtitle: "doswiadczenia ratownicze",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Emergency,
			url: "/oferta#szkolenia",
		},
		{
			id: 4,
			title: "Projekty sportowe",
			subtitle: "Lorem outdoorowe",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Sport,
			url: "/oferta#projekty-sportowe",
		},
		{
			id: 5,
			title: "Podróże",
			subtitle: "eventy zagraniczne",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Travel,
			url: "/oferta#podroze",
		},
	];
	return (
		<section className='contained services'>
			<Heading
				centered={true}
				eyebrow='consequatur distinctio dignissimos corrupti'
				heading='Co robimy?'
				subheading='consequuntur aspernatur minima'
			/>

			<Swiper
				className='services-swiper'
				modules={[Scrollbar, Navigation]}
				scrollbar={{ draggable: true }}
				navigation
				spaceBetween={24}
				slidesPerView={3.5}
				breakpoints={{
					0: { slidesPerView: 1.2 },
					480: { slidesPerView: 1.6 },
					768: { slidesPerView: 2.3 },
					1024: { slidesPerView: 3.2 },
				}}
			>
				{services.map((item, i) => (
					<SwiperSlide key={i}>
						<div
							className='service-card'
							data-aos='fade-up'
							data-aos-delay={item.id * 100}
						>
							<div className='copy'>
								<div className='heading'>
									<h4>{item.title}</h4>
									<p className='caption'>{item.subtitle}</p>
								</div>
								<img src={Wave} alt='wave' className='wave' />

								<p className='text'>{item.text}</p>
								<Button link={true} text='learn more' action={item.url} />
							</div>
							<img
								src={item.image}
								alt={item.title}
								className='service-image'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Services;
