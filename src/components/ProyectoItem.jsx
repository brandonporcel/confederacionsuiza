import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function ProyectoItem({
	title,
	description,
	year,
	thumbnail,
	specialty,
	link,
}) {
	console.log(specialty);

	const ProyectoItemCtn = styled.article`
		width: 300px;
		height: fit-content;
		border: 1px solid #e6e9ec;
		border-radius: 15px;
		&:hover {
			box-shadow: rgb(4 17 29 / 15%) 0px 0px 8px 0px;
			transition: box-shadow 0.1s ease 0s;
		}
		.projectImg {
			border-radius: 15px;
			height: 180px;
			width: 100%;
			position: relative;
			z-index: -1;
			&:after {
				content: '${specialty}';
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
			h5 {
				font-size: 16px;
				color: var(--gray);
			}
			small {
				font-size: 12px;
				font-weight: 500;
			}
			p {
				font-size: 14px;
				font-weight: 500;
			}
		}
	`;
	return (
		<ProyectoItemCtn>
			<Link to={link}>
				<div className="projectImg">
					<img src={thumbnail} alt={title} />
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
