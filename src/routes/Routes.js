import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import Login from "../pages/login/Login";

const Routes = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home" component={MainPage} exact></Route>
      {/* <Route path="/add" component={AddToDo} exact></Route> */}
      <Route path="/add" exact>
        {localStorage.getItem("loggedIn") ? (
          <AddToDo />
        ) : (
          <Redirect to="/login" />
        )}
      </Route>

      {/* <Route path="/view/:id" component={ViewPage} exact /> */}
      <Route path="/view" component={ViewPage} exact />
      <Route path="/login" component={Login} />
    </>
  );
};

export default Routes;
