const initialState = { movie: {}, screen: {} };
const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_DETAIL":
			return {
				...state,
				movie: action.payload.movie,
				screen: action.payload.screen,
			};
		default:
			return { ...state };
	}
};
export default detailReducer;
