import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer/Footer';

import Institucional from './components/Institucional';
import PrimerCiclo from './components/Especialidades/PrimerCiclo';
import Automotores from './components/Especialidades/Automotores';
import Computacion from './components/Especialidades/Computacion';
import Archive from './components/Archive';

import Home from './components/Home/Home';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import InformacionUitl from './components/InformacionUitl';
import Error404 from './components/Error404';

import { ProjectsProvider } from './context/ProjectsContext';
import { ContactProvider } from './context/ContactContext';

// PROYECTOS
import FlechaCosmica from './components/Proyectos/FlechaCosmica';
import DesafioEco from './components/Proyectos/DesafioEco';
import Huerta from './components/Proyectos/Huerta';
import RevistaSuiza2008 from './components/Proyectos/RevistaSuiza2008';
import Fll2019 from './components/Proyectos/Fll2019';
import Cansat from './components/Proyectos/Cansat';
import CopaRobotica from './components/Proyectos/CopaRobotica';

function App() {
	return (
		<ContactProvider>
			<ProjectsProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/institucional" element={<Institucional />} />
					<Route path="/primerciclo" element={<PrimerCiclo />} />
					<Route path="/automotores" element={<Automotores />} />
					<Route path="/computacion" element={<Computacion />} />
					<Route path="/proyectos" element={<Proyectos />} />
					<Route path="/archivo" element={<Archive />} />

					<Route path="/contacto" element={<Contacto />} />
					<Route path="/informacionutil" element={<InformacionUitl />} />
					{/* ----*+-*_+_*-++-+-+-+ */}
					{/* PROYECTOS */}
					<Route path="/flechacosmica" element={<FlechaCosmica />} />
					<Route path="/coparobotica2019" element={<CopaRobotica />} />
					<Route path="/desafioeco2003" element={<DesafioEco />} />
					<Route path="/huerta" element={<Huerta />} />
					<Route path="/revistasuiza2008" element={<RevistaSuiza2008 />} />

					<Route path="/ffl2019" element={<Fll2019 />} />
					<Route path="/cansat" element={<Cansat />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</ProjectsProvider>
		</ContactProvider>
	);
}

export default App;
