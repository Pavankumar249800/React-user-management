import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddRole = props => {
  const [role, setRole] = useState("");
  const changeRole = e => {
    setRole(e.target.value);
  };

  const submitRole = () => {
    if (role === "") {
      alert("Please enter role name");
      return false;
    }

    const data = {
      id: 100,
      name: role,
      permissions: []
    };
    props.onSubmit(data);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>New Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Enter Role
            </Form.Label>
            <Col sm="6">
              <input
                className="form-control"
                value={role}
                onChange={changeRole}
                placeholder="Enter Role Name"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onClose} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitRole} className="btn btn-success">
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default AddRole;
