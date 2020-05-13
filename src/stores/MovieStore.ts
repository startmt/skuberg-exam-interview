import { action, observable, runInAction } from "mobx";
import axios from "axios";
import Process from "./Process";
export type MovieProps = {
  data: any;
};

export class MovieStore {
  @observable public movie = Process.create<MovieProps[]>([]);
  @observable public search = Process.create<MovieProps[]>([]);

  @action
  async fetch() {
    this.movie.setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular/?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const results = await this.setPrice(data.results);
    runInAction("fetch popular movie", () => {
      this.movie.set(results);
    });
  }
  @action
  async setPrice(data: any[]) {
    return data.map((item: any) => {
      let price = Math.floor(Math.random() * 1000);
      return { ...item, price: item.price = price };
    });
  }

  @action
  async setSearch(search: string | undefined) {
    this.movie.setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
    );
    const results = await (await this.setPrice(data.results)).slice(0, 5);
    try {
      runInAction("setSearch", () => {
        this.search.set(results);
      });
    } catch (error) {
      runInAction("searchmovieFailed", () => {
        console.error(error);
        this.movie.setLoading(false);
      });
    }
  }
}
