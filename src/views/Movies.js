import React from "react";
import themoviedbAPI from "../services/themoviedbAPI";
import Search from "../components/Search";
import ListItem from "../components/ListItem";

class Movies extends React.Component {
 state = { searchedMovies: [], error: null };

 componentDidMount() {
  let isQuery = new URLSearchParams(this.props.location.search).get("query");
  if (isQuery) {
   themoviedbAPI
    .search(isQuery)
    .then(data => this.setState({ searchedMovies: data.results }))
    .catch(er => this.setState({ error: er }));
  }
 }

 componentDidUpdate(prevProps, prevState) {
  let prevQuery = new URLSearchParams(prevProps.location.search).get("query");
  let nextQuery = new URLSearchParams(this.props.location.search).get("query");
  if (prevQuery !== nextQuery) {
   themoviedbAPI.search(nextQuery).then(data => this.setState({ searchedMovies: data.results }));
  }
 }

 handleChangeQuery = query => {
  console.log(this.props);
  this.props.history.push({
   ...this.props.location, //pathname: this.props.location.pathname,
   search: `query=${query}`
  });
 };

 render() {
  return (
   <>
    <Search onSubmit={this.handleChangeQuery} />

    {this.state.error && <p>Error:{this.state.error}</p>}

    <ul>
     {this.state.searchedMovies.map(movie => (
      <ListItem {...this.props} key={movie.id} id={movie.id} title={movie.title} />
     ))}
    </ul>
   </>
  );
 }
}

export default Movies;
