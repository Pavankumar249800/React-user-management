import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, withRouter } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

const Header = props => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState("");

  const logout = () => {
    localStorage.removeItem("userData");
    setIsLogged(false);
    toast.success("Successfully Logged out !", {
      position: toast.POSITION.RIGHT_CENTER
    });
    props.history.push("/");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
    setUserData(userData);
    if (typeof userData != "undefined") {
      if (userData.username && userData.username.length > 0) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    }
  }, [setUserData]);

  return (
    <Navbar bg="light" expand="lg">
      <ToastContainer />
      <div className="container">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!isLogged && (
              <Nav.Link>
                <Link to="/">Login</Link> {" "}
                <Link to="/register">Register</Link>

              </Nav.Link>
              
            )}

            {isLogged && (
              <>
                <Nav.Link>
                  <Link to="/users">
                    <span className="text-info">
                      Welcome {userData.username}
                    </span>
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default withRouter(Header);
