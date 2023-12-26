import { createContext, useContext } from "react";

interface TD {
  todo: string;
  id: string;
  isComplete: boolean;
  isUpadate: boolean;
}

type addfun = (todo: TD) => void;
type removefun = (id: string) => void;
type updatefun = (id: string) => void;
type savefun = (todo: string, id: string) => void;
type setTrue = (value: boolean, id: string) => void;
type setFalse = (value: boolean, id: string) => void;

interface Todos {
  AddTodo: addfun;
  removeTodo: removefun;
  updateTodo: updatefun;
  saveTodo: savefun;
  setTrue: setTrue;
  setFalse: setFalse;
}

export const MyContext = createContext<Todos>({
  AddTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
  saveTodo: () => {},
  setTrue: () => {},
  setFalse: () => {},
});

export const MyContextProvider = MyContext.Provider;

export const useTodo = () => useContext(MyContext);
