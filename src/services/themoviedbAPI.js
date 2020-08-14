const baseURL = "https://api.themoviedb.org/3/";
const baseUrlForImg = "https://image.tmdb.org/t/p/w500";

let trend = () =>
 fetch(`${baseURL}trending/movie/day?api_key=62d44aec954e70e62cd2b71881d93db4`).then(res => res.json());

let detail = movieId =>
 fetch(`${baseURL}movie/${movieId}?api_key=62d44aec954e70e62cd2b71881d93db4`).then(res => res.json());

let genreMap = () =>
 fetch(`${baseURL}genre/movie/list?api_key=62d44aec954e70e62cd2b71881d93db4`).then(r => r.json());

let search = query =>
 fetch(`${baseURL}search/movie?api_key=62d44aec954e70e62cd2b71881d93db4&query=${query}&page=1`).then(r =>
  r.json()
 );

let credits = id =>
 fetch(`${baseURL}movie/${id}/credits?api_key=62d44aec954e70e62cd2b71881d93db4&page=1`).then(r => r.json());

let reviews = id =>
 fetch(`${baseURL}movie/${id}/reviews?api_key=62d44aec954e70e62cd2b71881d93db4&page=1`).then(r => r.json());

export default { trend, detail, baseUrlForImg, genreMap, search, credits, reviews };
