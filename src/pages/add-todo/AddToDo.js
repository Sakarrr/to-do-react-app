import { useRef } from "react";
import NavBar from "../NavBar";

const AddToDo = () => {
  const todoText = useRef();

  const addToDo = (e) => {
    e.preventDefault();
    console.log(todoText.current.value);
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
