import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ProyectoContainer = styled.div`
	background: var(--conocelasuiza-color);

	padding: 40px 0;
	.projectCtnBackground {
		background: var(--white);
		border-radius: 10px;
		width: 70%;
		margin: 0 auto;
		padding: 50px 100px;
		box-shadow: var(--shadow);
		h2 {
			font-size: 32px;
			color: var(--titles-color);
			margin-bottom: 20px;
			text-transform: capitalize;
		}
		.tags {
			color: var(--gray-third);
			display: flex;
			.dot-spacing {
				padding: 0 10px;
				cursor: default;
			}
			.specialty {
				text-transform: capitalize;
				font-weight: 500;
				color: var(--gray);
				cursor: pointer;
			}
		}
		.img-project-suiza {
			position: relative;
			height: 400px;
			width: 500px;
			margin: 20px auto 0;
			img {
				position: absolute;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	.ulLsit {
		list-style: initial;
		padding-left: 20px;
	}
	.subtitleClassProject {
		p,
		ul li {
			font-weight: 500;
			color: var(--gray);
			font-size: 17px;
		}
	}
`;
export default function ProjectContainer({
	title,
	specialty,
	mainImg,
	when,
	children,
}) {
	return (
		// proptypes
		<ProyectoContainer>
			<div className="projectCtnBackground">
				<h2>{title}</h2>
				<div className="tags">
					<span>{when}</span>
					<div className="dot-spacing">•</div>

					<Link
						className="specialty"
						to={`/${
							specialty === 'c'
								? 'computacion'
								: specialty === 'a'
								? 'automotores'
								: 'ciclobasico'
						}`}
					>
						{specialty === 'c'
							? 'computación'
							: specialty === 'a'
							? 'automotores'
							: 'Ciclo Básico'}
					</Link>
				</div>
				<div className="img-project-suiza">
					<img src={`${mainImg}`} alt={`${title}`} />
				</div>
				{children}
			</div>
		</ProyectoContainer>
	);
}
