import React, { useState, Fragment } from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
  InputBase,
} from "@material-ui/core";
import { useStores } from "../../stores";
import SearchIcon from "@material-ui/icons/Search";
import ResultSearch from "./ResultSearch";
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);
const Appbar = () => {
  const classes = useStyles({});
  const { movieStore } = useStores();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleSearch = async (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    setAnchorEl(anchorEl ? null : e.currentTarget);
    await movieStore.setSearch(e.target.value);
  };
  return (
    <Fragment>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          id="search-movie-input"
          onChange={handleSearch}
          onBlur={() => {
            setOpen(false);
          }}
          onFocus={() => {
            setOpen(true);
          }}
          placeholder="Search…"
          value={search}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <ResultSearch
        isSearch={search !== "" && open}
        anchorEl={anchorEl}
        data={movieStore.search.val() || []}
      />
    </Fragment>
  );
};

export default observer(Appbar);
