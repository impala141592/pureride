import "./Components.scss";
import Wave from "../assets/wave.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Heading = ({
	eyebrow,
	heading,
	subheading,
	mainHeading = false,
	accent = false,
	centered: centeredProp = false,
	size,
}) => {
	const [isCentered, setIsCentered] = useState(centeredProp);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 1024) {
				setIsCentered(true);
			} else {
				setIsCentered(centeredProp);
			}
		};

		// initialize
		handleResize();

		// listen to resize
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [centeredProp]);

	const Tag = mainHeading ? "h1" : "h2";
	const Fade = isCentered ? "fade-down" : "fade-right";

	return (
		<div
			className={
				isCentered ? "heading-container centered" : "heading-container"
			}
		>
			{eyebrow && <span className='eyebrow'>{eyebrow}</span>}
			{eyebrow && <img src={Wave} alt='wave' className='wave' />}
			<Tag data-aos={Fade} className={accent ? "accent" : ""}>
				{heading}
			</Tag>
			{subheading && <h4>{subheading}</h4>}
		</div>
	);
};

const AboutText = ({
	eyebrow,
	heading,
	subheading,
	text,
	accent = false,
	button = false,
	buttonText,
	link,
}) => {
	return (
		<section className='contained about'>
			<div className='left'>
				<Heading
					accent={accent}
					eyebrow={eyebrow}
					heading={heading}
					subheading={subheading}
				/>
			</div>
			<div className='right'>
				<p>{text}</p>
				{button && <Button link={true} text={buttonText} action={link} />}
			</div>
		</section>
	);
};

const Button = ({ text, action, link = false }) => {
	return link ? (
		<Link to={action} className='button'>
			{text}
		</Link>
	) : (
		<button onClick={action} className='button'>
			{text}
		</button>
	);
};

export { Heading, AboutText, Button };
