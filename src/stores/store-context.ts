import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const rootContext = createContext(new RootStore());

export const useStores = () => {
  return useContext(rootContext);
};

export const useTodo = () => {
  const { todoStore } = useStores();
  return todoStore;
};

export const useMovie = () => {
  const { movieStore } = useStores();
  return movieStore;
};

export const useCart = () => {
  const { cartStore } = useStores();
  return cartStore;
};
