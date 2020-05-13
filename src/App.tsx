import React from "react";
import { history } from "./history";
import { Route, Router, Switch } from "react-router";
import TodoPage from "./pages/TodoPage";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/todo" component={TodoPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
