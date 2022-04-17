import axios from "axios";
import { movieDetailUrl } from "../api";
export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});
	const detailData = await axios.get(
		`${movieDetailUrl(id)}&append_to_response=images,watch/providers`
	);
	const temp = detailData.data["watch/providers"].results.US;
	// console.log(detailData.data["watch/providers"].results);
	const for_other_region_movies =
		detailData.data["watch/providers"].results[
			Object.keys(detailData.data["watch/providers"].results)[0]
		];
	let finalPlatformData;
	if (temp !== undefined) {
		// console.log(1);
		for (const key in detailData.data["watch/providers"].results.US) {
			if (key !== "link") {
				finalPlatformData =
					detailData.data["watch/providers"].results.US[`${key}`];
			}
		}
	} else if (
		Object.keys(detailData.data["watch/providers"].results).length > 0
	) {
		// console.log(for_other_region_movies);
		for (const key in for_other_region_movies) {
			if (key !== "link") {
				finalPlatformData = for_other_region_movies[`${key}`];
			}
		}
		// finalPlatformData = for_other_region_movies.flatrate;
		console.log("after", finalPlatformData);
	} else {
		// console.log(3);
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
			provider_name: "Not available",
		},
	],
];
