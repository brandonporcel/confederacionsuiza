import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Automotores from './components/Automotores';
import CicloBasico from './components/CicloBasico';
import Computacion from './components/Computacion';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './components/Home';
import Institucional from './components/Institucional';
import Proyectos from './components/Proyectos';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/institucional" element={<Institucional />} />
				<Route path="/ciclobasico" element={<CicloBasico />} />
				<Route path="/automotores" element={<Automotores />} />
				<Route path="/computacion" element={<Computacion />} />
				<Route path="/proyectos" element={<Proyectos />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
