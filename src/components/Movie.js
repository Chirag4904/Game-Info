import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import MovieDetail from "./MovieDetail";
import { Link } from "react-router-dom";
const Movie = ({ name, released, id, image }) => {
	const stringId = id.toString();
	// console.log(typeof stringId, "pathid");

	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		console.log(typeof stringId, stringId, "movie.js stringid");
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
		return <MovieDetail />;
	};

	return (
		<StyledMovie layoutId={stringId} onClick={loadDetailHandler}>
			<Link to={`/movie/${id}`}>
				<motion.h3 layoutId={`image ${stringId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					src={`https://image.tmdb.org/t/p/original${image}`}
					alt={name}
					key={id}
					layoutId={`image ${stringId}`}
				/>
			</Link>
		</StyledMovie>
	);
};

const StyledMovie = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;

	h3 {
		transform: translateY(-229px);
	}

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 1rem;
	}
`;
export default Movie;
