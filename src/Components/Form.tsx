import  { ChangeEvent, FormEvent, useState } from "react";
import { useTodo } from "../Context";

function Form() {
  const [todo, setTodo] = useState<string>("");
  const { AddTodo } = useTodo();
  function submitform(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    AddTodo({
      todo,
      id: crypto.randomUUID(),
      isComplete: false,
      isUpadate: false,
    });
    setTodo("");
  }
  return (
    <form className="arvaj-form" onSubmit={submitform}>
      <input
        type="text"
        placeholder="Write your Todo..."
        value={todo}
        onChange={(e: ChangeEvent<HTMLInputElement>): void =>
          setTodo((): string => e.target.value)
        }
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;
