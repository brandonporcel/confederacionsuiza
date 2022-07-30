import React from 'react';
import EspecialidadDescripcion from './EspecialidadDescripcion';
import EspecialidadProgramas from './EspecialidadProgramas';
import SpecialtyBanner from './SpecialtyBanner';
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
	return (
		<div className="specialtyCtn">
			<SpecialtyBanner img="https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_pagina/public/beron_de_astrada_6351_3_0.jpg?itok=mybR1fXT" />
			<EspecialidadDescripcion
				especialidad="ciclo básico"
				video="https://www.youtube.com/embed/kpArfnc-tTQ"
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
			<EspecialidadProgramas
				materias={ciclobasicoMaterias}
			></EspecialidadProgramas>
		</div>
	);
}
