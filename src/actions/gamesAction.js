import axios from "axios";
import { popularGamesUrl } from "../api";

//Action creator
export const loadGames = () => async (patch) => {
	const popularData = await axios.get(popularGamesUrl());
	patch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
		},
	});
};
