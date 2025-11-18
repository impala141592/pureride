import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "./styles/_globals.scss";

import TopBar from "./components/topBar/TopBar";
import Hero from "./components/hero/Hero";

function App() {
	return (
		<div className='app'>
			<TopBar />
			<Hero />
			{/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
		</div>
	);
}

export default App;
