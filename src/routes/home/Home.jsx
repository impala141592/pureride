import "./Home.scss";
import Hero from "../../components/hero/Hero";
import { Heading, Button, AboutText } from "../../components/Components";

import Logos from "../../components/logos/Logos";
import Services from "../../components/services/Services";
import Features from "../../components/features/Features";
import Testimonials from "../../components/testimonials/Testimonials";

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
	return (
		<div className='home content'>
			<Hero />
			{/* <About /> */}
			<AboutText
				accent={true}
				eyebrow='consequatur distinctio dignissimos corrupti'
				heading='Cumque ratione quis'
				subheading='consequuntur aspernatur minima'
				text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
					repellendus deleniti. Ex, saepe! Magnam, doloremque assumenda
					cupiditate consequatur distinctio dignissimos reprehenderit soluta
					exercitationem, vel explicabo, consequuntur aspernatur minima corrupti
					quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cumque ratione quis eum distinctio adipisci quasi! Nesciunt voluptate
					iusto eaque quos labore recusandae cum quae tenetur dolorum explicabo.
					Repellendus, voluptate aut.'
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
