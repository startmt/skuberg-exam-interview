import React, { Fragment, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Box,
  fade,
  Typography,
} from "@material-ui/core";
import { MovieList } from "../components/MovieList";
import { useStores } from "../stores";
import { Appbar } from "../components/Appbar";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      alignItems: "center",
      width: 600,
    },
    center: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);
const MoviePage = () => {
  const classes = useStyles({});
  const { movieStore } = useStores();

  useEffect(() => {
    movieStore.fetch();
  }, [movieStore]);

  const movie = movieStore.movie.val() || [];
  return (
    <Fragment>
      <Appbar />
      <Container className={classes.center}>
        <Box pt={3}>
          <Box pb={3}>
            <Typography variant="h4">Popular Movies</Typography>
          </Box>
          <MovieList movies={movie} />
        </Box>
      </Container>
    </Fragment>
  );
};

export default observer(MoviePage);
