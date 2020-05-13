import { RouterStore } from "mobx-react-router";
import { TodoStore } from "./TodoStore";
export const routingStore = new RouterStore();

export class RootStore {
  public readonly routingStore: RouterStore;
  public readonly todoStore: TodoStore;
  constructor() {
    this.routingStore = routingStore;
    this.todoStore = new TodoStore();
  }
}
