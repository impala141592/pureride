import "./Hero.scss";

const Hero = ({ image, small = false }) => {
	return (
		<div className={small ? "hero small" : "hero"}>
			<div
				className='hero-bg'
				style={{
					backgroundImage: `url(${image})`,
				}}
			></div>
		</div>
	);
};

export default Hero;
