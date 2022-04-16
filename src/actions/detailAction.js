import axios from "axios";
import { movieDetailUrl, platformDetailUrl } from "../api";
export const loadDetail = (id) => async (dispatch) => {
	const detailData = await axios.get(
		`${movieDetailUrl(id)}&append_to_response=images,watch/providers`
	);
	const platformData = await axios.get(platformDetailUrl(id));
	// console.log(platformData.data.results);
	// console.log(detailData);
	dispatch({
		type: "GET_DETAIL",
		payload: {
			movie: detailData.data,
			screen: detailData.data.images.backdrops,
			platforms: platformData.data.results.US.buy,
		},
	});
};
