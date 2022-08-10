import React from 'react';
import Banner from '../Banner';

import EspecialidadDescripcion from '../TitleDescriptionVideo';
import SubTitleAndDescription from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
import styled from 'styled-components';
const computacionMaterias = [
	{
		ano: '3',
		programas:
			'https://drive.google.com/drive/folders/1eof7ydGeFfb9SY3fGV8TucyZKgBuAcf_?usp=sharing',
		materias: [
			'Lyl Computación',
			'ed. fisica',
			'ingles',
			'física',
			'matematica',
			'quimica',
			'ed. civica',
			'geografia',
			'historia',
			'tecnologia de la representacion',
			'taller',
		],
	},
	{
		ano: '4',
		programas:
			'https://drive.google.com/drive/folders/1KZHLS9IV1tMO7z41CUJG13QDYL1ThCNd?usp=sharing',
		materias: [
			'Lyl Computación',
			'ed. fisica',
			'ingles',
			'base de datos',
			'matematica',
			'laboratorio y algoritmos',
			'logica computacional',
			'organizacion de las computadoras',
			'lab. algoritmos y estruct. de datos',
			'taller',
		],
	},
	{
		ano: '5',
		programas:
			'https://drive.google.com/drive/folders/1lqBdIrBKpm61d6urCZtkWyyjK3DeCPDS?usp=sharing',
		materias: [
			'Adm. Y gestion de base de datos',
			'ed. fisica',
			'ingles',
			'analisis de sistemas',
			'economia y gestion de org.',
			'programacion de redes',
			'LyL computacion',
			'taller',
		],
	},
	{
		ano: '6',
		programas:
			'https://drive.google.com/drive/folders/1e1SiPkaoAuJve9Y6nKKY68D3tXL6OkzE?usp=sharing',
		materias: [
			'prog. de redes',
			'ed. fisica',
			'ingles',
			'ciencia y tecnologia',
			'admin. sistemas de redes',
			'gestion proc. productivos',
			'desarollo de sistemas',
			'practicas profesionalziantes',
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
	{
		id: 13,
		alcance:
			'Actuar en todos los casos bajo las normativas de seguridad vigentes.',
	},
	{
		id: 14,
		alcance:
			'Desempeñarse profesionalmente en relación de dependencia o mediante emprendimientos económicos-productivos en forma individual o asociativa.',
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
export default function Computacion() {
	return (
		<div className="specialtyCtn">
			<Banner img="http://www.saladasinforma.com.ar/fotonotas/2011-05-07-23-12-47-758698-380935.jpg" />
			<EspecialidadDescripcion
				especialidad="Computación"
				video="https://www.youtube.com/embed/aoPRIi7rsjg"
			>
				<p>
					La computación es una de las áreas de la ciencia que se encarga de la
					comunicación entre los diferentes elementos de la vida cómputacional.
					La computación es una herramienta que permite la realización de tareas
					como la creación de software, la programación, la construcción de
					sistemas, la construcción de aplicaciones, la construcción de
					interfaces, la construcción de aplicaciones, la construcción de
					aplicaciones.
				</p>
				<br />
				<p>
					Los alumnos cursaran talleres y materias como computacion, algoritmos
					y datos, programacion en los distintos
					<a
						className="linktoa"
						href="https://laboratorios.et26.edu.ar/"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						laboratorios{' '}
					</a>
					que se encuentran en la escuela.
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
				<ProgramasTablas materias={computacionMaterias}></ProgramasTablas>
			</SubTitleAndDescription>
		</div>
	);
}
