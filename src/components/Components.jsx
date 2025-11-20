import "./Components.scss";
import Wave from "../assets/wave.svg";
import { Link } from "react-router-dom";

const Heading = ({
	eyebrow,
	heading,
	subheading,
	mainHeading = false,
	accent = false,
	centered = false,
}) => {
	const Tag = mainHeading ? "h1" : "h2";
	const Fade = centered ? "fade-down" : "fade-right";
	return (
		<div
			className={centered ? "heading-container centered" : "heading-container"}
		>
			{eyebrow && <span className='eyebrow'>{eyebrow}</span>}
			<img src={Wave} alt='wave' className='wave' />
			<Tag data-aos={Fade} className={accent ? "accent" : ""}>
				{heading}
			</Tag>
			{subheading && <h4>{subheading}</h4>}
		</div>
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

export { Heading, Button };
