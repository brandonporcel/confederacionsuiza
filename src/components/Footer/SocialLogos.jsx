import React from 'react';
import Facebook from '../svg/Facebook';
import Instagram from '../svg/Instagram';
import Linkedin from '../svg/Linkedin';
import Youtube from '../svg/Youtube';
import styled from 'styled-components';
import { useContext } from 'react';
import ContactContext from '../../context/ContactContext';
const SocialCtn = styled.div`
	gap: 10px;
	display: grid;
	grid-template-columns: repeat(4, 30px);
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		justify-content: center;
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		justify-content: center;
	}
`;
export default function SocialLogos({ color, specialClass }) {
	const { socialLinks } = useContext(ContactContext);
	const { facebook, instagram, youtube, linkedin } = socialLinks;
	return (
		<SocialCtn className={`${specialClass ? specialClass : ''}`}>
			<a
				href={facebook}
				target={'_blank'}
				rel="noreferrer"
				aria-label="Facebook Escuela Tecnica confederacion suiza"
			>
				<Facebook color={color} />
			</a>
			<a
				href={instagram}
				target={'_blank'}
				rel="noreferrer"
				aria-label="Instagram Escuela Tecnica confederacion suiza"
			>
				<Instagram color={color} />
			</a>
			<a
				href={youtube}
				target={'_blank'}
				rel="noreferrer"
				aria-label="Youtube Escuela Tecnica confederacion suiza"
			>
				<Youtube color={color} />
			</a>
			<a
				href={linkedin}
				target={'_blank'}
				rel="noreferrer"
				aria-label="Linkedin Escuela Tecnica confederacion suiza"
			>
				<Linkedin color={color} />
			</a>
		</SocialCtn>
	);
}
