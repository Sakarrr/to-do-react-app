import { useRef } from "react";
import NavBar from "../NavBar";
import { type } from "@testing-library/user-event/dist/type";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddToDo = () => {
  const todoText = useRef();

  const history = useHistory();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h1>Add To-Do:</h1>
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText}></input>
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;

// onChange={(e)=>setToDoText(e.target.value.replace(/\D/g,""))} // Filters number can type character
