import React from 'react';
import Banner from '../Banner';

import EspecialidadDescripcion from '../TitleDescriptionVideo';
import SubTitleAndDescription from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
import styled from 'styled-components';
import ImgGallery from '../ImgGallery';
const computacionMaterias = [
	{
		ano: '3',
		programas:
			'https://drive.google.com/drive/folders/1eof7ydGeFfb9SY3fGV8TucyZKgBuAcf_?usp=sharing',
		materias: [
			'Lengua y Literatura',
			'ed. física',
			'inglés',
			'física',
			'matemática',
			'química',
			'educación ciudadana',
			'geografía',
			'historia',
			'tecnología de la representación',
			'taller',
		],
	},
	{
		ano: '4',
		programas:
			'https://drive.google.com/drive/folders/1KZHLS9IV1tMO7z41CUJG13QDYL1ThCNd?usp=sharing',
		materias: [
			'Lengua y Literatura',
			'ed. física',
			'inglés',
			'física',
			'matemática',
			'laboratorio y algoritmos',
			'lógica computacional',
			'organización de las computadoras',
			'lab. algoritmos y estruct. de datos',
			'laboratorio de POO',
			'proyecto 1',
		],
	},
	{
		ano: '5',
		programas:
			'https://drive.google.com/drive/folders/1lqBdIrBKpm61d6urCZtkWyyjK3DeCPDS?usp=sharing',
		materias: [
			'Adm. Y gestion de base de datos',
			'ed. física',
			'inglés',
			'Análisis de sistemas',
			'economía y gestion de org.',
			'programación de redes',
			'Lengua y Literatura',
			'laboratorio de POO 2',
			'proyecto 2',
		],
	},
	{
		ano: '6',
		programas:
			'https://drive.google.com/drive/folders/1e1SiPkaoAuJve9Y6nKKY68D3tXL6OkzE?usp=sharing',
		materias: [
			'prog. de redes',
			'ed. física',
			'inglés',
			'ciencia y tecnología',
			'admin. sistemas de redes',
			'gestión proc. productivos',
			'desarollo de sistemas',
			'prácticas profesionalizantes',
		],
	},
];
const computacionAlcances = [
	{
		id: 9,
		alcance:
			'Proyectar, producir, adaptar, implantar y mantener aplicaciones informáticas.',
	},
	{
		id: 10,
		alcance:
			'Proyectar, instalar, configurar y mantener sistemas informáticos.',
	},
	{
		id: 11,
		alcance:
			'Realizar la documentación técnica y la de los usuarios de acuerdo con los requerimientos funcionales y técnicos de las aplicaciones y sistemas.',
	},
	{
		id: 12,
		alcance:
			'Asistir y asesorar a los usuarios para la elección, adquisición, instalación y personalización de aplicaciones de equipos y sistemas.',
	},
];
const computacionGalleryImg = [
	{
		id: 0,
		title: 'lona robotica lego',
		url: './images/computacion/lona-lego-robotica.jpg',
	},
	{
		id: 1,
		title: 'impresora 3d',
		url: './images/computacion/impresora.JPG',
	},
	{
		id: 2,
		title: 'compus!',
		url: './images/compus.JPG',
	},
];
const Alcance = styled.ul`
	list-style: initial;
	margin-left: 20px;
	margin-top: 10px;
	li {
		color: var(--gray-third);
	}
`;
const GalleryComputacionContainer = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 20px;
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		width: 100%;
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		width: 80%;
	}

	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		width: 70%;
	}
`;
export default function Computacion() {
	return (
		<div className="specialtyCtn">
			<Banner img="./images/computacion/banner.JPG" />
			<EspecialidadDescripcion
				especialidad="Computación"
				video="https://www.youtube.com/embed/aoPRIi7rsjg"
			>
				<p>
					Durante los últimos años, el nivel de empleo de la industria de
					Tecnología de la Información creció a un ritmo vertiginoso superando a
					muchos otros sectores.El sector de Desarrollo de Software en Argentina
					ha triplicado su empleo en los últimos años y ha sido definido, entre
					todas las áreas de la economía, como el que mayor número de nuevas
					empresas crea, el que genera la mayor cantidad de trabajo de calidad y
					uno de los más dinámicos de nuestro país.
				</p>
				<br />
				<p>
					Los alumnos estudiaran los principios fundamentales de las redes,
					computadoras, algoritmos, robotica y la programacion en las materias
					teoricas y en los distintos talleres y{' '}
					<a
						className="linktoa"
						href="https://laboratorios.et26.edu.ar/"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						laboratorios{' '}
					</a>{' '}
					profundizando más cada año. Los estudiantes serán puestos a prueba en
					todos los años con la propuesta de realizar proyectos individuales y
					grupales con el fin de poner en practicas todos los conocimientos
					adquiridos.
				</p>
				<br />
				<p>
					En 6to año se abre la posibilidad de que empresas a traves de
					pasantias preparen a los alumnos para el mundo real del trabajo.
				</p>
			</EspecialidadDescripcion>
			<SubTitleAndDescription title="Alcance de titulo">
				<p>El Técnico en Computación de Nivel Secundario será capaz de:</p>
				<Alcance>
					{computacionAlcances.map(({ alcance, id }) => (
						<li key={id}>{alcance}</li>
					))}
				</Alcance>
			</SubTitleAndDescription>
			<SubTitleAndDescription title="Programas Curriculares">
				<ProgramasTablas materias={computacionMaterias} />
			</SubTitleAndDescription>
			<GalleryComputacionContainer>
				<ImgGallery galleryImages={computacionGalleryImg} />
			</GalleryComputacionContainer>
		</div>
	);
}
