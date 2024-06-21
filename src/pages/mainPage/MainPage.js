// eslint-disable-next-line
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddToDo from "../add-todo/AddToDo";
import NavBar from "../NavBar";

const MainPage = () => {
  //   const history = useHistory();

  //   const login = () => {
  //     // Login
  //     // Success
  //     history.push("/add"); // To navitage users programatically
  //     // history.replace("/add"); // TO navigate and disallow back feature
  //   };

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your To Do:</h3>
      </div>
      {/* <Link to="/add">Go to add Page</Link> */}
      {/* <button onClick={login}>Login</button> */}
    </>
  );
};

export default MainPage;
