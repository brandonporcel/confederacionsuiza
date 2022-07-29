import React from 'react';
import ConoceLaSuiza from './ConoceLaSuiza';
import Especialidades from './Especialidades';
import Footer from './Footer';
import Header from './header';
import Hero from './Hero';
import Novedades from './Novedades';
import Proyectos from './Proyectos';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Novedades />
			<Especialidades />
			<Proyectos />
			<ConoceLaSuiza />
			<Footer />
		</>
	);
}
