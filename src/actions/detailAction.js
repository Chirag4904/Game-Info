import axios from "axios";
import { movieDetailUrl, platformDetailUrl } from "../api";
export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});
	const detailData = await axios.get(
		`${movieDetailUrl(id)}&append_to_response=images,watch/providers`
	);
	const platformData = await axios.get(platformDetailUrl(id));
	dispatch({
		type: "GET_DETAIL",
		payload: {
			movie: detailData.data,
			screen: detailData.data.images.backdrops,
			platforms: platformData.data.results.US.buy,
		},
	});
};
