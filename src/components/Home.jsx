import React from 'react';
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
			<Footer />
		</>
	);
}
