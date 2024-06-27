import { useRef } from "react";
import NavBar from "../NavBar";
import AuthCheck from "../../middleware/AuthCheck";
import { useNavigate } from "react-router-dom";

const AddToDo = () => {
  const todoText = useRef();

  const navigate = useNavigate();

  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));
    navigate("/");
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
