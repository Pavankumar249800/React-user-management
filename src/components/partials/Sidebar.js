import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const Sidebar = props => {
  const [pathName] = useState(props.history.location.pathname);

  return (
    <ul className="list-group">
      <li
        className={
          pathName === "/users" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/users">Users</Link>
      </li>
      <li
        className={
          pathName === "/roles" ? "list-group-item active" : "list-group-item"
        }
      >
        <Link to="/roles">Roles</Link>
      </li>
      <li
        className={
          pathName === "/permissions"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        <Link to="/permissions">Permissions</Link>
      </li>
      {/* <li
        className={
          pathName === "/products"
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        <Link to="/products">Products</Link>
      </li> */}
    </ul>
  );
};

export default withRouter(Sidebar);
