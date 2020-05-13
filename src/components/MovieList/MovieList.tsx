import React from "react";
import { Grid } from "@material-ui/core";
import MovieListItem from "./MovieListItem";
type MovieListProps = {
  movies: any[];
};
const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <Grid container justify="center" spacing={3}>
      {movies.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <MovieListItem movie={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieList;
