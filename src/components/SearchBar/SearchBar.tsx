import React, { useState, Fragment } from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
  InputBase,
  Paper,
} from "@material-ui/core";
import { useStores } from "../../stores";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  })
);
const Appbar = () => {
  const classes = useStyles({});
  const { movieStore } = useStores();
  const [search, setSearch] = useState("");
  const handleSearch = async (e: any) => {
    setSearch(e.target.value);
    await movieStore.setSearch(e.target.value);
  };
  return (
    <Paper>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          fullWidth
          id="search-movie-input"
          onChange={handleSearch}
          placeholder="Search…"
          value={search}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Paper>
  );
};

export default observer(Appbar);
