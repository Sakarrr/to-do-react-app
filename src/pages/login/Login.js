import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const Login = () => {
  const navigate = useNavigate();
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
              navigate("/", { replace: true });
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
              navigate("/", { replace: true });
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
      <Routes>
        {" "}
        <Route
          path="/showInfo"
          element={
            <div>This is dummy login and does not communicate with server</div>
          }
        />
      </Routes>
    </>
  );
};

export default Login;
