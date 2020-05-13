import React from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  fade,
  Badge,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SearchBar } from "../SearchBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStores } from "../../stores";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
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
  const { cartStore } = useStores();
  const { push } = useHistory();
  const handleRouteCart = () => {
    push("/movie/cart");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <Link color="inherit" href="/movie">
            MoviePage
          </Link>
        </Typography>
        <IconButton color="inherit" onClick={handleRouteCart}>
          <Badge color="secondary" badgeContent={cartStore.cart.val()?.length}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default observer(Appbar);