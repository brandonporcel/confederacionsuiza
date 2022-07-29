import styled from 'styled-components';
export default function Novedades() {
	const NovedadesCtn = styled.section`
		text-align: center;
		padding-bottom: 0px;
		.sectionTitle {
			color: var(--blue);
		}
		iframe {
			width: 90%;
		}
	`;
	return (
		<NovedadesCtn className="section">
			<h2 className="sectionTitle">FORMULARIO DE BECA ALIMENTARIA 2022</h2>
			<iframe
				src="https://drive.google.com/file/d/1yQm1j_j0H0hCrUmjbsuFqWMvMIQWxYZd/preview"
				width="640"
				height="480"
				allow="autoplay"
				title="FORMULARIO DE BECA ALIMENTARIA 2022"
			></iframe>
		</NovedadesCtn>
	);
}
