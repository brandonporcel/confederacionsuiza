import { Link } from 'react-router-dom';
import styled from 'styled-components';
const EspecialidadItemCtn = styled.div`
	height: 550px;
	min-width: 325px;
	border-radius: 10px;
	position: relative;
	margin-bottom: 10px;
	&:hover {
		box-shadow: var(--shadow);
		transition: box-shadow 0.1s ease 0s;
	}
	a {
		position: absolute;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-radius: 10px;
	}
	a.visible {
		background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg');
	}
	.content {
		color: var(--white);
		position: absolute;
		bottom: 0;
		padding: 20px;
		border-radius: 10px;
		background-image: linear-gradient(
			rgba(48, 51, 57, 0) 0%,
			rgba(62, 63, 64, 0.9) 75.16%
		);

		h4 {
			margin-bottom: 20px;
			font-size: 20px;
		}
		p {
			height: 52px;
			font-size: 14px;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
`;
export default function EspecialidadItem({
	title,
	description,
	thumbnail,
	linkToSpecialty,
	toTop,
}) {
	return (
		<EspecialidadItemCtn onClick={toTop}>
			<Link
				to={`/${linkToSpecialty}`}
				className={'lazy-background'}
				style={{ backgroundImage: `url(${thumbnail}) ` }}
			>
				<div className="content">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</Link>
		</EspecialidadItemCtn>
	);
}
