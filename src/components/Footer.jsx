import styled from 'styled-components';
import FooterContent from './FooterContent';

const FooterCtn = styled.footer`
	background: var(--blue-footer);
	color: var(--white);
	.footer-bottom {
		border-top: 0.5px solid #387bbf;
		margin-top: 40px;
		padding-top: 5px;
		small {
			color: #c5d9ed;
		}
	}
`;
export default function Footer() {
	return (
		<FooterCtn id="contacto" className="section">
			<FooterContent />
			<div className="footer-bottom flexBetween">
				<small>Av. Jujuy 255, CABA</small>

				<small>
					<a
						href="https://github.com/brandonporcel/confederacionsuiza"
						target="_blank"
						rel="noreferrer"
					>
						Sitio desarrollado por estudiantes de 6°10 2022
					</a>
				</small>
			</div>
		</FooterCtn>
	);
}
