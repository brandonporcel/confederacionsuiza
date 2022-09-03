import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ProyectoContainer = styled.main`
	background: var(--conocelasuiza-color);
	padding: 40px 0;
	.projectCtnBackground {
		background: var(--white);
		border-radius: 10px;
		width: 70%;
		margin: 0 auto;
		padding: 50px 100px;
		box-shadow: var(--shadow-low);
		border: 1px solid var(--gray-line);
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

	.videoContainer {
		min-width: 400px;
		max-width: 100%;
		video {
			width: 100%;
		}
	}
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		padding: 25px 15px;
		.projectCtnBackground {
			width: 100%;
			padding: 20px 0px;
			.titleAndImg {
				padding: 0 15px;
				h2 {
					font-size: 26px;
				}
			}
		}
		.projectCtnBackground {
			.img-project-suiza {
				max-width: 100%;
				max-height: 300px;
				min-height: min-content;
				display: flex;
				align-items: center;

				border-radius: 10px;
				height: 245px;
				margin: 25px 0;
				/* border: 1px solid var(--gray-line); */
				img {
					width: 100%;
					border-radius: 10px;
				}
			}
		}
		.subtitleClassProject {
			p,
			ul li {
				font-size: 16px;
				font-weight: 400;
			}
		}
		.videoContainer {
			min-width: 100%;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		/* padding: 25px 15px; */
		.projectCtnBackground {
			width: 80%;
			padding: 20px 0;
			.titleAndImg {
				padding: 0 15px;
				h2 {
					font-size: 28px;
				}
			}
		}
		.projectCtnBackground {
			.img-project-suiza {
				width: 450px;
				height: 320px;
			}
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		.projectCtnBackground {
			width: 75%;
			padding: 20px;
		}
		.titleAndImg {
			padding: 0 20px;
			h2 {
				font-size: 30px;
			}
		}
		.projectCtnBackground {
			.img-project-suiza {
				width: 475px;
				height: 340px;
			}
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
				<div className="titleAndImg">
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
				</div>
				{children}
			</div>
		</ProyectoContainer>
	);
}
