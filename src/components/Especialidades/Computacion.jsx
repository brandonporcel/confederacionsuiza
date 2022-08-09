import React from 'react';
import Banner from '../Banner';

import EspecialidadDescripcion from '../TitleDescriptionVideo';
import EspecialidadProgramas from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
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
			</EspecialidadDescripcion>
			<EspecialidadProgramas title="Programas Curriculares">
				<ProgramasTablas materias={computacionMaterias}></ProgramasTablas>
			</EspecialidadProgramas>
		</div>
	);
}
