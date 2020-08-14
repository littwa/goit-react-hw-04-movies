import React from "react";
import { Link } from "react-router-dom";
import routes from "../services/routes";

const PageNotFound = () => (
 <div>
  <h2>404</h2>
  <p>
   Страница не найдена. Вернутся<Link to={routes.home}> на главную страницу</Link>.
  </p>
 </div>
);

export default PageNotFound;
