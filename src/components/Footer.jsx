import styled from 'styled-components';
import {
	telefono,
	mail,
	facebook,
	instagram,
	linkedin,
} from '../svg/svgAsImage';
const FooterCtn = styled.footer`
	/* height: 200px; */
	background: var(--blue-footer);
	padding: 75px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	/* overflow-y: hidden; */
	color: var(--white-font);

	.right {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		padding-top: 30px;
	}
	.left {
		.contact {
			&-item-ctn {
				display: flex;
				align-items: center;
				margin-bottom: 5px;
			}
		}
		.svg {
			width: 24px;
			height: 24px;
			margin-right: 10px;
		}
		.logo-text {
			display: flex;
			align-items: center;
			.logo-footer-ctn {
				width: 100px;
				height: 100px;
			}
			.title-footer {
				span {
					display: block;
					font-weight: 500;
				}
			}
		}
	}
`;
export default function Footer() {
	return (
		<FooterCtn>
			<div className="left">
				<div className="logo-text">
					<div className="logo-footer-ctn">
						<img src="./images/logoblanco.webp" alt="" />
					</div>
					<h3 className="title-footer">
						<span>Escuela Técnica</span> Confederacion Suiza
					</h3>
				</div>
				<div className="contact-social">
					<div className="contact">
						<div className="contact-item-ctn">
							<img className="svg" src={telefono} alt="" />
							<span>11 4931-1947</span>
						</div>
						<div className="contact-item-ctn">
							<img className="svg" src={mail} alt="" />
							<span>11 4931-1947</span>
						</div>
					</div>
					<div className="social"></div>
				</div>
			</div>
			<div className="right">
				<div className="escuela">
					<h4>Escuela</h4>
				</div>
				<div className="especialidades">
					<h4>Especialidades</h4>
				</div>
				<div className="mas">mas</div>
			</div>
		</FooterCtn>
	);
}
