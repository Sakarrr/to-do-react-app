import "./styles/app.css";
import MyRoutes from "./routes/MyRoutes";

const App = () => {
  return (
    <>
      {/* Enable multi page SPA */}
      {/* <BrowserRouter>
        <Switch> */}
      {/* Render Components */}
      <MyRoutes />
      {/* </Switch>
      </BrowserRouter> */}
    </>
  );
};

export default App;
