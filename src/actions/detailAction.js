import axios from "axios";
import { movieDetailUrl, platformDetailUrl } from "../api";
export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});
	// const platformData = await axios.get(platformDetailUrl(id));
	const detailData = await axios.get(
		`${movieDetailUrl(id)}&append_to_response=images,watch/providers`
	);
	const temp = detailData.data["watch/providers"].results.US;
	console.log(
		Object.keys(detailData.data["watch/providers"].results).length,
		"length"
	);
	// console.log(detailData.data["watch/providers"].results);
	const for_other_region_movies =
		detailData.data["watch/providers"].results[
			Object.keys(detailData.data["watch/providers"].results)[0]
		];

	// console.log(detailData);
	let finalPlatformData;
	if (temp !== undefined) {
		for (const key in detailData.data["watch/providers"].results.US) {
			// console.log(key);
			if (key !== "link") {
				finalPlatformData =
					detailData.data["watch/providers"].results.US[`${key}`];
			}
		}
	} else if (
		Object.keys(detailData.data["watch/providers"].results).length > 0
	) {
		finalPlatformData = for_other_region_movies.buy;
		console.log("after", finalPlatformData);
	} else {
		finalPlatformData = defaultPlatformData[0];
	}

	dispatch({
		type: "GET_DETAIL",
		payload: {
			movie: detailData.data,
			screen: detailData.data.images.backdrops,
			platforms: finalPlatformData,
		},
	});
};

const defaultPlatformData = [
	[
		{
			display_priority: 6,
			logo_path: "/hR9vWd8hWEVQKD6eOnBneKRFEW3.jpg",
			provider_id: 619,
			provider_name: "Star Plus",
		},
	],
];
