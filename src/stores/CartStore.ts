import { action, observable, runInAction, computed } from "mobx";

import Process from "./Process";
export type CardProps = {
  index: number | 0;
  movie: any;
  price: number;
};

export class CartStore {
  @observable public cart = Process.create<CardProps[]>(
    this.getTodoFromLocal()
  );

  @action
  private getTodoFromLocal() {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const data: CardProps[] = dataFromLocalStorage || [];
    return data;
  }
  @action
  async addMovie(movie: any) {
    const data = this.cart.val()?.concat({ ...movie });
    runInAction("addMovie", () => {
      this.cart.set(data);
      localStorage.setItem("cart", JSON.stringify(this.cart.val()));
    });
  }
  // @action
  // async removeMovie(index: number) {
  //   // this.todo.setLoading(true);
  //   // const data = this.todo
  //   //   .val()
  //   //   ?.filter((data: CardProps) => data.index !== index);
  //   runInAction("removeMovie", () => {
  //     // this.todo.set(data);
  //     // localStorage.setItem("cart", JSON.stringify(this.todo.val()));
  //   });
  // }
  @action
  async clear() {
    try {
      localStorage.removeItem("cart");
      runInAction("clearCart", () => {
        this.cart.set([]);
      });
    } catch (ex) {
      runInAction("clearCarterror", () => {
        this.cart.setLoading(false);
      });
    }
  }
  @computed
  get calculatePrice(): number {
    const data = this.cart.val();
    console.log(data?.length);
    if (!data) return 0;
    if (data.length > 5) {
      return data
        .map((item: CardProps) => item.price / 0.8)
        .reduce((prev, next) => prev + next);
    } else if (data.length > 3) {
      return data
        .map((item: CardProps) => item.price / 0.9)
        .reduce((prev, next) => prev + next);
    } else {
      return data
        .map((item: CardProps) => item.price)
        .reduce((prev, next) => prev + next);
    }
  }
}
