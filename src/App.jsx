import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./styles/_globals.scss";

import TopBar from "./components/topBar/TopBar";

import Home from "./routes/home/Home";

AOS.init();

function App() {
	return (
		<div className='app'>
			<TopBar />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/about' element={<About />} /> */}
				{/* <Route path='/services' element={<Services />} /> */}
				{/* <Route path='/portfolio' element={<Portfolio />} /> */}
				{/* <Route path='/contact' element={<Contact />} /> */}
			</Routes>
		</div>
	);
}

export default App;
