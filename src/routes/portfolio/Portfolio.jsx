import "./Portfolio.scss";
import { useState, useEffect } from "react";

import { Heading } from "../../components/Components";
import Hero from "../../components/hero/Hero";
import Logos from "../../components/logos/Logos";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const loadPhotos = async () => {
	const files = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png}", {
		eager: true,
		import: "default",
	});

	const photos = [];

	for (const path in files) {
		const src = files[path];

		const img = new Image();
		img.src = src;

		await new Promise((res) => {
			img.onload = res;
			img.onerror = res;
		});

		photos.push({
			src,
			width: img.naturalWidth,
			height: img.naturalHeight,
			alt: path
				.split("/")
				.pop()
				.replace(/\.(jpg|JPG|png|jpeg)$/i, ""),
		});
	}

	return photos;
};

export function Portfolio() {
	const [photos, setPhotos] = useState([]);
	const [index, setIndex] = useState(-1);

	useEffect(() => {
		loadPhotos().then(setPhotos);
	}, []);

	return (
		<div className='portfolio content'>
			<Hero small={true} />
			<section className='contained'>
				<Heading
					eyebrow='Lorem ipsum dolor sit amet'
					heading='Lorem ipsum'
					centered={true}
				/>
			</section>

			<section className='gallery contained'>
				<MasonryPhotoAlbum
					layout='masonry'
					spacing={12}
					photos={photos}
					onClick={({ index }) => setIndex(index)}
				/>

				<Lightbox
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
					slides={photos}
				/>
			</section>
			<Logos />
		</div>
	);
}

export default Portfolio;
