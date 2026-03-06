import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Heading, Button, AboutText } from "../../components/Components";

import Logos from "../../components/logos/Logos";
import Services from "../../components/services/Services";
import Features from "../../components/features/Features";
import Testimonials from "../../components/testimonials/Testimonials";
import HeroImage from "../../assets/hero/home-hero.jpg";

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
				<Testimonials />
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className='home content'>
			<Hero image={HeroImage} />
			<AboutText
				accent={true}
				eyebrow='eyebrow'
				heading='heading'
				subheading='subheading'
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nihil deleniti? Quasi inventore non reprehenderit quia sunt, corporis repudiandae voluptatem accusamus ducimus magni atque ipsam asperiores, sit sapiente, vero tempora.'
				button={true}
				buttonText='czytaj więcej'
				link='/historia'
			/>
			<Services />
			<Mission />
			<Features />
			<Logos />
		</div>
	);
};

export default Home;
