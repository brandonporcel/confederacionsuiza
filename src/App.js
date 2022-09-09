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
import InformacionUitl from './components/InformacionUitl';
import { ProjectsProvider } from './context/ProjectsContext';
import { ContactProvider } from './context/ContactContext';
// -----_____***}}´{{{{{{{{}}}}}}}}
// ´PROYECTOSSSS
import FlechaCosmica from './components/Proyectos/FlechaCosmica';
import DesafioEco from './components/Proyectos/DesafioEco';
import Huerta from './components/Proyectos/Huerta';
import MicroMinecraft from './components/Proyectos/MicroMinecraft';
import RevistaSuiza2008 from './components/Proyectos/RevistaSuiza2008';
import LoQueNoTeDicenDelAmor from './components/Proyectos/LoQueNoTeDicenDelAmor';
import Fll2019 from './components/Proyectos/Fll2019';
import Cansat from './components/Proyectos/Cansat';
import CopaRobotica from './components/Proyectos/CopaRobotica';

function App() {
	return (
		<>
			<ContactProvider>
				<ProjectsProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/institucional" element={<Institucional />} />
						<Route path="/ciclobasico" element={<CicloBasico />} />
						<Route path="/automotores" element={<Automotores />} />
						<Route path="/computacion" element={<Computacion />} />
						<Route path="/proyectos" element={<Proyectos />} />

						<Route path="/contacto" element={<Contacto />} />
						<Route path="/informacionutil" element={<InformacionUitl />} />
						{/* ----*+-*_+_*-++-+-+-+ */}
						{/* PROYECTOS */}
						<Route path="/flechacosmica" element={<FlechaCosmica />} />
						<Route path="/coparobotica" element={<CopaRobotica />} />
						<Route path="/desafioeco" element={<DesafioEco />} />
						<Route path="/huerta" element={<Huerta />} />
						<Route path="/minecraftmicro" element={<MicroMinecraft />} />
						<Route path="/revistasuiza2008" element={<RevistaSuiza2008 />} />
						<Route
							path="/loquenotedicendelamor"
							element={<LoQueNoTeDicenDelAmor />}
						/>
						<Route path="/ffl2019" element={<Fll2019 />} />
						<Route path="/cansat" element={<Cansat />} />
					</Routes>
					<Footer />
				</ProjectsProvider>
			</ContactProvider>
		</>
	);
}

export default App;
