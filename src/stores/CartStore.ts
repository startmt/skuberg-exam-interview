import { action, observable, runInAction, computed } from "mobx";

import Process from "./Process";
import { MovieType } from "../types/MovieType";
export class CartStore {
  @observable public cart = Process.create<MovieType[]>(
    this.getTodoFromLocal()
  );

  @action
  private getTodoFromLocal() {
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    const data = dataFromLocalStorage || [];
    return data;
  }
  @action
  async addMovie(movie: MovieType) {
    const data: any = this.cart.val()?.concat({ ...movie, price: 0 });
    runInAction("addMovie", () => {
      this.cart.set(data);
      localStorage.setItem("cart", JSON.stringify(this.cart.val()));
    });
  }

  @action
  checkaddedMovie(movie: MovieType) {
    return this.cart.val()?.find((item: MovieType) => item.id === movie.id)
      ? true
      : false;
  }
  @action
  async removeMovie(movie: MovieType) {
    this.cart.setLoading(true);
    const data = this.cart.val()?.filter((data) => data.id !== movie.id);
    runInAction("removeMovie", () => {
      this.cart.set(data);
      localStorage.setItem("cart", JSON.stringify(this.cart.val()));
    });
  }

  @action
  async setPrice(movie: MovieType, price: number) {
    try {
      const data: MovieType[] | any = this.cart
        .val()
        ?.map((item: MovieType) => {
          return item.id === movie.id
            ? { ...item, price: Number(price) }
            : { ...item };
        });
      console.log(typeof data[0].price);
      runInAction("setPrice", () => {
        this.cart.set(data);
        localStorage.setItem("cart", JSON.stringify(this.cart.val()));
      });
    } catch (ex) {
      runInAction("setPriceerror", () => {
        this.cart.setLoading(false);
      });
    }
  }

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
  get totalPrice(): number {
    const data = this.cart.val();
    if (!data) return 0;
    return data
      .map((item: MovieType) => item.price)
      .reduce((prev, next) => prev + next, 0);
  }
  @computed
  get discountPrice(): number {
    const data = this.cart.val();
    if (!data) return 0;
    if (data.length >= 5) {
      return data
        .map((item: MovieType) => item.price * 0.2)
        .reduce((prev, next) => prev + next, 0);
    } else if (data.length >= 3) {
      return data
        .map((item: MovieType) => item.price * 0.1)
        .reduce((prev, next) => prev + next, 0);
    } else {
      return 0;
    }
  }
  @computed
  get calculatePrice(): number {
    const data = this.cart.val();
    if (!data) return 0;
    if (data.length >= 5) {
      return data
        .map((item: MovieType) => item.price * 0.8)
        .reduce((prev, next) => prev + next, 0);
    } else if (data.length >= 3) {
      return data
        .map((item: MovieType) => item.price * 0.9)
        .reduce((prev, next) => prev + next, 0);
    } else {
      return data
        .map((item: MovieType) => item.price)
        .reduce((prev, next) => prev + next, 0);
    }
  }
}
