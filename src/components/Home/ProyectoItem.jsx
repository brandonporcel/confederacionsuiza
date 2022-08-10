import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProyectoItemCtn = styled.article`
	width: 300px;
	height: fit-content;
	border: 1px solid var(--gray-line);
	border-radius: 15px;
	&:hover {
		box-shadow: var(--shadow);
		transition: box-shadow 0.1s ease 0s;
	}
	.projectImg {
		border-radius: 15px;
		height: 180px;
		width: 100%;
		position: relative;
		z-index: -1;
		.projectSpecialty {
			position: absolute;
			border-radius: 50%;
			background: var(--white);
			z-index: 30;
			left: 130px;
			bottom: -20px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px 10px 10px;
		}
		img {
			height: 100%;
			object-position: center;
			object-fit: cover;
			width: 100%;
			border-radius: 15px 15px 0 0;
		}
	}
	.projectBody {
		text-align: center;
		padding: 10px 20px;
		margin-top: 10px;
		color: var(--gray-secondary);
		max-height: 115px;
		overflow: hidden;
		h5 {
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
			height: 52px;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
		}
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
					<img src={thumbnail} alt={title} />
					<div className="projectSpecialty">{specialty}</div>
				</div>
				<div className="projectBody">
					<h5>{title}</h5>
					<small>{year}</small>
					<p>{description}</p>
				</div>
			</Link>
		</ProyectoItemCtn>
	);
}
