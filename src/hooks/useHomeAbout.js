import { useEffect, useState } from "react";

export const useHomeAbout = () => {
	const [about, setAbout] = useState(null);

	useEffect(() => {
		fetch("https://pureride.pl/wp-json/wp/v2/pages/2")
			.then((res) => res.json())
			.then((data) => setAbout(data.acf))
			.catch(console.error);
	}, []);

	return about;
};
