import { Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact></Route>
      <Route path="/add" component={AddToDo} exact></Route>

      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};

export default Routes;
