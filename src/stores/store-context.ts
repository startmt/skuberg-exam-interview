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
