import React from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
} from "@material-ui/core";

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
  })
);
const MoviePage = () => {
  const classes = useStyles({});
  return (
    <Container className={classes.center}>
      <Box>
        <Typography variant="h2">MoviePage</Typography>
      </Box>
    </Container>
  );
};

export default observer(MoviePage);
