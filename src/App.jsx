import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./styles/_globals.scss";

import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";

import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Portfolio from "./routes/portfolio/Portfolio";
import Offer from "./routes/offer/Offer";
import Contact from "./routes/contact/Contact";

AOS.init();

function App() {
	return (
		<div className='app'>
			<TopBar />
			{/* <div className='content'> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/historia' element={<About />} />
				<Route path='/oferta' element={<Offer />} />
				<Route path='/realizacje' element={<Portfolio />} />
				<Route path='/kontakt' element={<Contact />} />
			</Routes>
			{/* </div> */}
			<Footer />
		</div>
	);
}

export default App;
