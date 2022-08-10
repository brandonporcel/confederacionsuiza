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
					La ET N°26 Confederación Suizaes D.E 6 es una escuela secundaria
					técnica y pública de la ciudad de Buenos Aires ubicada en el barrio de
					Balvanera, CABA.
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
					La Escuela Técnica Confederacion Suiza es la institución de educación
					tecnológica más antigua del país, fundada hacia finales del siglo XIX
					por el Ingeniero ????????? , como la “Escuela Industrial de la
					Nación”. Inspirada en los modelos de los institutos politécnicos
					europeos y norteamericanos, dio lugar al desarrollo de las escuelas
					técnicas de todo el país y más tarde a la Universidad Tecnológica
					Nacional.
					<br />
					<br />
					El Ingeniero ????????? egresado como Ingeniero Civil del Departamento
					de Ingeniería de la Facultad de Ciencias Exactas de la Universidad de
					Buenos Aires había observado que las primeras industrias que se
					estaban radicando en el país con capitales extranjeros, traían del
					exterior personal de ingeniería capacitado para proyectar, construir y
					operar distintas industrias. Este personal tenía conocimientos
					teóricos algo más rudimentarios que el de los ingenieros argentinos,
					pero conocimientos íntimos de las tecnologías de esas épocas. Ellos no
					eran graduados universitarios, sino que egresados de escuelas
					industriales o institutos politécnicos, de sus respectivos países.
				</p>
				<ImgGallery galleryImages={galleryImages} />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in ea,
					quaerat similique non pariatur laborum molestias optio natus omnis
					totam explicabo dignissimos debitis ratione officia maxime possimus
					deleniti aliquid.
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
