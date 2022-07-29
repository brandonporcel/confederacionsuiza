import styled from 'styled-components';
import { telefono, mail } from '../svg/svgAsImage';
import Facebook from './svg/Facebook';
import Instagram from './svg/Instagram';
import Linkedin from './svg/Linkedin';
import Youtube from './svg/Youtube';
const ContactSocial = styled.div`
	.contact {
		margin-bottom: 20px;
		&-item-ctn {
			color: var(--white);
			display: flex;
			align-items: center;
			margin-bottom: 5px;
			.svg {
				width: 24px;
				height: 24px;
				margin-right: 10px;
			}
		}
	}
	.social {
		/* background: red; */
		gap: 10px;
		display: grid;
		grid-template-columns: repeat(4, 30px);
	}
`;
export default function FooterConactotSocial() {
	return (
		<ContactSocial>
			<div className="contact">
				<div className="contact-item-ctn">
					<img className="svg" src={telefono} alt="telefono" />
					<span>11 4931-1947</span>
				</div>
				<div className="contact-item-ctn">
					<img className="svg" src={mail} alt="mail" />
					<a href="mailto:et26@gmail.com">et26@gmail.com</a>
				</div>
			</div>
			<div className="social">
				<a
					href="https://www.facebook.com/tecnica26/"
					target={'_blank'}
					rel="noreferrer"
				>
					<Facebook />
				</a>
				<a
					href="https://instagram.com/lasuizacompu"
					target={'_blank'}
					rel="noreferrer"
				>
					<Instagram />
				</a>
				<a
					href="https://www.youtube.com/channel/UCTKTGa96qO3ESC1t2JqzfzQ"
					target={'_blank'}
					rel="noreferrer"
				>
					<Youtube />
				</a>
				<a
					href="https://www.linkedin.com/school/et26suiza/"
					target={'_blank'}
					rel="noreferrer"
				>
					<Linkedin />
				</a>
			</div>
		</ContactSocial>
	);
}
