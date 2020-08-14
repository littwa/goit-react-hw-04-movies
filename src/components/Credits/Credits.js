import React from "react";
import themoviedbAPI from "../../services/themoviedbAPI";
import { photo } from "./Credits.module.css";
import PropTypes from "prop-types";

class Credits extends React.Component {
 static propTypes = { id: PropTypes.number.isRequired };

 state = { cast: [] };

 componentDidMount() {
  themoviedbAPI.credits(this.props.id).then(data => this.setState({ cast: data.cast }));
 }

 render() {
  return (
   <ul>
    {this.state.cast.length > 0 &&
     this.state.cast.map(c => (
      <li key={c.cast_id}>
       <img
        src={`${themoviedbAPI.baseUrlForImg}${
         c.profile_path ? c.profile_path : "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" // "Заглушка" если profile_path === null
        }`}
        alt="pic"
        className={photo}
       />
       <p>{c.name}</p>
       <p>character: {c.character ? c.character : "any character"}</p>
      </li>
     ))}
   </ul>
  );
 }
}

export default Credits;
