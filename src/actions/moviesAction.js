import axios from "axios";
import { popularMoviesUrl, upcomingMoviesUrl, newMoviesUrl } from "../api";

//Action creator
export const loadMovies = () => async (dispatch) => {
	const popularData = await axios.get(
		`${popularMoviesUrl()}&page=${Math.floor(Math.random() * 3) + 1}`
	);
	const newMoviesData = await axios.get(
		`${newMoviesUrl()}&page=${Math.floor(Math.random() * 3) + 1}`
	);
	const upcomingData = await axios.get(
		`${upcomingMoviesUrl()}&page=${Math.floor(Math.random() * 3) + 1}`
	);

	dispatch({
		type: "FETCH_MOVIES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newMovies: newMoviesData.data.results,
		},
	});
};
