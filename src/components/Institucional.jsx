import Autoridades from './Autoridades';
import Button from './Button';
import TitleDescriptionVideo from './TitleDescriptionVideo';
import EspecialidadProgramas from './SubTitleAndDescription';
import ImgGallery from './ImgGallery';
import Banner from './Banner';

export default function Institucional() {
	return (
		<div className="specialtyCtn">
			<Banner img="https://lh3.googleusercontent.com/JQrffPqZ_dnUlCoU8SaxB6LWPoZgMPXU3I9_WfoRdKPoo4_cp9vbT7x_8lwEd5iVR9E-1N2Pt_bseZrVgWTZJJbITgm16QmepStE-Lc=w600" />

			<TitleDescriptionVideo
				especialidad="institucional"
				video="https://www.youtube.com/embed/6lHdXeJgwmo"
			>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					quia, ipsam hic non ad tempore molestias facilis sed aliquam. Porro ab
					repellendus provident odit dolorem vitae quam reiciendis alias nam.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					quia, ipsam hic non ad tempore molestias facilis sed aliquam. Porro ab
					repellendus provident odit dolorem vitae quam reiciendis alias
					nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consectetur quia, ipsam hic non ad tempore molestias facilis sed
					aliquam. Porro ab repellendus provident odit dolorem vitae quam
					reiciendis alias nam.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					quia, ipsam hic non ad tempore molestias facilis sed aliquam. Porro ab
					repellendus provident odit dolorem vitae quam reiciendis alias nam.
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
				<ImgGallery />
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
