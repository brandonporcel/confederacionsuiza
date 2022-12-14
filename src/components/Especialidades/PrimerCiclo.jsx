import EspecialidadDescripcion from '../TitleDescriptionVideo';
import EspecialidadProgramas from '../SubTitleAndDescription';
import ProgramasTablas from './ProgramasTablas';
import Banner from '../Banner';
import SubTitleAndDescription from '../SubTitleAndDescription';
const primerCicloMaterias = [
	{
		ano: '1',
		programas:
			'https://drive.google.com/drive/folders/1QKVmEYNPEtTEHEBBKn6kbaRQkilGT6ur?usp=sharing',
		materias: [
			'historia',
			'ed. física',
			'inglés',
			'educación artistica',
			'matemática',
			'lengua y literatura',
			'biología',
			'ed. ciudadana',
			'tecnología de la representación',
			'geografía',
			'taller',
		],
	},
	{
		ano: '2',
		programas:
			'https://drive.google.com/drive/folders/1wL87b93OEhqXbDok9sLe_6gzSK_B76qa?usp=sharing',
		materias: [
			'historia',
			'ed. física',
			'inglés',
			'educación artistica',
			'matemática',
			'lengua y literatura',
			'biología',
			'ed. ciudadana',
			'tecnología de la representación',
			'geografía',
			'Química',
			'Física',
			'taller',
		],
	},
];
export default function PrimerCiclo() {
	return (
		<div className="specialtyCtn">
			<Banner img="./images/primerciclo-banner.jpg" />
			<EspecialidadDescripcion
				especialidad="primer ciclo"
				video="https://www.youtube.com/embed/kpArfnc-tTQ"
			>
				<p>
					El Primer Ciclo se compone de 1er y 2do año y su proposito es que
					todos los alumnos lleguen al primer año de la especialidad con el
					nivel necesario, tanto de su disciplina elegida, como de conocimiento
					general.
				</p>
				<p>
					Para lograr tales conociemientos el alumno cursara materias teoricas
					como biologia, matemática o historia y concurrira a Taller en un
					horario contraturno. Es decir, si cursa las materias teoricas en el
					turno mañana, el estudiante asisistirá a taller a la tarde, y
					viceversa.
				</p>
			</EspecialidadDescripcion>
			<EspecialidadProgramas title="Programas Curriculares">
				<ProgramasTablas materias={primerCicloMaterias}></ProgramasTablas>
			</EspecialidadProgramas>
			<SubTitleAndDescription title="taller">
				<p>
					En el taller se transmiten habilidades, destrezas y conocimientos
					teóricos-prácticos en la que los chicos puedan trabajar en proyectos
					basados en problemas reales con el acompañamiento del profesor como
					guía-facilitador. En el año rotaran en distintas secciones de taller
					cada 2 meses.
				</p>
				<br />
				<p>
					Primer año: Metales, Temas Generales, Electricidad, Carpintería e
					Informática.
				</p>
				<br />
				<p>
					Segundo año: Metales II, Temas Generales II, Electricidad II, Tornería
					e Informática II.{' '}
				</p>
			</SubTitleAndDescription>
		</div>
	);
}
