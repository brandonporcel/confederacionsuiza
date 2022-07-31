import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CicloBasico from './components/Especialidades/CicloBasico';
import Automotores from './components/Especialidades/Automotores';
import Computacion from './components/Especialidades/Computacion';
import Footer from './components/Footer/Footer';
import Header from './components/header';
import Home from './components/Home/Home';
import Institucional from './components/Institucional';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';

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
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
