import React, { Fragment, useEffect } from "react";
import { observer } from "mobx-react-lite";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Box,
  fade,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { MovieList } from "../components/MovieList";
import { useStores } from "../stores";
import { Appbar } from "../components/Appbar";
import { CartTable } from "../components/CartTable";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    center: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    box: {
      width: "100%",
    },
  })
);
const CartPage = () => {
  const classes = useStyles({});
  const { cartStore } = useStores();

  const carts = cartStore.cart.val() || [];
  return (
    <Fragment>
      <Appbar />
      <Container className={classes.center}>
        <Box pt={3} className={classes.box}>
          <Box pb={3}>
            <Typography variant="h4">Cart</Typography>
          </Box>
          <CartTable carts={carts} />
          <Box pt={3}>
            <Grid container justify="flex-end">
              <Typography
                variant="h4"
                align="center"
              >{`Total ${cartStore.calculatePrice}`}</Typography>
              <Button variant="contained" color="primary">
                Purchase
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default observer(CartPage);
