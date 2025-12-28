import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Heading, Button, AboutText } from "../../components/Components";

import Logos from "../../components/logos/Logos";
import Services from "../../components/services/Services";
import Features from "../../components/features/Features";
import Testimonials from "../../components/testimonials/Testimonials";

import { useHomeAbout } from "../../hooks/useHomeAbout";
import { useHomeHero } from "../../hooks/useHomeHero";
import { useHomeOffer } from "../../hooks/useHomeOffer";

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
				{/* <img src={Events} alt='' /> */}
				<Testimonials />
			</div>
		</div>
	);
};

const Home = () => {
	const about = useHomeAbout();
	const hero = useHomeHero();
	const offer = useHomeOffer();
	if (!about) return null;
	if (!hero) return null;
	if (!offer) return null;
	console.log(offer);
	return (
		<div className='home content'>
			<Hero image={hero} />
			{/* <About /> */}
			<AboutText
				accent={true}
				eyebrow={about.about_eyebrow}
				heading={about.about_heading}
				subheading={about.about_subheading}
				text={about.about_text}
				button={true}
				buttonText={about.about_button_label}
				link={about.about_button_url}
			/>
			<Services />
			<Mission />
			<Features />
			<Logos />
		</div>
	);
};

export default Home;
