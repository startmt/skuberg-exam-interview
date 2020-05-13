import { action, observable, runInAction } from "mobx";

import Process from "./Process";
export type todoProp = {
  index: number | 0;
  todo: string;
  complete: boolean;
};

export class TodoStore {
  @observable public todo = Process.create<todoProp[]>(this.getTodoFromLocal());

  @action
  private getTodoFromLocal() {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("todo") || "[]"
    );
    const data: todoProp[] = dataFromLocalStorage || [];
    return data;
  }
  @action
  async add(todo: string) {
    this.todo.setLoading(true);
    const todoObj: todoProp = {
      index: this.todo.val()?.length || 0,
      todo,
      complete: false,
    };
    const data = this.todo.val()?.concat({ ...todoObj });
    runInAction("addtodo", () => {
      this.todo.set(data);
      localStorage.setItem("todo", JSON.stringify(this.todo.val()));
    });
  }
  @action
  async delete(index: number) {
    this.todo.setLoading(true);
    const data = this.todo
      .val()
      ?.filter((data: todoProp) => data.index !== index);
    runInAction("addtodo", () => {
      this.todo.set(data);
      localStorage.setItem("todo", JSON.stringify(this.todo.val()));
    });
  }

  @action
  async update(todo: todoProp) {
    this.todo.setLoading(true);
    this.delete(todo.index);
    const data = this.todo.val()?.concat({ ...todo });
    runInAction("addtodo", () => {
      this.todo.set(data);
      localStorage.setItem("todo", JSON.stringify(this.todo.val()));
      this.getTodoFromLocal();
    });
  }
}
