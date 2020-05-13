import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { todoProp } from "../../stores/TodoStore";
import Form, { TextField } from "../Form";
import { useForm } from "react-hook-form";
import { useStores } from "../../stores";
import DeleteIcon from "@material-ui/icons/Delete";
import { observer } from "mobx-react-lite";
type TodoListItemProps = {
  todo: todoProp;
};

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const { todoStore } = useStores();
  const form = useForm();
  const handleEditable = () => {
    setEdit(true);
  };
  const updateTodo = form.handleSubmit(async (data) => {
    const todoObj = {
      ...todo,
      ...data,
    };
    await todoStore.update(todoObj);
    setEdit(false);
  });
  const toggleComplete = async () => {
    const todoObj = {
      ...todo,
      complete: !todo.complete,
    };
    await todoStore.update(todoObj);
  };

  const deleteTodo = () => {
    todoStore.delete(todo.index);
  };

  return (
    <ListItem
      disabled={todo.complete}
      onClick={handleEditable}
      key={todo.index}
      dense
      button
    >
      {edit && !todo.complete ? (
        <Form form={form} onSubmit={updateTodo} id="item-todo-form">
          <TextField name="todo" defaultValue={todo.todo} fullWidth autoFocus />
        </Form>
      ) : (
        <ListItemText primary={todo.todo} />
      )}
      <ListItemSecondaryAction>
        <Checkbox
          edge="start"
          checked={todo.complete}
          tabIndex={-1}
          disableRipple
          onClick={toggleComplete}
        />
        <IconButton onClick={deleteTodo} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default observer(TodoListItem);
