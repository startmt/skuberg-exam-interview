import React from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  Popper,
  Fade,
  Paper,
  List,
} from "@material-ui/core";
import ResultSearchItem from "./ResultSearchItem";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popper: {
      width: "400px",
    },
  })
);

type ResultSearchProps = {
  data: any[];
  isSearch: boolean;
  anchorEl: HTMLButtonElement | null;
};
const ResultSearch: React.FC<ResultSearchProps> = ({
  data,
  isSearch,
  anchorEl,
}) => {
  const classes = useStyles({});
  return (
    <Popper
      className={classes.popper}
      open={isSearch}
      anchorEl={anchorEl}
      placement="bottom-end"
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper elevation={2}>
            <List>
              {data.map((item: any) => {
                return <ResultSearchItem data={item} />;
              })}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default observer(ResultSearch);
