import React from "react";
import { Home } from "../Home";
import { Istorija } from "../Istorija";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">{props.title}</h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/Home">
                Pocetna
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/Istorija"
              >
                Istorija
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Istorija" component={Istorija} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
