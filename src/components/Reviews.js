import React from "react";
import themoviedbAPI from "../services/themoviedbAPI";
import PropTypes from "prop-types";

class Reviews extends React.Component {
 static propTypes = { id: PropTypes.number.isRequired };

 state = { reviews: [] };

 componentDidMount() {
  themoviedbAPI.reviews(this.props.id).then(data => {
   this.setState({ reviews: data.results });
  });
 }

 render() {
  return this.state.reviews.length > 0 ? (
   <ul>
    {this.state.reviews.map(r => (
     <li key={r.id}>
      <h5>{r.author}</h5>
      <p>{r.content}</p>
     </li>
    ))}
   </ul>
  ) : (
   <p>Don't have any reviews for this movie.</p>
  );
 }
}

export default Reviews;
