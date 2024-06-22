import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        To-do V1
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/login">
            <div>Login</div>
          </Link>
          <Link to="/add">
            <div>App To Do</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
