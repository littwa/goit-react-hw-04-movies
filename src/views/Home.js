import React from "react";
import themoviedbAPI from "../services/themoviedbAPI";
import ListItem from "../components/ListItem";

class Home extends React.Component {
 state = {
  trendMovies: [],
  error: null
 };

 componentDidMount() {
  themoviedbAPI
   .trend()
   .then(data => this.setState({ trendMovies: data.results }))
   .catch(er => this.setState({ error: er }));
 }

 render() {
  return (
   <>
    {this.state.error && <p>Error:{this.state.error}</p>}

    <h2>Tranding today</h2>
    <ul>
     {this.state.trendMovies.map(movie => (
      <ListItem {...this.props} key={movie.id} id={movie.id} title={movie.title} />
     ))}
    </ul>
   </>
  );
 }
}

export default Home;
