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
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		padding: 12px 1em;
		font-size: 17px;
	}

	@media only screen and (min-width: 676px) and (max-width: 768px) {
		padding: 12px 1em;
		font-size: 18px;
	}
	/* Small screens, laptops */
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding: 12px 1em;
		font-size: 18px;
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
