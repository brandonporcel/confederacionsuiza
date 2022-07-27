import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Institucional from './components/Institucional';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/institucional" element={<Institucional />} />
			</Routes>
		</>
	);
}

export default App;
