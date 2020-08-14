import React from "react";
import PropTypes from "prop-types";
// import fetchAPI from "../services/themoviedbAPI";

class Search extends React.Component {
 static propTypes = { onSubmit: PropTypes.func.isRequired };

 state = { inputValue: "" };
 handleChange = e => {
  e.persist();
  this.setState({ inputValue: e.target.value });
 };

 handleSubmit = e => {
  e.preventDefault();
  this.state.inputValue ? this.props.onSubmit(this.state.inputValue) : console.log("Пустая строка");
  this.setState({ inputValue: "" });
 };

 render() {
  return (
   <form onSubmit={this.handleSubmit}>
    <label>
     <input onChange={this.handleChange} value={this.state.inputValue} type="text" />
    </label>
    <button>Search</button>
   </form>
  );
 }
}

export default Search;
