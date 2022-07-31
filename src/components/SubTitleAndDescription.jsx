import styled from 'styled-components';
const ProgramasCtn = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 20px;
	h3 {
		font-size: 22px;
		margin-bottom: 20px;
		color: var(--titles-color);
		text-transform: capitalize;
	}
`;
export default function SubTitleAndDescription({ title, w, children }) {
	return (
		<ProgramasCtn
			style={{
				width: `${w ? '100%' : '60%'}`,
			}}
		>
			<h3>{title}</h3>
			{children}
		</ProgramasCtn>
	);
}
