import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Heading, Button } from "../../components/Components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";
import Logos from "../../components/logos/Logos";

import Wave from "../../assets/wave.svg";
import Events from "./assets/events.jpg";
import Scenario from "./assets/scenario.jpg";
import Sport from "./assets/sport.jpg";
import Emergency from "./assets/emergency.jpg";
import Travel from "./assets/travel.jpg";

import Production from "./assets/production.webp";
import Inventory from "./assets/inventory.webp";
import Ideas from "./assets/ideas.webp";

const About = () => {
	return (
		<section className='contained about'>
			<div className='left'>
				<Heading
					accent={true}
					eyebrow='consequatur distinctio dignissimos corrupti'
					heading='Cumque ratione quis'
					subheading='consequuntur aspernatur minima'
				/>
			</div>
			<div className='right'>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					repellendus deleniti. Ex, saepe! Magnam, doloremque assumenda
					cupiditate consequatur distinctio dignissimos reprehenderit soluta
					exercitationem, vel explicabo, consequuntur aspernatur minima corrupti
					quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cumque ratione quis eum distinctio adipisci quasi! Nesciunt voluptate
					iusto eaque quos labore recusandae cum quae tenetur dolorum explicabo.
					Repellendus, voluptate aut.
				</p>
				<Button link={true} text='learn more' action='/' />
			</div>
		</section>
	);
};

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Kreatywne eventy",
			subtitle: "Lorem ipsum produkcje",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Events,
		},
		{
			id: 2,
			title: "Gry scenariuszowe",
			subtitle: "immersyjne doświadczenia",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Scenario,
		},
		{
			id: 3,
			title: "Szkolenia",
			subtitle: "doswiadczenia ratownicze",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Emergency,
		},
		{
			id: 4,
			title: "Projekty sportowe",
			subtitle: "Lorem outdoorowe",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Sport,
		},
		{
			id: 5,
			title: "Podróże",
			subtitle: "eventy zagraniczne",
			text: "Ex, saepe! Magnam, doloremque assumenda cupiditate consequatur distinctio dignissimos.",
			image: Travel,
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
								<Button link={true} text='learn more' action='/' />
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

const Mission = () => {
	return (
		<div className='mission contained'>
			<div className='left'>
				<Heading
					accent={true}
					eyebrow='consequatur distinctio dignissimos corrupti'
					heading='Cumque ratione quis'
					subheading='consequuntur aspernatur minima'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
					nihil deleniti? Quasi inventore non reprehenderit quia sunt, corporis
					repudiandae voluptatem accusamus ducimus magni atque ipsam asperiores,
					sit sapiente, vero tempora.
				</p>
				<p>
					Consectetur vitae, aliquid facere aut praesentium natus sequi magni
					quis quo laudantium excepturi alias veniam? Aperiam, ex sed. Libero,
					provident.
				</p>
			</div>
			<div className='right'>
				<img src={Events} alt='' />
			</div>
		</div>
	);
};

const Features = () => {
	const features = [
		{
			id: 1,
			title: "Kompleksowa produkcja",
			subtitle: "od idei po realizację",
			pointers: [
				"distinctio dignissimos corrupti",
				"consequuntur aspernatur minima",
				"dolor dignissimos aspernatur",
			],
			image: Production,
		},
		{
			id: 2,
			title: "Własne zaplecze",
			subtitle: "scenograficzne i techniczne",
			pointers: [
				"aspernatur minima",
				"distinctio dignissimos aspernatur",
				"laudantium excepturi alias veniam",
			],
			image: Inventory,
		},
		{
			id: 3,
			title: "Autorskie pomysły",
			subtitle: "gry i formaty immersyjne",
			pointers: [
				"distinctio dignissimos aspernatur",
				"voluptatem accusamus",
				"aperiam, ex sed",
			],
			image: Ideas,
		},
	];
	return (
		<div className='features contained'>
			<Heading
				centered={true}
				eyebrow='consequatur distinctio dignissimos corrupti'
				heading='Lorem lorem'
				subheading='consequuntur aspernatur minima'
			/>
			<div className='features-container'>
				{features.map((item, id) => (
					<div className='feature' id={id}>
						<img src={item.image} alt='' />
						<div className='title'>
							<h4>{item.title}</h4>
							<p className='caption'>{item.subtitle}</p>
						</div>
						{/* <p className='caption'>to oznacza:</p> */}
						<ul>
							{item.pointers.map((pointer, id) => (
								<li id={id}>{pointer}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className='home'>
			<Hero />
			<About />
			<Services />
			<Mission />
			<Features />
			<Logos />
		</div>
	);
};

export default Home;
