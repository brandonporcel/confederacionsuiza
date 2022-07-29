import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function EspecialidadItem({
	title,
	description,
	thumbnail,
	specialty,
}) {
	const EspecialidadItemCtn = styled.div`
        height: 575px;
        width: 325px;
        border-radius: 10px;
        position: relative;
        &:hover {
            box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
            transition: box-shadow 0.1s ease 0s;
        }
        a {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(${thumbnail}) no-repeat center;

                no-repeat center;
            background-size: cover;
            border-radius: 10px;
            
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
            }
            p{
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
	return (
		<EspecialidadItemCtn>
			<Link to={`/${specialty}`}>
				<div className="content">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</Link>
		</EspecialidadItemCtn>
	);
}
