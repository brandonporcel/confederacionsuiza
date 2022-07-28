import React from 'react';
import Especialidades from './Especialidades';
import Footer from './Footer';
import Header from './header';
import Hero from './Hero';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Especialidades />
			<section style={{ height: '100vh' }}>Proyectos</section>
			<Footer />
		</>
	);
}
