import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../services/routes";
import PropTypes from "prop-types";

class ListItem extends React.Component {
 static propTypes = { id: PropTypes.number.isRequired };

 render() {
  return (
   <li>
    <NavLink to={{ pathname: `${routes.movies}/${this.props.id}`, state: { from: this.props.location } }}>
     {this.props.title}
    </NavLink>
   </li>
  );
 }
}

export default ListItem;
