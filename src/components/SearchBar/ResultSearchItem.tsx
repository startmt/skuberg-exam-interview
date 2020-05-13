import React from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Button,
} from "@material-ui/core";
import { useStores } from "../../stores";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 16,
      width: 16,
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
  })
);

type ResultSearchItemProps = {
  data: any;
};
const ResultSearchItem: React.FC<ResultSearchItemProps> = ({ data }) => {
  const classes = useStyles({});
  const { cartStore } = useStores();
  const handleAddTocart = async () => {
    await cartStore.addMovie(data);
  };
  return (
    <ListItem button>
      <ListItemAvatar>
        <Avatar
          alt={`Avatar n°`}
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            className={classes.title}
            gutterBottom
            variant="body1"
            component="p"
          >
            {data.original_title}
          </Typography>
        }
        secondary={
          <Typography gutterBottom variant="subtitle2" component="p">
            {data.price} Bath
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Button size="small" color="primary" onClick={handleAddTocart}>
          Add cart
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default observer(ResultSearchItem);
