// eslint-disable-next-line
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
    </>
  );
};

export default Login;
