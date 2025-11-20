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
			<Link to='/'>
				<div className='logo'>
					<span className='pure'>pure</span>
					<span>ride</span>
				</div>
			</Link>
			<Navigation />
		</div>
	);
};

export default TopBar;
