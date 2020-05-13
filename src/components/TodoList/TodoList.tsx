import React from "react";
import { List } from "@material-ui/core";
import { useStores } from "../../stores";
import TodoListItem from "./TodoListItem";
import { todoProp } from "../../stores/TodoStore";
import { observer } from "mobx-react-lite";

const TodoList: React.FC = () => {
  const { todoStore } = useStores();
  let todo: todoProp[] = todoStore.todo?.val() || [];
  return (
    <List>
      {todo
        .sort((prev: todoProp, next: todoProp) => prev.index - next.index)
        .reverse()
        .map((item: todoProp) => {
          return <TodoListItem todo={item} />;
        })}
    </List>
  );
};

export default observer(TodoList);
