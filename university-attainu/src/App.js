import "./App.css";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Routes from "./router/Routes";
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
    // <div className="App">
    //   <div className="sidebar">
    //     <Sidebar />
    //   </div>
    //   <div className="main-area">
    //     <div className="topbar">
    //       <Topbar />
    //     </div>
    //     <div className="router">
    //       <Routes />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
