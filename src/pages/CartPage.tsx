import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { observer } from "mobx-react-lite";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import { useStores } from "../stores";
import { Appbar } from "../components/Appbar";
import { CartTable } from "../components/CartTable";
import PurchaseModal from "../components/PuchaseModal/PuchaseModal";
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
            <Grid container direction="column" alignItems="flex-end">
              <Typography variant="h6" align="center">
                <NumberFormat
                  displayType={"text"}
                  hidden={cartStore.discountPrice === 0}
                  decimalScale={2}
                  prefix="Price "
                  suffix=" Baht"
                  fixedDecimalScale={true}
                  thousandSeparator
                  value={cartStore.totalPrice}
                />
              </Typography>
              <Typography variant="h6" color="secondary" align="center">
                <NumberFormat
                  hidden={cartStore.discountPrice === 0}
                  displayType={"text"}
                  decimalScale={2}
                  prefix="Discount "
                  suffix=" Baht"
                  fixedDecimalScale={true}
                  thousandSeparator
                  value={cartStore.discountPrice}
                />
              </Typography>
              <Typography variant="h6" align="center">
                <NumberFormat
                  displayType={"text"}
                  decimalScale={2}
                  prefix="Total "
                  suffix=" Baht"
                  fixedDecimalScale={true}
                  thousandSeparator
                  value={cartStore.calculatePrice}
                />
              </Typography>
              <Box ml={2}>
                <PurchaseModal />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
};

export default observer(CartPage);
