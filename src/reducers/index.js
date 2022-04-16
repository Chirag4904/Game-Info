import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import detailReducer from "./detailReducer";
// const initState = {
// 	name: "",
// 	isLogged: false,
// };
// const userReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		default:
// 			return { ...state };
// 	}
// };

const rootReducer = combineReducers({
	movies: moviesReducer,
	detail: detailReducer,
});

export default rootReducer;
