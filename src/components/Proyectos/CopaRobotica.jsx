import ImgGallery from '../ImgGallery';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';
const error404GalleryImg = [
	{
		id: 0,
		title: 'El robot del proyecto!',
		url: './images/proyectos/coparobotica2019/error1.jpg',
	},
	{
		id: 1,
		title: 'Foto de los chicos en el cole!',
		url: './images/proyectos/coparobotica2019/error2.jpg',
	},
	{
		id: 2,
		title: 'Madera Publicitaria',
		url: './images/proyectos/coparobotica2019/error3.jpg',
	},
	{
		id: 3,
		title: 'Error 404 en un programa de tv',
		url: './images/proyectos/coparobotica2019/error4.jpg',
	},
	{
		id: 4,
		title: 'Video Presentacion Equipo',
		type: 'video',
		url: './videos/coparobotica2.mp4',
	},
];

export default function CopaRobotica() {
	return (
		<ProjectContainer
			title="La escuela represento a CABA en la copa robotica nacional"
			mainImg="./images/proyectos/coparobotica2019/coparobotica2019.webp"
			when="2019"
			specialty="c"
		>
			<SubTitleAndDescription
				title="descripción"
				w="100"
				specialClass="subtitleClassProject"
			>
				<p>
					La Copa Robótica 2019 fue la etapa de clasificación local organizada
					por el Ministerio de Educación e Innovación y Educabot para elegir al
					equipo que participe en el mundial de First Global Challenge. La Copa
					busca impulsar la implementación de nuevas tecnologías y las
					habilidades que se requieren para desarrollarse en el futuro, como el
					trabajo en equipo, la creatividad y la resolución de problemas. En ese
					año el Mundial se realizó del 24 al 27 de octubre en Dubai con la
					participación de más de 175 países. La olimpíada de robótica se
					realiza cada año en un país diferente y con un temática específica
					basada en los 14 grandes desafíos de ingeniería identificados por la
					Academia Nacional de Ingeniería de Estados Unidos.
				</p>
				<br />
				<p>
					La dinámica de la competencia local es una réplica de la instancia
					internacional. Los/as chicos/as resolvieron un desafío lúdico asociado
					a la temática de la sustentabilidad de los océanos y lo resolvieron
					utilizando un kit de robótica y aplicando habilidades de programación.
				</p>
				<div className="centerEmbedCode videoContainer">
					<video controls muted>
						<source src="./videos/error404.mp4" type="video/mp4" />
						Your browser does not support HTML video.
					</video>
				</div>
				<br />
				<p>
					El equipo se llamó Error 404 y el 10 de junio ganó el primer lugar en
					la instancia local dentro de la Copa Robótica 2019, organizada por el
					Ministerio de Educación e Innovación de la Ciudad de Buenos Aires. Se
					impuso ante otras nueve escuelas secundarias porteñas en el Centro
					Metropolitano de Diseño (CMD) de Barracas.
				</p>

				<img
					src="./images/proyectos/coparobotica2019/error404campeoncaba.jpg"
					alt="Error 404 Confederacion Suiza campeón"
					className="centerEmbedCode"
					width="100%"
					height="auto"
				/>

				<br />
				<br />
				<p>
					Tras esta victoria, el equipo representó a la Ciudad de Buenos Aires
					en la instancia nacional de la Copa Robótica 2019, que se disputó en
					el Parque Roca de Villa Lugano el 29, 30 y 31 de agosto. El equipo que
					ganase allí representaria al país en el Mundial de Robótica First
					Global en Dubai.
				</p>
				<br />
				<p>
					Sobre una maqueta estaban distribuidas pelotas de distintos colores:
					las pelotas naranjas representaban basura; las verdes, residuos
					reciclables; y los bloques amarillos simulaban ser desechos
					electrónicos. En esta instancia, los robots que construyeron y
					programaron cada equipo tenían 3 minutos para sumar puntos (1, 2 y 5
					respectivamente por cada tipo de «residuo»), superando los obstáculos
					y colocando las pelotas y bloques en los contenedores correspondientes
					que simulaban ser centros de reciclaje.
				</p>
				<br />
				<img
					src="./images/proyectos/coparobotica2019/coparoboticacancha.jpg"
					alt="Copa robotica 2019 cancha"
					width="100%"
					height="auto"
				/>
			</SubTitleAndDescription>

			<SubTitleAndDescription
				specialClass="subtitleClassProject"
				w="100"
				title="Equipo"
			>
				<p>
					El equipo fue compuesto por los estudiantes Tomás Raspa, Leandro
					Horane Siracusa, Agustín Blanco, Francisco Nicolás García, Candela
					Heredia con los mentores Silvina Rodriguez y Pablo Fiscella.
				</p>
			</SubTitleAndDescription>
			<ImgGallery galleryImages={error404GalleryImg} />
			<SubTitleAndDescription
				specialClass="subtitleClassProject"
				w="100"
				title="¿Querés saber más?"
			>
				<ul className="ulLsit">
					<li>
						El medio Infobae visitó la escuela y habló con el equipo.{' '}
						<a
							href="https://www.infobae.com/tecno/2019/07/22/estudiantes-portenos-fueron-premiados-por-crear-un-robot-reciclador-y-ahora-buscan-obtener-un-lugar-en-el-mundial-de-robotica-en-dubai/"
							target="_blank"
							className="linktoa"
							rel="noreferrer"
						>
							{' '}
							Nota
						</a>
					</li>
					<li>
						El{' '}
						<a
							href="https://www.instagram.com/error404.caba/"
							target="_blank"
							className="linktoa"
							rel="noreferrer"
						>
							{' '}
							instagram oficial
						</a>{' '}
						del proyecto!{' '}
					</li>
				</ul>
			</SubTitleAndDescription>
		</ProjectContainer>
	);
}
