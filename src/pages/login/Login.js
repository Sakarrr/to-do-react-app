// eslint-disable-next-line
import {
  Link,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      {console.log(localStorage.getItem("loggedIn"))}
      {localStorage.getItem("loggedIn") ? (
        <>
          You are already Logged In.
          <button
            onClick={() => {
              alert("You are successfully logged out.");
              localStorage.removeItem("loggedIn", false);
              history.replace("/");
            }}
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              alert("You are successfully logged in.");
              localStorage.setItem("loggedIn", true);
              history.replace("/");
            }}
          >
            Login
          </button>
        </>
      )}
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
