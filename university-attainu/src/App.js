import "./App.css";
import routes from "./router/Routes";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, i) => {
            return <Route key={i} {...route} />;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
