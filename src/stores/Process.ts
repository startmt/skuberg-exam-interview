import { observable } from "mobx";

/**
 * Reference: https://dataform.co/blog/how-we-use-mobx-to-solve-our-frontend-state
 */
export default class Process<T> {
  // our state entity class
  public static create<T>(val?: T) {
    return new Process<T>(val);
  }

  @observable private data?: T;
  @observable private loading: boolean = false;

  constructor(val?: T) {
    this.set(val);
  }

  public isLoading() {
    return this.loading;
  }

  public val() {
    return this.data;
  }

  public set(value?: T) {
    this.loading = false;
    this.data = value;
  }

  public setLoading(loading: boolean) {
    this.loading = loading;
  }
}
