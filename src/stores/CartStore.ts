import { action, observable, runInAction } from "mobx";

import Process from "./Process";
export type todoProp = {
  index: number | 0;
  todo: string;
  complete: boolean;
};

export class CartStore {
  @observable public cart = Process.create<todoProp[]>(this.getTodoFromLocal());

  @action
  private getTodoFromLocal() {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("todo") || "[]"
    );
    const data: todoProp[] = dataFromLocalStorage || [];
    return data;
  }
  @action
  async addMovie(todo: string) {
    runInAction("addMovie", () => {
      // this.todo.set(data);
      // localStorage.setItem("todo", JSON.stringify(this.todo.val()));
    });
  }
  @action
  async removeMovie(index: number) {
    // this.todo.setLoading(true);
    // const data = this.todo
    //   .val()
    //   ?.filter((data: todoProp) => data.index !== index);
    runInAction("removeMovie", () => {
      // this.todo.set(data);
      // localStorage.setItem("todo", JSON.stringify(this.todo.val()));
    });
  }
}
