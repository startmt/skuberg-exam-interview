import {
  Box,
  CircularProgress,
  Fade,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export type ContentCardProps = {
  title: string;
  loading?: boolean;
  actionComponent?: React.ReactElement;
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 120,
  },
  iconButton: {
    padding: 8,
  },
  action: {
    padding: "0px 16px",
  },
  width: {
    width: "100%",
  },
  title: {
    marginLeft: 16,
  },
}));

const Loading = () => {
  return <CircularProgress />;
};

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  children,
  loading,
  actionComponent = null,
}) => {
  const classes = useStyles({});
  return (
    <Paper className={classes.root}>
      <Grid container justify="space-between">
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        <div className={classes.action}>{actionComponent}</div>
      </Grid>
      <Grid container justify="center">
        {loading ? (
          <Box marginTop={3}>
            <Loading />
          </Box>
        ) : (
          <Fade in={!loading}>
            <div className={classes.width}>{children}</div>
          </Fade>
        )}
      </Grid>
    </Paper>
  );
};

export default ContentCard;
