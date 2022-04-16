import axios from "axios";
import { movieDetailUrl } from "../api";
export const loadDetail = (id) => async (dispatch) => {
	const detailData = await axios.get(movieDetailUrl(id));
	const screenshotData = await axios.get(
		`${movieDetailUrl(id)}&append_to_response=images`
	);
	dispatch({
		type: "GET_DETAIL",
		payload: {
			movie: detailData.results,
			screen: screenshotData.data,
		},
	});
};
