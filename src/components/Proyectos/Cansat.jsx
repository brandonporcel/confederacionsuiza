import React from 'react';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';

export default function Cansat() {
	return (
		<ProjectContainer
			title="Cansat argentina 2022"
			mainImg="./images/proyectos/cansat/cansat.jpg"
			when="2022"
			specialty="c"
		>
			<SubTitleAndDescription
				title="Descripción"
				w="100"
				specialClass="subtitleClassProject"
			>
				<p>
					CANSAT propone a estudiantes construir una carga útil, cuyo tamaño no
					supere al de una lata de gaseosa, (can = lata en inglés) y lanzarla en
					un cohete hasta una altitud aproximada de un kilómetro.
				</p>
			</SubTitleAndDescription>
			<SubTitleAndDescription
				title="¿Quiénes participan del proyecto?"
				w="100"
				specialClass="subtitleClassProject"
			>
				<ul className="ulLsit">
					<li>Patricio Zarate</li>
					<li>Manuel Materano</li>
					<li>Daniel Espinoza</li>
					<li>Lautaro Quintana</li>
					<li>Ariel Lucero</li>
					<li>Cristopher Abuhadba</li>
				</ul>
			</SubTitleAndDescription>
			<div className="centerEmbedCode">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Qoqma6Q79A4"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					loading="lazy"
				></iframe>
			</div>
		</ProjectContainer>
	);
}
