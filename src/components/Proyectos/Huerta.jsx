import ImgGallery from '../ImgGallery';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';
let huertaImages = [
	{ id: 1, url: './images/proyectos/huerta/313.JPG', title: 'Huerta ET26' },
	{ id: 2, url: './images/proyectos/huerta/314.JPG', title: 'Huerta ET26' },
	{ id: 3, url: './images/proyectos/huerta/318.JPG', title: 'Huerta ET26' },
	{ id: 4, url: './images/proyectos/huerta/326.JPG', title: 'Huerta ET26' },
];
export default function Huerta() {
	return (
		<ProjectContainer
			title="La escuela tiene una huerta!"
			when="2021"
			specialClass=""
			mainImg="./images/proyectos/huerta/320.jpg"
		>
			<SubTitleAndDescription
				title="descripción"
				specialClass="subtitleClassProject"
				w="100"
			>
				<p>
					La profesora de lengua y literatura de 1er año Paula Luna incentivo a
					sus alumnos del TM y TT a crear y sustentar una huerta en el patio del
					2do piso.
				</p>
				<p>
					La preceptora Cecilia Ligotti tambien está ayudando con el proyecto
				</p>
			</SubTitleAndDescription>
			<ImgGallery galleryImages={huertaImages}></ImgGallery>
			<SubTitleAndDescription
				title="Redes Sociales"
				specialClass="subtitleClassProject"
				w="100"
			>
				<p>
					Seguí a la cuenta de la huerta en{' '}
					<a
						href="https://instagram.com/lahuertadelasuiza"
						target="_blank"
						rel="noreferrer"
						className="linktoa"
					>
						Instagram!
					</a>
				</p>
			</SubTitleAndDescription>
		</ProjectContainer>
	);
}
