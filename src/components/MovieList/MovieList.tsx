import React from "react";
import { List, Box, Typography } from "@material-ui/core";
import MovieListItem from "./MovieListItem";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores";
type MovieListProps = {
  movies: any[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const { movieStore } = useStores();
  if (!movies || (movies.length === 0 && movieStore.startSearch)) {
    return (
      <Box paddingTop={4} paddingBottom={4}>
        <Typography align="center" variant="h6">
          Not found your movies, please try another.
        </Typography>
      </Box>
    );
  }
  if (!movieStore.startSearch) {
    return (
      <Box paddingTop={4} paddingBottom={4}>
        <Typography align="center" variant="h6">
          Please search your movie.
        </Typography>
      </Box>
    );
  }
  return (
    <List>
      {movies.map((item) => {
        return <MovieListItem movie={item} />;
      })}
    </List>
  );
};

export default observer(MovieList);
