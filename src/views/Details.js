import React from "react";
import themoviedbAPI from "../services/themoviedbAPI";
import CardMovie from "../components/CardMovie/CardMovie";
import { NavLink, Route } from "react-router-dom";
import Credits from "../components/Credits/Credits";
import Reviews from "../components/Reviews";
import routes from "../services/routes";

class Details extends React.Component {
 state = { movie: null, genres: [], error: null };

 componentDidMount() {
  let idMovie = this.props.match.params.movId;
  themoviedbAPI
   .detail(idMovie)
   .then(data => {
    this.setState({
     movie: data,
     genres: data.genres.map(el => " " + el.name).toString()
    });
   })
   .catch(er => this.setState({ error: er }));
 }

 handleClick = () => {
  const { state } = this.props.location;
  if (state && state.from) {
   return this.props.history.push(state.from);
  }
  this.props.history.push(routes.home);
 };

 render() {
  const { state } = this.props.location;
  let stateFrom = state && state.from ? state.from : routes.home;

  return (
   <>
    <button onClick={this.handleClick}>&#9668; Go back</button>

    {this.state.error && <p>Error:{this.state.error}</p>}

    {this.state.movie && (
     <CardMovie
      movie={this.state.movie}
      genres={this.state.genres}
      poster_path={this.state.movie.poster_path}
     />
    )}

    <hr />
    <p>Additional information</p>
    <ul>
     <li>
      <NavLink
       to={{
        pathname: `${this.props.match.url}${routes.cast}`,
        state: { from: stateFrom }
       }}
      >
       Cast
      </NavLink>
     </li>
     <li>
      <NavLink to={{ pathname: `${this.props.match.url}${routes.reviews}`, state: { from: stateFrom } }}>
       Reviews
      </NavLink>
     </li>
    </ul>
    <hr />

    {this.state.movie && (
     <Route
      path={`${this.props.match.path}${routes.cast}`}
      render={props => <Credits {...props} id={this.state.movie.id} />}
     />
    )}
    {this.state.movie && (
     <Route
      path={`${this.props.match.path}${routes.reviews}`}
      render={props => <Reviews {...props} id={this.state.movie.id} />}
     />
    )}
   </>
  );
 }
}

export default Details;
