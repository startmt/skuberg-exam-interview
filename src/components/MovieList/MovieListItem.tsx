import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Theme,
  Grid,
} from "@material-ui/core";
import { useStores } from "../../stores";
type MovieListItemProps = {
  movie: any;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 240,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 300,
    },
    maxWidth: 345,
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
}));

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const classes = useStyles();
  const { cartStore } = useStores();
  const handleAddTocart = async () => {
    await cartStore.addMovie(movie);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          title={movie.original_title}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {movie.original_title}
          </Typography>
          <Typography
            className={classes.overview}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="flex-end" alignItems="center">
          <Typography className={classes.price}>{movie.price} Baht</Typography>
          <Button size="small" color="primary" onClick={handleAddTocart}>
            Add cart
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default MovieListItem;
