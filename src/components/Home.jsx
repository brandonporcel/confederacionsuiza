import React from 'react';
import ConoceLaSuiza from './ConoceLaSuiza';
import Especialidades from './Especialidades';
import Footer from './Footer';
import Header from './header';
import Hero from './Hero';
import Proyectos from './Proyectos';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Especialidades />
			<Proyectos />
			<ConoceLaSuiza />
			<Footer />
		</>
	);
}
