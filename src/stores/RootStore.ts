import { RouterStore } from "mobx-react-router";
import { TodoStore } from "./TodoStore";
import { MovieStore } from "./MovieStore";
import { CartStore } from "./CartStore";
export const routingStore = new RouterStore();

export class RootStore {
  public readonly routingStore: RouterStore;
  public readonly todoStore: TodoStore;
  public readonly movieStore: MovieStore;
  public readonly cartStore: CartStore;
  constructor() {
    this.routingStore = routingStore;
    this.movieStore = new MovieStore();
    this.todoStore = new TodoStore();
    this.cartStore = new CartStore();
  }
}
