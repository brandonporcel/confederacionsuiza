import styled from 'styled-components';
import EspecialidadItem from './EspecialidadItem';
const especialidades = [
	{
		thumbnail: './images/ciclobasicothumbnail.webp',
		title: 'Primer Ciclo',
		linkToSpecialty: 'primerciclo',
		description:
			'El Primer Ciclo Común es una herramienta articuladora para que todos los alumnos lleguen al primer año de la carrera con el nivel necesario, tanto de su disciplina elegida, como de conocimiento general, característica particular que presentan generalmente los alumnos de esta casa de estudios',
	},
	{
		thumbnail: './images/822.jpg',
		title: 'Automotores',
		linkToSpecialty: 'automotores',
		description:
			'El servicio de mantenimiento y reparación del automóvil se ha visto conmocionado en los últimos años, por un desarrollo tecnológico sin precedentes en los sistemas del automóvil, impulsado principalmente por la difusión de la electrónica',
	},
	{
		thumbnail: './images/computacionthumbnail.jpg',

		title: 'Computación',
		linkToSpecialty: 'computacion',
		description:
			'Un técnico en computación puede desempeñarse en el diseño y desarrollo de sistemas informáticos, aplicaciones y base de datos, entre otros',
	},
];
const EspecialidadesContainer = styled.div`
	/* max-width: 85%; */
	/* min-width: min-content; */
	margin: 0 auto;
`;
export default function Especialidades() {
	return (
		<section className="tooLarge sectionWrapper">
			<div
				id="especialidades"
				style={{ paddingTop: '85px' }}
				className="section"
			>
				<h3 className="sectionTitle">1er Ciclo y Especialidades</h3>
				<EspecialidadesContainer
					className="flexBetween overflowAuto gap20"
					style={{ width: '90%', margin: '0 auto' }}
				>
					{especialidades.map((el, i) => (
						<EspecialidadItem
							key={i}
							title={el.title}
							description={el.description}
							thumbnail={el.thumbnail}
							linkToSpecialty={el.linkToSpecialty}
						/>
					))}
				</EspecialidadesContainer>
			</div>
		</section>
	);
}
