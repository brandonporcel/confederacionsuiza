import styled from 'styled-components';
import FooterContent from './FooterContent';

const FooterCtn = styled.footer`
	/* height: 200px; */
	/* height: min-content; */
	/* overflow-y: hidden; */
	background: var(--blue-footer);
	padding: 75px 75px 40px 75px;
	color: var(--white-font);

	.footer-bottom {
		border-top: 0.5px solid #387bbf;
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		padding-top: 5px;
		small {
			color: #c5d9ed;
		}
	}
`;
export default function Footer() {
	return (
		<FooterCtn id="contacto">
			<FooterContent />
			<div className="footer-bottom">
				<small>Av. Jujuy 255, CABA</small>
				<small>Sitio desarrollado por estudiantes de 6°10 2022</small>
			</div>
		</FooterCtn>
	);
}
