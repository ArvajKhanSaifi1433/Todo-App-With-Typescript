import { useEffect, useState } from "react";
import Hedear from "./Components/Hedear";
import Nav from "./Components/Nav";
import Form from "./Components/Form";
import { MyContextProvider } from "./Context";
import { Outlet } from "react-router-dom";

interface TD {
  todo: string;
  id: string;
  isComplete: boolean;
  isUpadate: boolean;
}

type dark = "light" | "dark";

function App() {
  const [darkMode, setDarkMode] = useState<dark>("light");
  const [arr, setArr] = useState<TD[]>([]);

  function AddTodo(todo: TD): void {
    setArr((prev) => [...prev, { ...todo }]);
  }
  function removeTodo(id: string): void {
    setArr((prev) => prev.filter((item) => item.id !== id));
  }
  function updateTodo(id: string): void {
    setArr((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isUpadate: true } : { ...item }
      )
    );
  }

  function saveTodo(todo: string, id: string) {
    setArr((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, todo, isUpadate: false } : { ...item }
      )
    );
  }

  function setTrue(value: boolean, id: string): void {
    setArr((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: value } : { ...item }
      )
    );
  }
  function setFalse(value: boolean, id: string): void {
    setArr((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: value } : { ...item }
      )
    );
  }

  useEffect(() => {
    let body = document.querySelector("body") as HTMLBodyElement;
    body.classList.remove("light", "dark");
    body.classList.add(darkMode);
  }, [darkMode]);

  return (
    <MyContextProvider
      value={{
        AddTodo,
        removeTodo,
        updateTodo,
        saveTodo,
        setTrue,
        setFalse,
      }}
    >
      <div className="arvaj">
        <Hedear />
        <Nav  setDarkMode={setDarkMode} />
        <Form />
        <Outlet context={arr} />
      </div>
    </MyContextProvider>
  );
}

export default App;
