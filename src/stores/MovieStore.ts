import { action, observable, runInAction } from "mobx";
import axios from "axios";
import Process from "./Process";
import { MovieType } from "../types/MovieType";

export class MovieStore {
  @observable public movie = Process.create<MovieType[]>([]);
  @observable public search = Process.create<MovieType[]>([]);
  @observable public startSearch = false;
  @action
  async setPrice(data: MovieType[]) {
    return data.map((item: MovieType) => {
      let price = Math.floor(Math.random() * 1000);
      return { ...item, price: item.price = price };
    });
  }

  @action
  async setSearch(search: string | undefined) {
    try {
      this.search.setLoading(true);
      if (search === "") this.startSearch = false;
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      const results = data.results.slice(0, 5);
      runInAction("setSearch", () => {
        this.search.set(results);
        this.startSearch = true;
      });
    } catch (error) {
      runInAction("searchmovieFailed", () => {
        this.search.set([]);
      });
    }
  }
}
