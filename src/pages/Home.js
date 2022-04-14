import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";

import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	const { popular, upcoming, newGames } = useSelector((state) => state.games);
	return (
		<GameList>
			<h1>Upcoming Games</h1>
			<Games>
				{upcoming.map((game) => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
				))}
			</Games>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 4rem;
`;
export default Home;
