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
			color: #dde8ff;
		}
	}
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		grid-template-columns: 1fr;
		justify-content: center;
		.left {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.contact {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.right {
			grid-template-columns: repeat(auto-fill, 150px);
			justify-content: center;
		}
		.footer-bottom {
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			padding-top: 10px;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		grid-template-columns: 1fr;
		justify-content: center;
		.left {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.contact {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.right {
			grid-template-columns: repeat(3, 150px);
			justify-content: center;
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
