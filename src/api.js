//Getting current date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

// //current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// const API_KEY = "dbceed12e440d492620b9f8d466bdc87";
const base_url = `https://api.themoviedb.org/3/discover/movie?api_key=dbceed12e440d492620b9f8d466bdc87&language=en-US`;

export const popularMoviesUrl = () =>
	`${start_url}popular${end_url}&language=en-US`;

//UPCOMING MOVIE
export const upcomingMoviesUrl = () =>
	`${start_url}upcoming${end_url}&language=en-US`;

//new movies
export const newMoviesUrl = () =>
	`${base_url}&sort_by=revenue.desc&release_date.gte=${lastYear}&release_date.lte=${currentDate}&with_original_language=en`;

//For movie details-
const start_url = "https://api.themoviedb.org/3/movie/";
const end_url = "?api_key=dbceed12e440d492620b9f8d466bdc87";

export const movieDetailUrl = (movie_id) => `${start_url}${movie_id}${end_url}`;
// export const platformDetailUrl = (movie_id) =>
// 	`${start_url}${movie_id}/watch/providers${end_url}`;
