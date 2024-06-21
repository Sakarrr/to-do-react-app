import NavBar from "../NavBar";

const AddToDo = () => {
  const addToDo = () => {};

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h1>Add To-Do:</h1>
        <form onSubmit={addToDo}>
          <input type="text"></input>
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
