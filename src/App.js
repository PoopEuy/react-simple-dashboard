import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="d-flex">
      <div className="w-auto">
        <Sidebar />
      </div>

      <div className="col">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
