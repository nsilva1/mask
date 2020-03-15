import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Navigationbar from "./Components/Common/Navbar";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
    </div>
  );
}

export default App;
