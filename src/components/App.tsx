import React from "react";
import Login from "../pages/Login/Login.page";
import Home from "../pages/Home/Home.page";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
