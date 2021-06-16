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
  const user = true;
  return <>
    <Topbar />
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>

        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>

        <Route path="/write">
          {user ? <Write /> : <Register /> }
        </Route>

        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>

        <Route path="/post/:postId">
          <SinglePage />
        </Route>

      </Switch>
    </Router>

  </>;
}

export default App;