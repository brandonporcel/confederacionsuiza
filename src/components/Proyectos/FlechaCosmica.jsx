import ImgGallery from '../ImgGallery';
import SubTitleAndDescription from '../SubTitleAndDescription';

import ProjectContainer from '../ProjectContainer';

const galleryImages = [
	{
		id: 0,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: './images/proyectos/flecha.jpg',
	},
	{
		id: 1,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: './images/proyectos/flecha2.jpg',
	},
	{
		id: 2,
		title: 'logo del proyecto',
		active: null,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw18oSQGMaearEoWRZnzjxGnaSr-IFs06vbWE3T3LxFjXFy9zOCjeY9q_uTHGv_PTz50I&usqp=CAU',
	},
	{
		id: 3,
		title: 'logo del proyecto',
		active: null,
		url: 'https://econojournal.com.ar/cntnt/uploads/2019/01/3.jpg',
	},
	{
		id: 4,
		title: 'logo del proyecto',
		active: null,
		url: 'https://econojournal.com.ar/cntnt/uploads/2019/01/7.jpg',
	},
];
export default function Proyecto() {
	return (
		<ProjectContainer
			title="Flecha Cosmica: Los chicos ganaron la FLL y viajaron a Houston!"
			mainImg="https://scontent.feze10-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KHsWKl-1_KIAX_uHF6n&_nc_ht=scontent.feze10-1.fna&oh=00_AT_sSbFz-PPDsJYOkJtRnVJ6wsBV9WGrA9a_GTZqQEI3yg&oe=630BF9CA"
			when="Diciembre, 2018"
			specialty="c"
		>
			<SubTitleAndDescription
				title="descripción"
				specialClass="subtitleClassProject"
				w="100"
			>
				<p>
					Alumnos de 13 a 15 años de la escuela se quedaron con el primer puesto
					del torneo Nacional First Lego League (FLL) 2018 y lograron la
					clasificacion al torneo mundial de Robotica que se llevo a cabo en
					Houston, Estados Unidos del 17 al 20 de abril de 2019.
				</p>
				<p>
					El equipo llamado "Flecha Cósmica", siguiendo la consigna del torneo,
					crearon un robot que monitorea la salud mental de los astronautas y
					busca resolver problemas anímicos generados por la soledad de los
					viajes espaciales.
				</p>
				<br />
				<p>
					Los estudiantes que representaron a la Argentina en el World
					Championship FFL y para poder viajar a la competencia, juntaron fondos
					por medio de rifas y festivales en la escuela como ferias de plato.
					Además, la fundación del Banco Ciudad y el Ministerio de Educación
					ayudaron a completar lo que necesitan para el viaje.
				</p>
				<br />
				<p>
					Se trata de un software "sensorial" que analiza los cambios físicos y
					emocionales de una persona. Tras consultar con psicólogos, los chicos
					crearon el programa que registra cualquier modificación en la conducta
					del astronauta y genera aromas, canciones o imágenes que le producen
					placer.
				</p>
				<p>
					Para clasificar al Mundial, los jóvenes compitieron contra otras 10
					escuelas. Este es un torneo internacional que se realiza en 80 países
					y del que participaron más de 320 mil alumnos. La idea es que mediante
					sistemas de robots, los chicos aprendan de ciencia y tecnología de
					forma práctica.
				</p>
				<br />
				<p>
					En cada First Lego League, la consigna es diferente. En esta
					oportundidad, se llamó “En Órbita”, es decir, la exploración espacial
					y los desafíos que eso trae. Por eso, los alumnos debieron ensamblar
					las piezas y programar la lógica de robot Lego utilizando la
					tecnología EV3 Mindstorms para que supere una serie de obstáculos de
					forma autónoma a lo largo de 15 misiones en una alfombra gigante, como
					reparar paneles solares de la nave, esquivar un cráter o llegar a la
					Estación Espacial Internacional.
				</p>
			</SubTitleAndDescription>

			<SubTitleAndDescription
				title="¿Querés saber mas?"
				w="100"
				specialClass="subtitleClassProject"
			>
				<ul className="ulLsit">
					<li>
						El diario Clarin escribio una nota al respecto. Leela{' '}
						<a
							href="https://www.clarin.com/sociedad/pieza-pieza-equipo-alumnos-portenos-clasifico-jugar-mundial-lego_0_UuB5UxweW.html"
							target="_blank"
							rel="noreferrer"
							className="linktoa"
						>
							Acá
						</a>
					</li>
					<li>
						El medio TN escribio una{' '}
						<a
							href="https://tn.com.ar/tecno/internet/2019/04/09/alumnos-argentinos-viajan-a-houston-para-competir-en-un-festival-de-robotica/"
							target="_blank"
							rel="noreferrer"
							className="linktoa"
						>
							nota{' '}
						</a>
						y le hicieron una{' '}
						<a
							href="https://www.youtube.com/watch?v=VbbB6et4DT0"
							target="_blank"
							rel="noreferrer"
							className="linktoa"
						>
							entrevista
						</a>{' '}
						al equipo.
					</li>
					<li>
						Mirá el{' '}
						<a
							href="https://www.youtube.com/watch?v=tnDGwoRDmDk"
							target="_blank"
							rel="noreferrer"
							className="linktoa"
						>
							momento
						</a>{' '}
						en que los nombraron ganadores a los chicos.
					</li>
				</ul>
			</SubTitleAndDescription>
			<SubTitleAndDescription
				title="docente a cargo"
				w="100"
				specialClass="subtitleClassProject"
			>
				<p>
					Los docentes/mentores de los chicos durante el proceso fueron Silvina
					Rodriguez, Mariano Santamarina y Pablo Fiscella.
				</p>
			</SubTitleAndDescription>
			<ImgGallery galleryImages={galleryImages} />
		</ProjectContainer>
	);
}
