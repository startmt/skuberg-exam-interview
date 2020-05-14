import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStores } from "../../stores";
import { observer } from "mobx-react-lite";
import Form, { TextField } from "../Form";
import { useForm } from "react-hook-form";
import { IconButton, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import NumberFormat from "react-number-format";
const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  paper: {
    padding: "24px 12px",
  },
});

type TableCartItemProps = {
  cart: any;
};

const TableCartItem: React.FC<TableCartItemProps> = ({ cart }) => {
  const classes = useStyles();
  const { cartStore } = useStores();
  const form = useForm();

  const handleSubmitPrice = form.handleSubmit(async (data, e) => {
    await cartStore.setPrice(cart, data.price);
    e?.preventDefault();
  });

  return (
    <TableRow key={cart.title}>
      <TableCell>
        <img
          src={`https://image.tmdb.org/t/p/w200${cart.backdrop_path}`}
          alt={cart.title}
        />
      </TableCell>
      <TableCell align="left">{cart.title}</TableCell>
      <TableCell align="left">
        <Form
          id={`price-of-${cart.id}`}
          form={form}
          onSubmit={handleSubmitPrice}
        >
          <NumberFormat
            displayType="input"
            thousandSeparator
            customInput={() => (
              <TextField defaultValue={cart.price} name="price" type="number" />
            )}
          />
        </Form>
      </TableCell>
      <TableCell align="left">{cart.vote_average}</TableCell>
      <TableCell align="left">
        <IconButton>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default observer(TableCartItem);
