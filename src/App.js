import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import UserContainer from "./views/users/UserContainer";
import RoleContainer from "./views/roles/RoleContainer";
import PermissionContainer from "./views/permissions/PermissionContainer";
import ProductContainer from "./views/products/ProductContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route path="/users">
              <UserContainer />
            </Route>
            <Route path="/roles">
              <RoleContainer />
            </Route>

            <Route path="/permissions">
              <PermissionContainer />
            </Route>

            {/* <Route path="/products">
              <ProductContainer />
            </Route> */}

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
