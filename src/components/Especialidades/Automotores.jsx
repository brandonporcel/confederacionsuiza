import Banner from '../Banner';

import EspecialidadDescripcion from '../TitleDescriptionVideo';
import SubTitleAndDescription from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
import styled from 'styled-components';
import ImgGallery from '../ImgGallery';
const automotoresMaterias = [
	{
		ano: '3',
		programas:
			'https://drive.google.com/drive/folders/1ChfHuB7ZcGR-5SuCAcgit9of1Q6kVn7y?usp=sharing',
		materias: [
			'Lengua y Literatura',
			'ed. física',
			'inglés',
			'matemática',
			'física',
			'Química',
			'ed. ciudadana',
			'Geografía',
			'historia',
			'Tecnología de la Representación ',
			'taller',
		],
	},
	{
		ano: '4',
		programas:
			'https://drive.google.com/drive/folders/1XAR-Tcnj_FFIWAt_3Q7recy2kwYy2ILw?usp=sharing',
		materias: [
			'Lengua y Literatura',
			'ed. física',
			'inglés',
			'matemática',
			'Estática y resist. de los materiales',
			'electricidad del automotor',
			'mecánica',
			'mecanismos',
			'ciudadania y trabajo',
			'taller',
		],
	},
	{
		ano: '5',
		programas:
			'https://drive.google.com/drive/folders/1Ch9GdWMaYoFFNPCDSIRp-ttCtTc0WqhV?usp=sharing',
		materias: [
			'Dinámica del Automotor',
			'Tecnología de los Materiales',
			'Electrónica del Automotor',
			'Elementos de Máquina',
			'Motores de Combustión',
			'Termodinámica',
			'Lengua y Literatura',
			'Ed. Física',
			'Inglés',
			'matemática',
		],
	},
	{
		ano: '6',
		programas:
			'https://drive.google.com/drive/folders/1DIsQDm8Q0VvSMEAWoYDY7ualtI1D6lmZ?usp=sharing',
		materias: [
			'Calc. de Estr. y Mecan. del Automotor',
			'Diagnóstico del Sist. del Automotor',
			'Dinámica. de Motores de Comb. Int.',
			'Economía y Gestion de las Organiz.',
			'Higiene y Seguridad Laboral',
			'Lab. de Ensayos  de Motores',
			'Vehiculos Especiales',
			'Ed. Física',
			'Ciencia y Tecnología',
			'Prácticas profesionalizantes',
		],
	},
];
const automotoresAlcances = [
	'Efectuar anteproyectos de partes y conjuntos constitutivos del automotor.',
	'Proyectar y dirigir las instalaciones mecánicas de los talleres de reparación y/o mantenimiento del automotor.',
	'Supervisar y aprobar los ensayos finales de funcionamiento, tanto de partes, instalaciones eléctricas, mecánicas, hidráulicas, neumáticas, transmisión de datos eléctricos y electrónicos, combustibles líquidos, gaseosos y alternativos y/o conjuntos del automotor así como de unidades completas.',
	'Planificar los servicios de mantenimiento de flotas de automotores.',
	'Realizar peritajes de las condiciones y/o investigaciones de funcionamiento en caso de siniestros de automotores.',
];
const automotoresGalleryImg = [
	{
		id: 0,
		title: 'los chicos trabajando!',

		url: 'https://i.ytimg.com/vi/9JYdBklhINE/maxresdefault.jpg',
	},
	{
		id: 1,
		title: 'desafio eco automotores',

		url: 'https://1.bp.blogspot.com/-dIWLFeqy5u0/XWEupaExweI/AAAAAAAAFJg/hGdYCAUNY-cL6J5f6sdt-auTIbHf6vvfgCLcBGAs/s1600/esc26_aut.jpg',
	},
	{
		id: 2,
		title: 'auto fabricado en el colegio',

		url: './images/automotores/automotores1.webp',
	},
	{
		id: 3,
		title: 'Automotores',

		url: './images/automotores/automotores.webp',
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
const GalleryAutomotoresContainer = styled.div`
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

export default function Automotores() {
	return (
		<div className="specialtyCtn">
			<Banner img="./images/automotores/banner.jpg" />
			<EspecialidadDescripcion
				especialidad="automotores"
				video="https://www.youtube.com/embed/wZgSr_S5_nI"
			>
				<p>
					El servicio de mantenimiento y reparación del automóvil se ha visto
					conmocionado en los últimos años, por un desarrollo tecnológico sin
					precedentes en los sistemas del automóvil, impulsado principalmente
					por la difusión de la electrónica. Esto ha traído como consecuencia la
					necesidad de una actualización y capacitación permanente de la mano de
					obra ocupada en la actividad, tanto en relación con los conocimientos
					técnicos, como en el uso de herramientas e instrumental de base
					informática.
				</p>
				<br />
				<p>
					En función de esto surge la necesidad de redefinir el perfil
					profesional del técnico en automotores de acuerdo a la competitividad
					necesaria para brindar servicio de mantenimiento, reparación del
					automóvil o insertarse en carreras de grado superior.
				</p>
				<br />
				<p>
					En la especialidad los alumnos van a adquirir una formacion amplia en
					lo que difieren a los autos. Aprenderan sobre electronica,
					automatizacion,mecánica, termoDinámica y más profundazando cada vez
					mas en cada año.
				</p>
				<br />
				<p>
					En 6to año se abre la posibilidad de que empresas a traves de
					pasantias preparen a los alumnos para el mundo real del trabajo.
				</p>
			</EspecialidadDescripcion>
			<SubTitleAndDescription title="Alcance de titulo">
				<p>
					Del análisis de las actividades profesionales que se desprenden del
					Perfil Profesional, se establecen como habilitaciones para el Técnico
					en Automotores:
				</p>

				<Alcance>
					{automotoresAlcances.map((el, i) => (
						<li key={i}>{el}</li>
					))}
				</Alcance>
			</SubTitleAndDescription>
			<SubTitleAndDescription title="Programas Curriculares">
				<ProgramasTablas materias={automotoresMaterias}></ProgramasTablas>
			</SubTitleAndDescription>
			<GalleryAutomotoresContainer>
				<ImgGallery galleryImages={automotoresGalleryImg}></ImgGallery>
			</GalleryAutomotoresContainer>
		</div>
	);
}
