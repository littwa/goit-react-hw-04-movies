import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../services/routes";
import Home from "../views/Home";
import Layout from "./Layout";
import PageNotFound from "../views/PageNotFound";
// import Movies from "../views/Movies";
// import Details from "../views/Details";
import asyncComponent from "./hoc/asyncComponent";
const AsyncComponentDetails = asyncComponent(() => import("../views/Details"));
// const AsyncComponentMovies = asyncComponent(() => import("../views/Movies"));

class App extends React.Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path={routes.home} exact component={Home} />
     <Route path={routes.movies} exact component={asyncComponent(() => import("../views/Movies"))} />
     <Route path={routes.details} component={AsyncComponentDetails} />
     {/* <Route path={routes.movies} exact component={Movies} /> */}
     {/* <Route path={routes.details} component={Details} /> */}
     <Route component={PageNotFound} />
    </Switch>
   </Layout>
  );
 }
}

export default App;
