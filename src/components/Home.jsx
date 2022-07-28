import React from 'react';
import Footer from './Footer';
import Header from './header';
import Hero from './Hero';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<section id="especialidades"></section>
			<section style={{ height: '100vh' }}>especiadlidaes</section>
			<Footer />
		</>
	);
}
