import React, {useContext} from "react";
import "./App.css"
import Topbar from "./component/TopBar/Topbar";
import Home from  "./pages/Home"
import SinglePage from "./pages/SinglePage";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Context } from "./context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const {user = true} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <SinglePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
