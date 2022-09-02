import styled from 'styled-components';
const DescripcionCtn = styled.div`
	width: 60%;
	margin: 0 auto;
	padding: 20px;
	text-align: center;
	h2 {
		font-size: 34px;
		margin: 10px 0 20px;
		color: var(--titles-color);
		text-transform: capitalize;
	}

	hr {
		margin: 20px 0;
		background-color: var(--gray-line);
	}

	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		iframe {
			width: 100%;
			height: 250px;
		}
		h2 {
			font-size: 28px;
		}
		p {
			font-size: 16px;
		}
	}
`;
export default function TitleDescriptionVideo({
	especialidad,
	video,
	children,
}) {
	return (
		<DescripcionCtn>
			<h2>{especialidad}</h2>
			{children}
			<hr />
			<iframe
				width="560"
				height="315"
				src={video}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</DescripcionCtn>
	);
}
