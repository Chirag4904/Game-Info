import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const MovieDetail = () => {
	const { screen, movie, platforms } = useSelector((state) => state.detail);
	console.log(platforms);
	return (
		<CardShadow>
			<Detail>
				<div className="stats">
					<div className="rating">
						<h3>{movie.title}</h3>
						<p>Popularity: {movie.popularity}</p>
					</div>
					<div className="info">
						<h3>Platforms</h3>
						<div className="platforms">
							{platforms.map((platform) => (
								// <div className="platform_logo">
								<h3 key={platform.provider_id}>{platform.provider_name}</h3>
								// <img
								// 	src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
								// 	alt=""
								// />
								// </div>
							))}
						</div>
					</div>
				</div>
				<div className="media">
					<img
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						alt={movie.title}
					/>
				</div>
				<div className="description">
					<p>{movie.overview}</p>
				</div>
				<div className="gallery">
					{screen.slice(6, 12).map((screenshot) => (
						<img
							src={`https://image.tmdb.org/t/p/original${screenshot.file_path}`}
							alt={screenshot.file_path}
							// key={movie.i}
						/>
					))}
				</div>
			</Detail>
		</CardShadow>
	);
};

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.3rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
		border-radius: 1rem;
	}
	&::-webkit-scrollbar-track {
		background-color: white;
		border-radius: 1rem;
	}
`;

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 20rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;
export default MovieDetail;
