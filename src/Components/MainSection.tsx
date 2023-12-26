import { useState } from "react";
import { useTodo } from "../Context";

type TD = {
  item: {
    todo: string;
    id: string;
    isComplete: boolean;
    isUpadate: boolean;
  };
};
function MainSection(props: TD) {
  const [td, setTd] = useState<string>(props.item.todo);
  const { removeTodo, updateTodo, saveTodo, setFalse, setTrue } = useTodo();
  return (
    <div className="arvaj-main">
      <input
        type="checkbox"
        value={""}
        checked={props.item.isComplete}
        onChange={(e) => {
          if (e.currentTarget.checked === true) {
            setTrue(true, props.item.id);
          } else {
            setFalse(false, props.item.id);
          }
        }}
      />
      <input
        type="text"
        className={`ak ${props.item.isUpadate ? "pk" : ""} ${
          props.item.isComplete ? "xnx" : ""
        }`}
        value={td}
        readOnly={!props.item.isUpadate}
        onChange={(e) => {
          setTd(e.target.value);
        }}
      />
      {props.item.isComplete === false ? (
        <div className="jk">
          {props.item.isUpadate === true ? (
            <button
              onClick={() => {
                saveTodo(td, props.item.id);
              }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                updateTodo(props.item.id);
              }}
            >
              Update
            </button>
          )}
          <button
            onClick={() => {
              removeTodo(props.item.id);
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MainSection;
