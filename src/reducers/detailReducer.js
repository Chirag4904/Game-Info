const initialState = {
	movie: { o1: "" },
	screen: { o2: "" },
	platforms: { o3: "" },
};
const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_DETAIL":
			return {
				...state,
				movie: action.payload.movie,
				screen: action.payload.screen,
				platforms: action.payload.platforms,
			};
		default:
			return { ...state };
	}
};
export default detailReducer;
