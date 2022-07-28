import styled from 'styled-components';
const ButtonStyle = styled.button`
	cursor: pointer;
	border: none;
	display: inline-block;
	margin-top: 1.5em;
	padding: 14px 2em;
	color: var(--white-font);
	text-decoration: none;
	font-size: 18px;
	border-radius: 5px;
	margin-right: 20px;
	&.bg {
		background: var(--btn-blue);
		&:hover {
			background-color: var(--btn-blue-hover);
		}
	}
	&.noBg {
		background: none;
		border: 1px solid var(--white-font);
		&:hover {
			background: #ffffff1f;
		}
	}
`;
export default function Button({ children, type }) {
	return (
		<>
			{type === 'bg' ? (
				<ButtonStyle className="bg">{children}</ButtonStyle>
			) : (
				<ButtonStyle className="noBg">{children}</ButtonStyle>
			)}
		</>
	);
}
