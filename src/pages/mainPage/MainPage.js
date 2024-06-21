// eslint-disable-next-line
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
      <div className="nav_bar">To-do V1
        <div className="">
            <div>Home</div>
            <div>App To Do</div>
        </div>
      </div>
      This is main page
      <Link to="/add">Go to add Page</Link>
      {/* <button onClick={login}>Login</button> */}
    </>
  );
};

export default MainPage;
