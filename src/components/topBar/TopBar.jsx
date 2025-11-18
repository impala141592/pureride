import "./TopBar.scss";
import { Link } from "react-router-dom";

const navigationItems = [
	{ text: "historia", to: "/historia" },
	{ text: "realizacje", to: "/realizacje" },
	{ text: "oferta", to: "/oferta" },
	{ text: "kontakt", to: "/kontakt" },
];

const Navigation = ({}) => {
	return (
		<nav>
			<ul className='navigation'>
				{navigationItems.map((item, index) => (
					<li key={index}>
						<span className='pure'>pure</span>
						<Link to={item.to}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

const TopBar = ({}) => {
	return (
		<div className='top-bar-container'>
			<div className='logo'>
				<span className='pure'>pure</span>
				<span>ride</span>
			</div>
			<Navigation />
		</div>
	);
};

export default TopBar;
