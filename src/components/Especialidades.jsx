import EspecialidadItem from './EspecialidadItem';
const especialidades = [
	{
		thumbnail:
			'https://www.buenosaires.gob.ar/sites/gcaba/files/secundaria_del_futuro.jpeg',
		title: 'Ciclo Básico',
		specialty: 'ciclobasico',
		description:
			'El Ciclo Básico Común es una herramienta articuladora para que todos los alumnos lleguen al primer año de la carrera con el nivel necesario, tanto de su disciplina elegida, como de conocimiento general, característica particular que presentan generalmente los alumnos de esta casa de estudios',
	},
	{
		thumbnail: './images/automotoresthumbnail.jpg',
		title: 'Automotores',
		specialty: 'automotores',
		description:
			'El técnico en automotores se desempeña en los procesos de compra y/o venta de productos del área automotriz, establece las características técnicas de la compra, interpretando los objetivos y funciones de las distintas partes, componentes y sistemas del automotor',
	},
	{
		thumbnail: 'https://econojournal.com.ar/cntnt/uploads/2019/01/3.jpg',
		title: 'Computación',
		specialty: 'computacion',
		description:
			'Un técnico en computación puede desempeñarse en el diseño y desarrollo de sistemas informáticos, aplicaciones y base de datos, entre otros',
	},
];

export default function Especialidades() {
	return (
		<section id="especialidades" className="section tooLarge">
			<h2 className="sectionTitle">1er Ciclo y Especialidades</h2>
			<div className="flexBetween">
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
