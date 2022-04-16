import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../actions/moviesAction";
import Movie from "../components/Movie";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const Home = () => {
	const location = useLocation();
	const pathId = location.pathname.split("/")[2];
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadMovies());
	}, [dispatch]);
	// const start_index = Math.floor(Math.random() * 10);
	// const final_index = start_index + 10;
	const start_index = 0;
	const final_index = 10;

	const { popular, upcoming, newMovies } = useSelector((state) => state.movies);
	return (
		<MovieList>
			{pathId && <MovieDetail />}
			<h2>Popular Movies</h2>
			<Movies>
				{popular.slice(start_index, final_index).map((movie) => (
					<Movie
						name={movie.original_title}
						released={movie.release_date}
						id={movie.id}
						image={movie.backdrop_path}
						key={movie.id}
					/>
				))}
			</Movies>
			<h2>New Movies</h2>
			<Movies>
				{newMovies.slice(start_index, final_index).map((movie) => (
					<Movie
						name={movie.original_title}
						released={movie.release_date}
						id={movie.id}
						image={movie.backdrop_path}
						key={movie.id}
					/>
				))}
			</Movies>
			<h2>Upcoming Movies</h2>
			<Movies>
				{upcoming.slice(start_index, final_index).map((movie) => (
					<Movie
						name={movie.original_title}
						released={movie.release_date}
						id={movie.id}
						image={
							movie.backdrop_path ? movie.backdrop_path : movie.poster_path
						}
						key={movie.id}
					/>
				))}
			</Movies>
		</MovieList>
	);
};

const MovieList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Movies = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 4.5rem;
`;
export default Home;
// https://api.themoviedb.org/3/movie/157336?api_key=dbceed12e440d492620b9f8d466bdc87&append_to_response=images
