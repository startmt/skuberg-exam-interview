import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";
import { useStores } from "../../stores";
import { observer } from "mobx-react-lite";
import CartTableItem from "./CartTableItem";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  paper: {
    padding: "24px 12px",
  },
});

type TableCartProps = {
  carts: any[];
};

const TableCart: React.FC<TableCartProps> = ({ carts }) => {
  const classes = useStyles();
  const { cartStore } = useStores();
  const handleClear = async () => {
    await cartStore.clear();
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <TableContainer>
        <Grid container justify="flex-end">
          <Button variant="contained" color="secondary" onClick={handleClear}>
            CLEAR CART
          </Button>
        </Grid>

        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Rate</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((row: any) => (
              <CartTableItem cart={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default observer(TableCart);
