import "./Offer.scss";
import Hero from "../../components/hero/Hero";
import { Heading } from "../../components/Components";

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Events from "../../components/services/assets/events.jpg";
import Scenario from "../../components/services/assets/scenario.jpg";
import Sport from "../../components/services/assets/sport.jpg";
import Emergency from "../../components/services/assets/emergency.jpg";
import Travel from "../../components/services/assets/travel.jpg";

import OfferHero from "../../assets/hero/offer-hero.png";

function OfferButton({ label, anchor, image }) {
	return (
		<a className='offer-button' href={anchor}>
			<span>{label}</span>
			<img src={image} alt={image} />
		</a>
	);
}

function OfferSection({ id, image, heading }) {
	return (
		<section className='offer-section' id={id}>
			<div className='offer-banner'>
				<Heading
					eyebrow='Lorem ipsum dolor sit amet'
					heading={heading}
					accent={true}
					light={true}
				/>

				<img className='offer-banner-image' src={image} alt={image} />
			</div>
			<div className='offer-contents'>
				<div className='paragraph'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						reiciendis labore, rerum blanditiis dolorum velit at deleniti
						dolores atque in aperiam corrupti iure corporis unde dignissimos qui
						placeat repellat!
					</p>

					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt.
					</p>
				</div>
				<div className='pictures'>
					<div className='picture'></div>
					<div className='picture'></div>
					<div className='picture'></div>
					<div className='picture'></div>
				</div>
				<div className='offer-features'>
					<div className='offer-feature'>
						<div className='icon'></div>
						<div>
							<h4>feature label</h4>
							<p>veritatis et quasi architecto </p>
						</div>
					</div>
					<div className='offer-feature'>
						<div className='icon'></div>
						<div>
							<h4>feature label longer</h4>
							<p>veritatis et quasi architecto </p>
						</div>
					</div>
					<div className='offer-feature'>
						<div className='icon'></div>
						<div>
							<h4>feature label</h4>
							<p>veritatis et quasi architecto </p>
						</div>
					</div>
					<div className='offer-feature'>
						<div className='icon'></div>
						<div>
							<h4>feature label</h4>
							<p>veritatis et quasi architecto </p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Offer() {
	return (
		<div className='content offer'>
			<Hero small={true} image={OfferHero} />
			<div className='sidebar-container'>
				<div className='sidebar'>
					<ul>
						<li>
							<OfferButton
								label='Kreatywne eventy'
								anchor='#kreatywne-eventy'
								image={Events}
							/>
						</li>
						<li>
							<OfferButton
								label='Gry scenariuszowe'
								anchor='#gry-scenariuszowe'
								image={Scenario}
							/>
						</li>
						<li>
							<OfferButton
								label='Szkolenia'
								anchor='#szkolenia'
								image={Emergency}
							/>
						</li>
						<li>
							<OfferButton
								label='Projekty sportowe'
								anchor='#projekty-sportowe'
								image={Sport}
							/>
						</li>
						<li>
							<OfferButton label='Podróże' anchor='#podroze' image={Travel} />
						</li>
					</ul>
				</div>

				<div className='offers'>
					<OfferSection
						id='kreatywne-eventy'
						image={Events}
						heading='Kreatywne eventy'
					/>
					<OfferSection
						id='gry-scenariuszowe'
						image={Scenario}
						heading='Gry scenariuszowe'
					/>
					<OfferSection id='szkolenia' image={Emergency} heading='Szkolenia' />
					<OfferSection
						id='projekty-sportowe'
						image={Sport}
						heading='Projekty sportowe'
					/>
					<OfferSection id='podroze' image={Travel} heading='Podróże' />
				</div>
			</div>
		</div>
	);
}

export default Offer;
