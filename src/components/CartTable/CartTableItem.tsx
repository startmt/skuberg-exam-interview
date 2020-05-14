import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useStores } from "../../stores";
import { observer } from "mobx-react-lite";
import Form, { TextField } from "../Form";
import { useForm } from "react-hook-form";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import NumberFormat from "react-number-format";
import { MovieType } from "../../types/MovieType";

type TableCartItemProps = {
  cart: MovieType;
};

const TableCartItem: React.FC<TableCartItemProps> = ({ cart }) => {
  const { cartStore } = useStores();
  const form = useForm();

  const handleSubmitPrice = form.handleSubmit(async (data, e) => {
    await cartStore.setPrice(cart, data.price);
    e?.preventDefault();
  });
  const handleRemoveMovie = () => cartStore.removeMovie(cart);
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
        <IconButton onClick={handleRemoveMovie}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default observer(TableCartItem);
