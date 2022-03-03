import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddPermission = props => {
  const [permission, setPermission] = useState("");
  const changePermission = e => {
    setPermission(e.target.value);
  };

  const submitPermission = () => {
    if (permission === "") {
      alert("Please enter permission name");
      return false;
    }

    const data = {
      id: 100,
      name: permission,
      permissions: []
    };
    props.onSubmit(data);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>New Permission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Enter Permission
            </Form.Label>
            <Col sm="6">
              <input
                className="form-control"
                value={permission}
                onChange={changePermission}
                placeholder="Enter Permission Name"
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onClose} className="btn btn-danger">
          Cancel
        </button>
        <button onClick={submitPermission} className="btn btn-success">
          Save
        </button>
      </Modal.Footer>
    </>
  );
};

export default AddPermission;
