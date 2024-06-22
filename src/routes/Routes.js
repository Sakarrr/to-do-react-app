import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" component={MainPage} exact></Route>
        {/* <Route path="/add" component={AddToDo} exact></Route> */}
        <Route path="/add" exact>
          <AddToDo />
        </Route>

        {/* <Route path="/view/:id" component={ViewPage} exact /> */}
        <Route path="/view" component={ViewPage} exact />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
