import React from "react";
import style from "./CardMovie.module.css";
import themoviedbAPI from "../../services/themoviedbAPI";
import PropTypes from "prop-types";

let CardMovie = ({ movie, genres }) => {
 movie.poster_path = movie.poster_path
  ? movie.poster_path
  : (movie.poster_path = "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"); // Альтернатива defaultProps, который не срабатывает нa null
 return (
  movie && (
   <div className={style.container}>
    <img className={style.img} src={`${themoviedbAPI.baseUrlForImg}${movie.poster_path}`} alt="pic" />
    <div className={style.description}>
     <h2>
      {movie.title} &#40;{movie.release_date.slice(0, 4)}&#41;
     </h2>
     <p>User Score: {movie.vote_average * 10} %</p>
     <h3>Overview</h3>
     <p>{movie.overview}</p>
     <h3>Genres</h3>
     <p>{genres}</p>
    </div>
   </div>
  )
 );
};

CardMovie.propTypes = {
 movie: PropTypes.shape({
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string
 })
};

export default CardMovie;
