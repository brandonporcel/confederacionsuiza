import React from 'react';
import ConoceLaSuiza from './ConoceLaSuiza';
import Especialidades from './Especialidades';
import Hero from './Hero';
import Novedades from './Novedades';
import ProyectosSection from './ProyectosSection';

export default function Home() {
	return (
		<>
			<Hero />
			<Novedades />
			<Especialidades />
			<ProyectosSection />
			<ConoceLaSuiza />
		</>
	);
}
