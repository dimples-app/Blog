import React from "react";
import "./App.css"
import Topbar from "./component/TopBar/Topbar";
import Header from "./component/Header/Header"
import SideBar from "./component/SideBar/SideBar";
import Home from  "./pages/Home"
import SinglePage from "./pages/SinglePage";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return <>
    <Topbar />
    <Register />

  </>;
}

export default App;