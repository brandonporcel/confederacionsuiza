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
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		/* iframe {
			width: 100%;
			height:250px ;
		} */
		p {
			font-size: 16px;
		}
	}
`;
export default function SubTitleAndDescription({
	title,
	w,
	children,
	specialClass,
}) {
	return (
		<ProgramasCtn
			// style={{
			// 	width: `${w ? '100%' : '60%'}`,
			// }}
			style={{
				width: `${w && '100%'}`,
			}}
			className={`${specialClass ? specialClass : ''}`}
		>
			<h3>{title}</h3>
			{children}
		</ProgramasCtn>
	);
}
