import styled from 'styled-components';
import {
	telefono as telefonoIcon,
	mail as mailIcon,
} from '../../svg/svgAsImage';
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
	const { telefono, regencia } = contactData;
	return (
		<ContactSocial>
			<div className="contact">
				<div className="contact-item-ctn">
					<img className="svg" src={telefonoIcon} alt="telefono" />
					<span>{telefono}</span>
				</div>
				<div className="contact-item-ctn">
					<img className="svg" src={mailIcon} alt="mail" />
					<a href={`mailto:${regencia}`}>{regencia}</a>
				</div>
			</div>
			<SocialLogos color="var(--white)" />
		</ContactSocial>
	);
}
