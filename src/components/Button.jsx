import styled from 'styled-components';
const ButtonStyle = styled.button`
	cursor: pointer;
	border: none;
	display: inline-block;
	margin-top: 1.5em;
	padding: 14px 2em;
	color: var(--white);
	text-decoration: none;
	font-size: 18px;
	border-radius: 5px;

	&.bg {
		background: var(--blue);
		&:hover {
			background-color: var(--blue-hover);
		}
	}
	&.noBg {
		background: none;
		border: 1px solid var(--white);
		&:hover {
			background: #ffffff1f;
		}
	}
	&.noBgBlue {
		background: none;
		border: 1px solid var(--blue);
		color: var(--blue);
		&:hover {
			background: #2081e214;
		}
	}
`;
export default function Button({ children, type }) {
	return (
		<>
			{type === 'bg' ? (
				<ButtonStyle className="bg">{children}</ButtonStyle>
			) : type === 'noBg' ? (
				<ButtonStyle className="noBg">{children}</ButtonStyle>
			) : (
				<ButtonStyle className="noBgBlue">{children}</ButtonStyle>
			)}
		</>
	);
}
