import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/ViewPage/ViewPage";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        {/* <Route path="/add" component={AddToDo}></Route> */}
        <Route path="/add" element={<AddToDo />} />

        {/* <Route path="/view/:id" component={ViewPage} /> */}
        <Route path="/view" element={<ViewPage />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
