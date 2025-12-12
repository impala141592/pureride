import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./styles/_globals.scss";

import TopBar from "./components/topBar/TopBar";
import Footer from "./components/footer/Footer";

import Home from "./routes/home/Home";
import Portfolio from "./routes/portfolio/Portfolio";

AOS.init();

function App() {
	return (
		<div className='app'>
			<TopBar />
			{/* <div className='content'> */}
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/about' element={<About />} /> */}
				{/* <Route path='/services' element={<Services />} /> */}
				<Route path='/realizacje' element={<Portfolio />} />
				{/* <Route path='/contact' element={<Contact />} /> */}
			</Routes>
			{/* </div> */}
			<Footer />
		</div>
	);
}

export default App;
