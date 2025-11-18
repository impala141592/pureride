import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Heading, Button } from "../../components/Components";

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
	return (
		<div className='services'>
			<div className='service'></div>
			<div className='service'></div>
			<div className='service'></div>
			<div className='service'></div>
			<div className='service'></div>
		</div>
	);
};

const Home = () => {
	return (
		<div className='home'>
			<Hero />
			<About />
			<Services />
		</div>
	);
};

export default Home;
