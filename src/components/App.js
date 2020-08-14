import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Details from "../views/Details";
import Movies from "../views/Movies";
import Layout from "./Layout";
import PageNotFound from "../views/PageNotFound";
import routes from "../services/routes";

class App extends React.Component {
 render() {
  return (
   <Layout>
    <Switch>
     <Route path={routes.home} exact component={Home} />
     <Route path={routes.movies} exact component={Movies} />
     <Route path={routes.details} component={Details} />
     <Route component={PageNotFound} />
    </Switch>
   </Layout>
  );
 }
}

export default App;
