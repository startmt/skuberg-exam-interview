import React from "react";
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Box,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MovieIcon from "@material-ui/icons/Movie";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "100%",
    },
  })
);
const HomePage: React.FC = () => {
  const handleRoute = (path: string) => {
    push(path);
  };

  const { push } = useHistory();
  const classes = useStyles({});
  return (
    <Container>
      <Box pt={8}>
        <Paper elevation={2} className={classes.paper}>
          <List>
            <ListItem button onClick={() => handleRoute("/todo")}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Todo app" />
            </ListItem>
            <ListItem button onClick={() => handleRoute("/movie")}>
              <ListItemIcon>
                <MovieIcon />
              </ListItemIcon>
              <ListItemText primary="Movie App" />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};
export default HomePage;
