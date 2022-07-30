import styled from 'styled-components';
import ProgramaTable from './ProgramaTable';
const ProgramasCtn = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 20px;
	h3 {
		font-size: 22px;
		margin-bottom: 20px;
		color: var(--titles-color);
	}

	.programasTablas {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		max-width: 850px;
		margin-bottom: 20px;
	}
`;
export default function EspecialidadProgramas({ materias }) {
	return (
		<ProgramasCtn>
			<h3>Programas Curriculares</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, atque.
				Praesentium similique veritatis, repudiandae sint eos corrupti.
				Consectetur aspernatur tenetur debitis, repellendus necessitatibus in,
				neque, dolorum exercitationem voluptatem sunt soluta!
			</p>
			<div className="programasTablas">
				{materias.map(({ ano, materias, programas }, i) => (
					<ProgramaTable
						key={i}
						ano={ano}
						materias={materias}
						programas={programas}
					/>
				))}
			</div>
		</ProgramasCtn>
	);
}
