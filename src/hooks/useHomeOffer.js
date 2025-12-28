import { useEffect, useState } from "react";

export const useHomeOffer = () => {
	const [offer, setOffer] = useState(null);

	useEffect(() => {
		fetch("https://pureride.pl/wp-json/wp/v2/pages/2")
			.then((res) => res.json())
			.then((data) => {
				const acf = data.acf;

				// Pick only the offer-related fields
				const offerData = {
					offer_eyebrow: acf.offer_eyebrow,
					offer_heading: acf.offer_heading,
					offer_subheading: acf.offer_subheading,
					offer_tiles: [
						acf.offer_tile_1,
						acf.offer_tile_2,
						acf.offer_tile_3,
						acf.offer_tile_4,
						acf.offer_tile_5,
					],
				};

				setOffer(offerData);
			})
			.catch(console.error);
	}, []);

	return offer;
};
