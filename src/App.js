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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return <>
    <Topbar />
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/write">
          <Write />
        </Route>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/post/:postId">
          <SinglePage />
        </Route>

      </Switch>
    </Router>

  </>;
}

export default App;