import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../stores";
import {
  Container,
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { TodoList } from "../components/TodoList";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import { SubmitTextField } from "../components/SubmitTextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      alignItems: "center",
      width: 600,
    },
    center: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  })
);

export type TodoListItemForm = {
  todo: string;
};
const defaultValues: TodoListItemForm = { todo: "" };
const TodoPage = () => {
  const classes = useStyles({});
  const { todoStore } = useStores();

  const form = useForm();
  const handleAddTodo = form.handleSubmit(async (data) => {
    await todoStore.add(data.todo);
    form.reset(defaultValues);
  });

  return (
    <Container className={classes.center}>
      <Box>
        <Typography variant="h2">TodoList</Typography>
      </Box>
      <Box pt={4}>
        <Paper className={classes.root}>
          <Form form={form} id="add-todo-form" onSubmit={handleAddTodo}>
            <SubmitTextField name="todo" onSubmit={handleAddTodo} />
          </Form>

          <TodoList />
        </Paper>
      </Box>
    </Container>
  );
};

export default observer(TodoPage);
