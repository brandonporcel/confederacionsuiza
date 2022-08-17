import Autoridades from './Autoridades';
import Button from './Button';
import TitleDescriptionVideo from './TitleDescriptionVideo';
import EspecialidadProgramas from './SubTitleAndDescription';
import ImgGallery from './ImgGallery';
import Banner from './Banner';
const galleryImages = [
	{
		id: 0,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'http://4.bp.blogspot.com/_yX4lBoSwV0c/STgc03_q9oI/AAAAAAAAAHU/lnsPTnSL3HY/s320/EDIFICIO_2.JPG',
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
		url: 'https://elegircolegio.com/images/made/images/remote/https_calidad.elegircolegio.com/images/uploads/colegios/F_020086500_370_161_ffffff_bor3_319ad0_tl_27_br_27_s.jpg',
	},
];
export default function Institucional() {
	return (
		<div className="specialtyCtn">
			<Banner img="https://www.revistaelabasto.com.ar/wp-content/uploads/2019/03/confederacion.jpg" />

			<TitleDescriptionVideo
				especialidad="institucional"
				video="https://www.youtube.com/embed/hPB4I61D6b0"
			>
				<p>
					La Escuela Técnica N°26 Confederación Suiza D.E 6 es un colegio
					secundario publico ubicado técnica y pública de la ciudad de Buenos
					Aires ubicada en el barrio de Balvanera, CABA.
				</p>
				<p>
					La Escuela tiene turno mañana, tarde y noche y jornada simple. Forma
					<b> técnicos/as en Automotores y Computación </b>que puedan enfrentar
					los desafíos del siglo XXI y es una de las Secundarias del Futuro por
					lo que cuenta con netbooks, espacio digital, soporte tecnológico y
					mobiliario del futuro. Participa de la Feria de Ciencias, Arte y
					Tecnología y de campamentos escolares.
				</p>
				<br />
				<p>
					Esta institución ofrece la Modalidad Técnico Profesional de Nivel
					Secundario en las diversas especialidades, brindando así mejores
					oportunidades formativas frente a los desafíos que presentan
					innovaciones en el campo científico tecnológico, posibilitando formar
					técnicos capaces de dar las respuestas necesarias que el sistema socio
					productivo requiere, siendo ésta una necesidad insoslayable.
				</p>
				<br />
				<p>
					La institución cuena con un comedor/buffet en el que los alumnos
					pueden acercarse en cualquier momento a comer y beber,a estudiar o
					esperar antes de entrar a taller. A su vez, tambien en el 4to piso,los
					alumnos pudeen acceder a centernares de libros dondaos por la ong
					donde labura mi amigo yisys y dondaos por alumnos pedir prestamos de
					libros ya sea para el aula o para leer en su casa. Tambien cuenta con
					Laboratorio de Ciencias Y un salon de usos multiples(SUM).
				</p>
			</TitleDescriptionVideo>
			<EspecialidadProgramas title="historia">
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
				<ImgGallery galleryImages={galleryImages} />
				<p>
					La Escuela comenzó a funcionar en la Avda. Belgrano 2640, y al
					respecto -dice el Profesor José De Leo, era en una casa antigua de dos
					plantas. La planta baja tenía entrepisos con un singular formato que
					mereció el nombre de “el submarino”.
				</p>
				<Button type="noBgBlue">
					<a href="https://www.wikipedia.org/" target="_blank" rel="noreferrer">
						Ver Más
					</a>
				</Button>
			</EspecialidadProgramas>
			<EspecialidadProgramas title="autoridades">
				<Autoridades />
			</EspecialidadProgramas>
		</div>
	);
}
