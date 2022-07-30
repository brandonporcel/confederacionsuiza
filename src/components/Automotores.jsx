import SpecialtyBanner from './SpecialtyBanner';

import EspecialidadDescripcion from './EspecialidadDescripcion';
import EspecialidadProgramas from './EspecialidadProgramas';
const automotoresMaterias = [
	{
		ano: '3',
		programas:
			'https://drive.google.com/drive/folders/1eof7ydGeFfb9SY3fGV8TucyZKgBuAcf_?usp=sharing',
		materias: [
			'Lyl Automotores',
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
			'https://drive.google.com/drive/folders/1XAR-Tcnj_FFIWAt_3Q7recy2kwYy2ILw?usp=sharing',
		materias: [
			'electricidad del automotor',
			'ed. fisica',
			'ingles',
			'estatica y resist. de los materiales',
			'matematica',
			'mecanica',
			'mecanismos',
			'LyL automotores',
			'ciudadania y trabajo',
			'taller',
		],
	},
	{
		ano: '5',
		programas:
			'https://drive.google.com/drive/folders/1Ch9GdWMaYoFFNPCDSIRp-ttCtTc0WqhV?usp=sharing',
		materias: [
			'Dinamica del Automotor',
			'Tecnologia de los Materiales',
			'Electronica del Automotor',
			'Elementos de Maquina',
			'Motores de Combustion',
			'Termodinamica',
			'LyL Automotores',
			'Ed. Fisica',
			'Ingles',
			'matematica',
		],
	},
	{
		ano: '6',
		programas:
			'https://drive.google.com/drive/folders/1DIsQDm8Q0VvSMEAWoYDY7ualtI1D6lmZ?usp=sharing',
		materias: [
			'Calc. de Estr. y Mecan. del Automotor',
			'Diagnostico del Sist. del Automotor',
			'Dinamica. de Motores de Comb. Int.',
			'Economia y Gestion de las Organiz.',
			'Higiene y Seguridad Laboral',
			'Lab. de Ensayos  de Motores',
			'Vehiculos Especiales',
			'Ed. Fisica',
			'Ciencia y Tecnologia',
			'Practicas Profesionalizantes',
		],
	},
];

export default function Automotores() {
	return (
		<div className="specialtyCtn">
			<SpecialtyBanner img="https://www.iam.kit.edu/wk/img/WS_001.jpg" />
			<EspecialidadDescripcion
				especialidad="automotores"
				video="https://www.youtube.com/embed/wZgSr_S5_nI"
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
				materias={automotoresMaterias}
			></EspecialidadProgramas>
		</div>
	);
}
