import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Box,
} from "@material-ui/core";
import { MovieList } from "../components/MovieList";
import { useStores } from "../stores";
import { Appbar } from "../components/Appbar";
import { SearchBar } from "../components/SearchBar";
import { ContentCard } from "../components/ContentCard";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
    },
    center: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  })
);
const MoviePage = () => {
  const classes = useStyles({});
  const { movieStore } = useStores();

  const search = movieStore.search.val() || [];
  return (
    <Fragment>
      <Appbar />
      <Container className={classes.center}>
        <Box pt={3} className={classes.paper}>
          <Box pb={3}>
            <SearchBar />
          </Box>
          <ContentCard title="Result" loading={movieStore.search.isLoading()}>
            <MovieList movies={search} />
          </ContentCard>
        </Box>
      </Container>
    </Fragment>
  );
};

export default observer(MoviePage);
