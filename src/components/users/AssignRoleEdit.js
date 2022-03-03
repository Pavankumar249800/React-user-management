import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import getRoleMasterData from "../../services/roles/roleMasterData";

const AssignRoleEdit = props => {
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("");
  const { user, onSubmitEdit, onCloseEdit } = props;

  const changeRole = e => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if (role === "") {
      alert("Please fill all the values");
      return false;
    }

    const roleData = JSON.parse(role);
    const data = {
      id: user.id,
      username: user.username,
      name: user.name,
      password: user.password,
      role: {
        id: roleData.id,
        name: roleData.name
      }
    };
    onSubmitEdit(data);
  };

  useEffect(() => {
    setRoles(getRoleMasterData);
    setRole(JSON.stringify(user.role));
  }, []);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Assigned Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              User
            </Form.Label>
            <Col sm="6">{props.user.name}</Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4">
              Select Role
            </Form.Label>
            <Col sm="6">
              <select
                className="form-control"
                value={role}
                onChange={changeRole}
                required
              >
                <option value="">Please select a role</option>
                {roles.map((item, index) => (
                  <option value={JSON.stringify(item)} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onCloseEdit} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitRole} className="btn btn-success">
          Update
        </button>
      </Modal.Footer>
    </>
  );
};

export default AssignRoleEdit;
