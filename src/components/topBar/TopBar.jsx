import "./TopBar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Wave from "../../assets/wave.svg";

import { useState } from "react";

const navigationItems = [
	{ text: "historia", to: "/historia" },
	{ text: "realizacje", to: "/realizacje" },
	{ text: "oferta", to: "/oferta" },
	{ text: "kontakt", to: "/kontakt" },
];

const Navigation = ({}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav>
			<ul className='desktop-nav'>
				{navigationItems.map((item, index) => (
					<li key={index}>
						<Link to={item.to}>{item.text}</Link>
					</li>
				))}
			</ul>
			<div className='mobile-nav'>
				<button
					className={isOpen ? "burger open" : "burger"}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</button>
				<ul className={isOpen ? "open" : ""}>
					{navigationItems.map((item, index) => (
						<li key={index}>
							<Link onClick={() => setIsOpen(false)} to={item.to}>
								{item.text}
							</Link>
							<img className='wave' src={Wave} alt='' />
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

const TopBar = ({}) => {
	return (
		<div className='top-bar-container'>
			<Link to='/'>
				<div className='logo'>
					<img src={Logo} alt='pure ride logo' />
				</div>
			</Link>
			<Navigation />
		</div>
	);
};

export default TopBar;
