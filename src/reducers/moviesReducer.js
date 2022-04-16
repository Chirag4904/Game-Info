const initState = {
	popular: [],
	newMovies: [],
	upcoming: [],
	searched: [],
};
const moviesReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_MOVIES":
			return {
				...state,
				popular: action.payload.popular,
				upcoming: action.payload.upcoming,
				newMovies: action.payload.newMovies,
			};

		default:
			return { ...state };
	}
};

export default moviesReducer;
