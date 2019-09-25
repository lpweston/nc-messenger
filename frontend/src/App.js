import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Login path="/" />
        <Home path="/home" />
      </Router>
    </div>
  );
}

export default App;
