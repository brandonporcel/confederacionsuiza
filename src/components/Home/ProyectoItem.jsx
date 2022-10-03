import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProyectoItemCtn = styled.article`
	min-width: 300px;
	max-width: min-content;
	/* max-width: 300px; */

	height: fit-content;
	border: 1px solid var(--gray-line);
	border-radius: 15px;
	/* &:focus { */
	/* outline: var(--blue) solid 1px; */
	/* padding: 5px; */
	/* } */
	margin: 5px 0;
	&:hover {
		box-shadow: var(--shadow);
		transition: box-shadow 0.1s ease 0s;
	}

	&:hover .projectImg img {
		transform: scale(1.1);
	}
	.projectImg {
		border-radius: 15px 15px 0 0;
		height: 180px;
		width: 100%;
		position: relative;
		z-index: -1;
		overflow: hidden;

		img {
			height: 100%;
			transition: transform 400ms ease-out;
			object-position: center;
			object-fit: cover;
			width: 100%;
			border-radius: 15px 15px 0 0;
		}
	}
	.projectBody {
		text-align: center;
		padding: 10px 20px;
		/* margin-top: 10px; */
		color: var(--gray-secondary);
		max-height: 115px;
		overflow: hidden;
		h4 {
			font-size: 16px;
			color: var(--gray);
			text-transform: capitalize;
		}
		small {
			font-size: 12px;
			font-weight: 500;
		}
		p {
			font-size: 14px;
			font-weight: 500;
			overflow: hidden;
			height: 50px;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			text-transform: capitalize;
		}
	}

	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		&:hover .projectImg img {
			transform: initial;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		min-width: 250px;
	}
`;
export default function ProyectoItem({
	title,
	description,
	year,
	thumbnail,
	specialty,
	link,
}) {
	return (
		<ProyectoItemCtn>
			<Link to={`${link}`}>
				<div className="projectImg">
					<img src={thumbnail} alt={title} loading="lazy" />
				</div>
				<div className="projectBody">
					<h4>{title}</h4>
					<small>{year}</small>
					<p>{description}</p>
				</div>
			</Link>
		</ProyectoItemCtn>
	);
}
