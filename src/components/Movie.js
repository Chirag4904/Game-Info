import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import MovieDetail from "./MovieDetail";

const Movie = ({ name, released, id, image }) => {
	// const base_image_url = "https://image.tmdb.org/t/p/original";
	// const image_url = `${base_image_url}${image}`;
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
		return <MovieDetail />;
	};
	return (
		<StyledMovie onClick={loadDetailHandler}>
			<h3>{name}</h3>
			<p>{released}</p>
			<img src={`https://image.tmdb.org/t/p/original${image}`} alt={name} />
		</StyledMovie>
	);
};

const StyledMovie = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	/* h3 {
		padding: 1.5rem;
	} */

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
export default Movie;
