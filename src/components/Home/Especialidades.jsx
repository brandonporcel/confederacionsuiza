import EspecialidadItem from './EspecialidadItem';
const especialidades = [
	{
		thumbnail: './images/ciclobasicothumbnail.webp',
		title: 'Ciclo Básico',
		specialty: 'ciclobasico',
		description:
			'El Ciclo Básico Común es una herramienta articuladora para que todos los alumnos lleguen al primer año de la carrera con el nivel necesario, tanto de su disciplina elegida, como de conocimiento general, característica particular que presentan generalmente los alumnos de esta casa de estudios',
	},
	{
		thumbnail: './images/automotoresthumbnail.webp',
		title: 'Automotores',
		specialty: 'automotores',
		description:
			'El servicio de mantenimiento y reparación del automóvil se ha visto conmocionado en los últimos años, por un desarrollo tecnológico sin precedentes en los sistemas del automóvil, impulsado principalmente por la difusión de la electrónica',
	},
	{
		thumbnail: './images/computacionthumbnail.jpg',
		title: 'Computación',
		specialty: 'computacion',
		description:
			'Un técnico en computación puede desempeñarse en el diseño y desarrollo de sistemas informáticos, aplicaciones y base de datos, entre otros',
	},
];

export default function Especialidades() {
	return (
		<section id="especialidades" className="section tooLarge">
			<h3 className="sectionTitle">1er Ciclo y Especialidades</h3>
			<div className="flexBetween overflowAuto gap20">
				{especialidades.map((el, i) => (
					<EspecialidadItem
						key={i}
						title={el.title}
						description={el.description}
						thumbnail={el.thumbnail}
						specialty={el.specialty}
					/>
				))}
			</div>
		</section>
	);
}
