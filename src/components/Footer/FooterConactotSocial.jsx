import styled from 'styled-components';
import { telefono, mail } from '../../svg/svgAsImage';
import SocialLogos from './SocialLogos';
import ContactContext from '../../context/ContactContext';
import { useContext } from 'react';

const ContactSocial = styled.div`
	.contact {
		margin-bottom: 20px;
		&-item-ctn {
			color: var(--white);
			display: flex;
			align-items: center;
			margin-bottom: 10px;
			.svg {
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
		}
	}
`;

export default function FooterConactotSocial() {
	const { contactData } = useContext(ContactContext);
	const { number, mainMail } = contactData;
	return (
		<ContactSocial>
			<div className="contact">
				<div className="contact-item-ctn">
					<img className="svg" src={telefono} alt="telefono" />
					<span>{number}</span>
				</div>
				<div className="contact-item-ctn">
					<img className="svg" src={mail} alt="mail" />
					<a href={`mailto:${mainMail}`}>{mainMail}</a>
				</div>
			</div>
			<SocialLogos color="var(--white)" />
		</ContactSocial>
	);
}
