import "./Logos.scss";
import React, { useRef, useEffect, useState } from "react";

import Logo1 from "./logo-1.png";
import Logo2 from "./logo-2.png";
import Logo3 from "./logo-3.png";
import Logo4 from "./logo-4.png";
import Logo5 from "./logo-5.png";
import Logo6 from "./logo-6.png";
import Logo7 from "./logo-7.png";

const logosData = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const Logos = () => {
	const [logos, setLogos] = useState(logosData);
	const tickerRef = useRef(null);
	const offset = useRef(0);

	const speed = 0.5;

	useEffect(() => {
		let animationFrame;

		const animate = () => {
			if (!tickerRef.current) return;

			offset.current += speed;

			const firstLogo = tickerRef.current.children[0];
			if (firstLogo) {
				const firstWidth = firstLogo.offsetWidth + 120;
				if (offset.current >= firstWidth) {
					setLogos((prev) => [...prev.slice(1), prev[0]]);
					offset.current -= firstWidth;
				}
			}

			tickerRef.current.style.transform = `translateX(-${offset.current}px)`;
			animationFrame = requestAnimationFrame(animate);
		};

		animationFrame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrame);
	}, []);

	return (
		<div className='infinite-logos-container'>
			<div className='infinite-logos-ticker' ref={tickerRef}>
				{logos.map((logo, i) => (
					<div className='logo-item' key={i}>
						<img src={logo} alt={`Client logo ${i + 1}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Logos;
