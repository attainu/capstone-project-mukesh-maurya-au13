import "./App.css";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import Routes from "./router/Routes";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-area">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="router">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
