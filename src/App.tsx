import React from "react";
import { history } from "./history";
import { Route, Router, Switch } from "react-router";
import TodoPage from "./pages/TodoPage";
import MoviePage from "./pages/MoviePage";
import CartPage from "./pages/CartPage";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/movie" component={MoviePage} />
        <Route exact path="/movie/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default App;
