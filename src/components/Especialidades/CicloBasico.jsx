import React, { useEffect } from 'react';
import EspecialidadDescripcion from '../TitleDescriptionVideo';
import EspecialidadProgramas from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
import Banner from '../Banner';
import SubTitleAndDescription from '../SubTitleAndDescription';
const ciclobasicoMaterias = [
	{
		ano: '1',
		programas:
			'https://drive.google.com/drive/folders/1QKVmEYNPEtTEHEBBKn6kbaRQkilGT6ur?usp=sharing',
		materias: [
			'historia',
			'ed. fisica',
			'ingles',
			'educacion artistica',
			'matematica',
			'lengua y literatura',
			'biologia',
			'historia',
			'ed ciudadana',
			'tecnologia de la representacion',
			'geografia',
			'taller',
		],
	},
	{
		ano: '2',
		programas:
			'https://drive.google.com/drive/folders/1wL87b93OEhqXbDok9sLe_6gzSK_B76qa?usp=sharing',
		materias: [
			'historia',
			'ed. fisica',
			'ingles',
			'educacion artistica',
			'matematica',
			'lengua y literatura',
			'biologia',
			'quimica',
			'ed ciudadana',
			'tecnologia de la representacion',
			'geografia',
			'fisica',
			'taller',
		],
	},
];
export default function CicloBasico() {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	return (
		<div className="specialtyCtn">
			<Banner img="https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_pagina/public/beron_de_astrada_6351_3_0.jpg?itok=mybR1fXT" />
			<EspecialidadDescripcion
				especialidad="ciclo básico"
				video="https://www.youtube.com/embed/kpArfnc-tTQ"
			>
				<p>
					El Ciclo Básico Común es una herramienta articuladora para que todos
					los alumnos lleguen al primer año de la especialidad con el nivel
					necesario, tanto de su disciplina elegida, como de conocimiento
					general.
				</p>
			</EspecialidadDescripcion>
			<EspecialidadProgramas title="Programas Curriculares">
				<ProgramasTablas materias={ciclobasicoMaterias}></ProgramasTablas>
			</EspecialidadProgramas>
			<SubTitleAndDescription title="taller">
				<p>
					En este ciclo se transmiten habilidades, destrezas y conocimientos
					teóricos-prácticos en la que los chicos puedan trabajar en proyectos
					basados en problemas reales con el acompañamiento del Maestro de
					Enseñanza Práctica como guía-facilitador, valorando la creatividad y
					la autonomía, integrando distintas áreas, para obtener un producto
					tecnológico realizado por ellos mismos. En el año cursaran en talleres
					rotativos de 3 meses.
				</p>
				<br />
				<p>
					Primer año tendran son los de Metales, eléctrica, Temas Generales,
					Maderas y Metrología.
				</p>
				<br />
				<p>Segundo año: Metales2, electricidad, Computacion</p>
			</SubTitleAndDescription>
		</div>
	);
}
