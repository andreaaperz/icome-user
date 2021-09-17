import React from "react";
import Login from "../pages/Login/Login.page";
import Home from "../pages/Home/Home.page";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Detail from "../pages/Detail/Detail.page";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Link to="/detail?id=:foil">
          <Detail />
        </Link>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
