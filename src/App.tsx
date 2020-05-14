import React from "react";
import { history } from "./history";
import { Route, Router, Switch } from "react-router";
import TodoPage from "./pages/TodoPage";
import MoviePage from "./pages/MoviePage";
import CartPage from "./pages/CartPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Bai Jamjuree",
      "Overpass",
      "Prompt",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "5.675rem",
      fontWeight: 300,
      lineHeight: 1,
    },
    h2: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "3.575rem",
      fontWeight: 300,
      lineHeight: 1,
    },
    h3: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "2.175rem",
      fontWeight: 300,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "1.875rem",
      fontWeight: 400,
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "1.35rem",
      fontWeight: 400,
      lineHeight: 1.25,
    },
    h6: {
      fontFamily: ["Overpass", "Roboto", "sans-serif"].join(","),
      fontSize: "1.15rem",
      fontWeight: 400,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontFamily: ['"Sukhumvit Set"', "Roboto", "sans-serif"].join(","),
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: ['"Sukhumvit Set"', "Roboto", "sans-serif"].join(","),
      fontWeight: 400,
    },
    body1: {
      fontFamily: ["Bai Jamjuree", "Sarabun", "Roboto", "sans-serif"].join(","),
      lineHeight: 1.69,
    },
    body2: {
      fontFamily: ["Bai Jamjuree", "Sarabun", "Roboto", "sans-serif"].join(","),
    },
  },
});
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/movie" component={MoviePage} />
          <Route exact path="/movie/cart" component={CartPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
