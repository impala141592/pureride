import "./Features.scss";
import { Heading } from "../../components/Components";

import Production from "./assets/production.webp";
import Inventory from "./assets/inventory.webp";
import Ideas from "./assets/ideas.webp";

const Features = () => {
	const features = [
		{
			id: 1,
			title: "Kompleksowa produkcja",
			subtitle: "od idei po realizację",
			pointers: [
				"distinctio dignissimos corrupti",
				"consequuntur aspernatur minima",
				"dolor dignissimos aspernatur",
			],
			image: Production,
		},
		{
			id: 2,
			title: "Własne zaplecze",
			subtitle: "scenograficzne i techniczne",
			pointers: [
				"aspernatur minima",
				"distinctio dignissimos aspernatur",
				"laudantium excepturi alias veniam",
			],
			image: Inventory,
		},
		{
			id: 3,
			title: "Autorskie pomysły",
			subtitle: "gry i formaty immersyjne",
			pointers: [
				"distinctio dignissimos aspernatur",
				"voluptatem accusamus",
				"aperiam, ex sed",
			],
			image: Ideas,
		},
	];
	return (
		<div className='features contained'>
			<Heading
				centered={true}
				eyebrow='consequatur distinctio dignissimos corrupti'
				heading='Lorem lorem'
				subheading='consequuntur aspernatur minima'
			/>
			<div className='features-container'>
				{features.map((item, id) => (
					<div className='feature' key={id}>
						<img src={item.image} alt='' />
						<div className='title'>
							<h4>{item.title}</h4>
							<p className='caption'>{item.subtitle}</p>
						</div>
						{/* <p className='caption'>to oznacza:</p> */}
						<ul>
							{item.pointers.map((pointer, id) => (
								<li key={id}>{pointer}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
