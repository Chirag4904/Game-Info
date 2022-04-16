import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const MovieDetail = () => {
	const { screen, movie, platforms } = useSelector((state) => state.detail);
	console.log(screen);
	return (
		<CardShadow>
			<Detail>
				<Stats>
					<div className="rating">
						<h3>{movie.title}</h3>
						<p>Popularity: {movie.popularity}</p>
					</div>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{platforms.slice(0, 5).map((platform) => (
								// <div className="platform_logo">
								<h3 key={platform.provider_id}>{platform.provider_name}</h3>
								// <img
								// 	src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
								// 	alt=""
								// />
								// </div>
							))}
						</Platforms>
					</Info>
				</Stats>
				<Media>
					<img
						src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
						alt={movie.title}
					/>
				</Media>
				<Description>
					<p>{movie.overview}</p>
				</Description>
				<Gallery>
					{screen.slice(6, 11).map((screenshot) => (
						<img
							src={`https://image.tmdb.org/t/p/original${screenshot.file_path}`}
							alt={screenshot.file_path}
							// key={movie.i}
						/>
					))}
				</Gallery>
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
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	img {
		width: 100%;
	}
`;

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled(motion.div)`
	text-align: center;
`;

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img {
		margin-left: 3rem;
	}
`;

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
		border-radius: 10px;
	}
`;

const Description = styled(motion.div)`
	margin: 5rem 0;
`;

const Gallery = styled(motion.div)`
	img {
		margin: 0.5rem 0;
		border-radius: 2rem 0 2rem 0;
	}
`;
export default MovieDetail;
