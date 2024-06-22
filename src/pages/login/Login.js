// eslint-disable-next-line
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";

const Login = () => {
  return (
    <>
      <NavBar />

      <button
        onClick={() => {
          localStorage.setItem("loggedIn", true);
        }}
      >
        Login
      </button>
      <br />
      <Link to="/login/showInfo">Show login information</Link>
      <br />
      <br />
      <Route path="/login/showInfo">
        <div>This is dummy login and does not communicate with server</div>
      </Route>
    </>
  );
};

export default Login;
