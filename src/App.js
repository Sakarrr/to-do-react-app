import { BrowserRouter, Switch } from "react-router-dom";
import "./styles/app.css";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      {/* Enable multi page SPA */}
      <BrowserRouter>
        <Switch>
          {/* Render Components */}
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
