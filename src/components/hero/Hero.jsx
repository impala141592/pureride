import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // basic styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import WaveCut from "../../assets/wave-cut.svg";
import HeroImage from "./bg.png";

import "./Hero.scss";

const Hero = ({ image, small = false }) => {
	return (
		<div className={small ? "hero small" : "hero"}>
			{/* <div className='hero-copy'>
				<h1 data-aos='fade-up'>Gotowi na coś więcej?</h1>
			</div> */}
			{/* <img src={WaveCut} alt='wave-cut' className='wave-cut' /> */}
			{/* <div className='hero-ewa'></div> */}
			{/* <img src='./ewa.png' alt='ewa' className='hero-ewa' /> */}
			<div className='hero-bg'>
				<img src={image} alt='' />
			</div>
		</div>
	);
};

export default Hero;
