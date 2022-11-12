import Autoridades from './Autoridades';
import Button from './Button';
import TitleDescriptionVideo from './TitleDescriptionVideo';
import SubTitleAndDescription from './SubTitleAndDescription';
import ImgGallery from './ImgGallery';
import Banner from './Banner';
const galleryImages = [
	{
		id: 0,
		title: 'confederacion suiza imagen institucional',
		url: './images/institucional/foto-escuela-2022.jpg',
	},
	{
		id: 1,
		title: 'confederacion suiza imagen institucional',
		url: 'http://1.bp.blogspot.com/_SrsBWUoWIYs/TFrzE84N1AI/AAAAAAAABKs/xcnuKfa0YxQ/s1600/Confederaci%C3%B3n+Suiza+2.jpg',
	},

	{
		id: 2,
		title: 'confederacion suiza logos linetime',
		url: './images/institucional/linetime.jpg',
	},
	{
		id: 3,
		title: 'biblioteca de la et26',
		url: './images/institucional/lasuizabiblio.jpg',
	},
	{
		id: 4,
		title: 'Laboratorio de computación - Pasado',
		url: './images/institucional/labcompu.jpg',
	},
];
export default function Institucional() {
	return (
		<div className="specialtyCtn">
			<Banner img="./images/institucional/banner.jpg" />

			<TitleDescriptionVideo
				especialidad="institucional"
				video="https://www.youtube.com/embed/hPB4I61D6b0"
			>
				<p>
					La Escuela Técnica N°26 Confederación Suiza D.E 6 es un colegio
					secundario público ubicado en el barrio de Balvanera, en la Ciudad
					Autónoma de Buenos Aires.
				</p>
				<p>
					Esta secundaria ofrece las especialidades de{' '}
					<b> Automotores y Computación</b> y se pueden cursan en el turno
					mañana, tarde o noche. La institución pertenece al programa
					Secundarias del Futuro por lo que cuenta con netbooks, un espacio
					digital, proyectores y pizarras interactivas digitales en cada aula.
					Participa de la Feria de Ciencias, Arte y Tecnología y del programa de
					campamentos escolares.
				</p>
				<br />
				<p>
					El edifico cuena con un buffet en el que los alumnos pueden acercarse
					a comprar comidas o bebidas, a estudiar o a pasar el tiempo con sus
					compañeros. En el 4to piso, los alumnos pueden acceder a la biblioteca
					donde pueden encontrar centenares de libros que son provistos por el
					Ministerio de Educación y por donaciones de organizaciones o ex
					alumnos. Tambien cuenta con Laboratorio de Ciencias, un salon de usos
					multiples (SUM) y un polideportivo exclusivo del colegio.
				</p>

				<br />
				<p>
					El proposito de la escuela es brindar futuros técnicos capaces de
					enfrentar los desafios que presenten las industrias y que sean capaces
					de resolver problematicas a traves de herramientas aprendidas.
				</p>
			</TitleDescriptionVideo>
			<SubTitleAndDescription title="historia">
				<p>
					Nuestra Escuela Técnica se fundó el 16 de abril de 1948, nació con el
					nombre de “Escuela técnica de Oficios de la Capital Federal” y a los
					pocos meses, el 26 de diciembre, cambió su nombre por el de “Escuela
					Industrial nº 11”. En 1949 abrió sus puertas al alumnado, siendo el
					primer Director Emilio Freijedo que estuvo al frente de la Escuela
					hasta 1963. La primera promoción data del año 1952. Existía una sola
					especialidad “Automotores”. En ese período solamente tenía Ciclo Medio
					y posteriormente a partir de 1952 se agregó el Ciclo Superior.
					<br />
					<br />
					Desde los inicios contó con dos turnos y dos divisiones, una
					funcionaba a la mañana y otra a la tarde. Posteriormente se agregó el
					turno noche y el Ciclo superior. La carrera duraba 8 años: 4 de Ciclo
					Básico y 4 años de Ciclo superior.
				</p>
				<br />
				<ImgGallery galleryImages={galleryImages} />
				<p>
					Cuando las escuelas técnicas y escuelas fábricas pasaron a depender
					del C.O.N.E.T (Consejo Nacional de Educación Técnica) -dice el
					Profesor Héctor Cuñarro- algunas de las instituciones repetían la
					numeración y se optó por una nueva numeración de acuerdo al orden de
					creación, de ahí que nuestra Escuela pasó a llamarse ENET nº 26
					“Automotores” (Escuela Nacional de Educación Técnica) desde el 18 de
					agosto de 1966.
				</p>
				<br />
				<p>
					En 1972, en la época del Director Laíño, la Escuela se mudó al actual
					edificio en Jujuy 255. Este edificio –comenta el Profesor Cuñarro- no
					fue hecho para una escuela sino que era una fábrica de accesorios para
					colectivos, camiones y de cromados. La empresa que tenía ese edificio
					cerró y el C.O.N.E.T lo compró para adaptarlo a las necesidades de la
					escuela. El Ingeniero Civil Julio Fullone, quien más adelante fue
					Director, adaptó el edificio para que funcione como escuela. Esa
					remodelación terminó de realizarse en 1971 y se mudaron los
					mobiliarios y máquinas para dar comienzo al ciclo lectivo 1972.
				</p>
				<p>
					La Escuela adoptó un nombre producto de una resolución ministerial que
					disponía la identificación de las escuelas con nombre de prócer o de
					países –dice el Profesor José De Leo- y como el gobierno Suizo donó al
					C.O.N.E.T. el dinero necesario para la remodelación del edificio,
					luego la escuela tomó el nombre de ENET nº 26 “Confederación Suiza”.
				</p>
				<br />
				<img
					src="./images/institucional/enetlogo.jpg"
					alt="enet 26 logo escuela confederacion suiza"
				/>
				<br />
				<br />
				<p>
					Actualmente la Escuela Técnica nº 26 “Confederación Suiza” cuenta con
					tres turnos, con varias divisiones por turno, dos especialidades como
					Automotores y Computación y 1200 alumnos aproximadamente de acuerdo al
					ultimo censo realizado. En la escuela seguimos impartiendo el respeto,
					la responsabilidad, el compromiso y la excelencia para que los alumnos
					tengan la mejor educación con un acompañamiento en todo momento.
				</p>

				<a
					href="https://es.wikipedia.org/wiki/Usuario:Tecnica26/Taller"
					target="_blank"
					rel="noreferrer"
				>
					<Button type="noBgBlue">Ver Más</Button>
				</a>
			</SubTitleAndDescription>
			<SubTitleAndDescription title="autoridades">
				<Autoridades />
			</SubTitleAndDescription>
		</div>
	);
}
