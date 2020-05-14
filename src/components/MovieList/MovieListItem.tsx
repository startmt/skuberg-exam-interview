import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Theme,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  Grid,
  Paper,
} from "@material-ui/core";
import { useStores } from "../../stores";
import { MovieType } from "../../types/MovieType";
type MovieListItemProps = {
  movie: MovieType;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "100%",
    },
  },
  overview: {
    display: "-webkit-inline-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  title: {
    display: "-webkit-inline-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  price: {
    marginRight: theme.spacing(2),
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    marginRight: theme.spacing(2),
    width: 200,
    borderRadius: "unset",
  },
  space: {
    marginBottom: theme.spacing(3),
  },
}));

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const classes = useStyles();
  const { cartStore } = useStores();
  const [added, setAdded] = useState(false);
  useEffect(() => {
    setAdded(cartStore.checkaddedMovie(movie));
  }, [cartStore, movie]);
  const handleAddTocart = async () => {
    await cartStore.addMovie(movie);
    setAdded(cartStore.checkaddedMovie(movie));
  };
  return (
    <Paper className={classes.space} elevation={0}>
      <ListItem onClick={handleAddTocart} button alignItems="flex-start">
        <ListItemAvatar className={classes.image}>
          <img
            className={classes.image}
            alt="Remy Sharp"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={movie.original_title}
          secondary={
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.overview}
            >
              {movie.overview}
            </Typography>
          }
        />
      </ListItem>
      <Grid container justify="flex-end">
        <Button disabled={added} color="secondary" onClick={handleAddTocart}>
          ADD TO CART
        </Button>
      </Grid>
      <Divider />
    </Paper>
  );
};

export default MovieListItem;
