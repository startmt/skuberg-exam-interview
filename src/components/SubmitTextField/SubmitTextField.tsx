import React from "react";
import {
  Divider,
  Paper,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { TextField } from "../Form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

type SubmitTextFieldProps = {
  name: string;
  onSubmit: () => void;
};
const SubmitTextField: React.FC<SubmitTextFieldProps> = ({
  name,
  onSubmit,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TextField
        className={classes.input}
        name="todo"
        placeholder="please enter todo list"
        margin="dense"
        RHFInputProps={{ rules: { required: true } }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        onClick={onSubmit}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default SubmitTextField;
