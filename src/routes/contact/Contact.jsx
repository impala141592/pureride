import "./Contact.scss";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Hero from "../../components/hero/Hero";
import { useEffect } from "react";
import Wave from "../../assets/wave.svg";
import ContactHero from "../../assets/hero/contact-hero.png";

function Contact() {
	useEffect(() => {
		const map = L.map("map").setView(
			[52.212182292727455, 21.165269630685533],
			12
		);

		L.tileLayer(
			"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
			{ attribution: "© OpenStreetMap © CARTO" }
		).addTo(map);

		L.marker([52.212182292727455, 21.165269630685533]).addTo(map);

		return () => map.remove();
	}, []);

	return (
		<div className='content contact'>
			<Hero small={true} image={ContactHero} />
			<section className='contained map-info'>
				<div className='map-container'>
					<div className='map' id='map'></div>
				</div>
				<div className='info-container'>
					<div className='copy'>
						<h4>Skontaktuj się z nami</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
							quod doloribus laudantium.
						</p>
						<img className='wave' src={Wave} alt='' />
					</div>

					<div className='info'>
						<h4>PureRide sp. z o. o.</h4>
						<div className='address'>
							<span>Rzeźbiarska 20</span>
							<span>04-637 Warszawa</span>
						</div>
						<div className='icon-contact'>
							<div className='icon'></div>
							<span>555 333 999</span>
						</div>

						<div className='icon-contact'>
							<div className='icon'></div>
							<span>kontakt@pureride.pl</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
