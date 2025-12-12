import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import { AboutText } from "../../components/Components";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const loadPhotos = async () => {
	const files = import.meta.glob("/src/assets/about/*.{jpg,JPG,jpeg,png}", {
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
const About = () => {
	const [photos, setPhotos] = useState([]);
	const [index, setIndex] = useState(-1);

	useEffect(() => {
		loadPhotos().then(setPhotos);
	}, []);
	return (
		<div className='about content'>
			<Hero small={true} />
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
			/>
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
		</div>
	);
};

export default About;
