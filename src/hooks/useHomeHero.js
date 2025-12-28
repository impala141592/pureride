import { useState, useEffect } from "react";

export const useHomeHero = () => {
	const [hero, setHero] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const pageRes = await fetch(
					"https://pureride.pl/wp-json/wp/v2/pages/2"
				);
				const pageData = await pageRes.json();
				const acf = pageData.acf;

				if (acf.homepage_hero) {
					const imgRes = await fetch(
						`https://pureride.pl/wp-json/wp/v2/media/${acf.homepage_hero}`
					);
					const imgData = await imgRes.json();
					acf.homepage_hero_url = imgData.source_url; // now you have URL
				}

				setHero(acf.homepage_hero_url);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return hero;
};
