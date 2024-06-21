// eslint-disable-next-line
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddToDo from "../add-todo/AddToDo";
import NavBar from "../NavBar";
import { FaEye } from "react-icons/fa";

const MainPage = () => {
  //   const history = useHistory();

  //   const login = () => {
  //     // Login
  //     // Success
  //     history.push("/add"); // To navitage users programatically
  //     // history.replace("/add"); // TO navigate and disallow back feature
  //   };
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />

      <div className="todo_container">
        <h3>Your To Do:</h3>
        {getTodo.map((todo, i) => (
          <>
            <div className="single_todo">
              {" "}
              {todo}{" "}
              <Link to={`/view/${i}`}>
                <FaEye size={"16px"} />
              </Link>
            </div>
          </>
        ))}
      </div>
      {/* <Link to="/add">Go to add Page</Link> */}
      {/* <button onClick={login}>Login</button> */}
    </>
  );
};

export default MainPage;
