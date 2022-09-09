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
		active: null,
		url: './images/pruebaaa.jpg',
	},
	{
		id: 1,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'http://1.bp.blogspot.com/_SrsBWUoWIYs/TFrzE84N1AI/AAAAAAAABKs/xcnuKfa0YxQ/s1600/Confederaci%C3%B3n+Suiza+2.jpg',
	},
	{
		id: 2,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: './images/escudos.jpg',
	},
	{
		id: 3,
		title: 'confederacion suiza logos linetime',
		active: null,
		url: './images/linetime.jpg',
	},
];
export default function Institucional() {
	return (
		<div className="specialtyCtn">
			<Banner img="./images/prueba.jpg" />

			<TitleDescriptionVideo
				especialidad="institucional"
				video="https://www.youtube.com/embed/hPB4I61D6b0"
			>
				<p>
					La Escuela Técnica N°26 Confederación Suiza D.E 6 es un colegio
					secundario publico ubicado en el barrio de Balvanera, CABA.
				</p>
				<p>
					Esta secundaria ofrece las especialidades de{' '}
					<b> Automotores y Computación</b> y se pueden cursan en el turno
					mañana, tarde o noche. La institución pertenece a las Secundarias del
					Futuro por lo que cuenta con netbooks, un espacio digital, proyectores
					y pizarras interactivas digitales en cada aula . Participa de la Feria
					de Ciencias, Arte y Tecnología y del programa de campamentos
					escolares.
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
					Desde los inicios –dice el profesor Héctor Cuñarro- “contó con dos
					turnos y dos divisiones, una funcionaba a la mañana y otra a la tarde.
					Era un edificio muy simpático y más que una Escuela era un edificio
					que albergaba a una familia grande”. Posteriormente se agregó el turno
					noche y el Ciclo superior. La carrera duraba 8 años: 4 de Ciclo Básico
					y 4 años de Ciclo superior.
				</p>
				<br />
				<ImgGallery galleryImages={galleryImages} />
				<p>
					El Sub-jefe de preceptores Jorge Ángel Brea, que se recibió de técnico
					mecánico cuando la institución se llamaba ENET nº 11 “Automotores”,
					nos cuenta que en el edificio de calle Belgrano había muy pocos
					alumnos porque el espacio era muy reducido. Actualmente funcionan tres
					turnos y la carrera dura 6 años y el número de alumnos aumentó
					considerablemente.
				</p>
				<Button type="noBgBlue">
					<a href="https://www.wikipedia.org/" target="_blank" rel="noreferrer">
						Ver Más
					</a>
				</Button>
			</SubTitleAndDescription>
			<SubTitleAndDescription title="autoridades">
				<Autoridades />
			</SubTitleAndDescription>
		</div>
	);
}
