import ImgGallery from '../ImgGallery';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';
const error404GalleryImg = [
	{
		id: 0,
		title: 'error 404',
		active: null,
		url: './images/proyectos/error1.jpg',
	},
	{
		id: 1,
		title: 'error 404',
		active: null,
		url: './images/proyectos/error2.jpg',
	},
	{
		id: 2,
		title: 'error 404',
		active: null,
		url: './images/proyectos/error3.jpg',
	},
	{
		id: 3,
		title: 'error 404',
		active: null,
		url: './images/proyectos/error4.jpg',
	},
	{
		id: 4,
		title: 'error 404',
		active: null,
		type: 'video',
		url: './videos/coparobotica2.mp4',
	},
];

export default function CopaRobotica() {
	return (
		<ProjectContainer
			title="La escuela represento a CABA en la copa robotica nacional"
			mainImg="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/22152958/Edited-La-Escuela-T%C3%A9cnica-N.%C2%B026-%E2%80%9CConfederaci%C3%B3n-Suiza%E2%80%9D-ganadores-copa-rob%C3%B3tica-8.jpg"
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
					src="https://www.revistaelabasto.com.ar/wp-content/uploads/2019/06/cr3.jpg"
					alt=""
					className="centerEmbedCode"
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
					src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/06/5d0509c473d45_900.jpg"
					alt=""
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
				title="Queres saber más?"
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
