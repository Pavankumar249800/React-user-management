import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import getPermissionsMasterData from "../../services/permissions/permissionMasterData";
import { checkObjectInArray } from "../../services/utils/Helper";

const EditRole = props => {
  const [roleData, setRoleData] = useState({
    id: "",
    name: "",
    permissions: []
  });

  const changeRole = e => {
    // setRole(e.target.value);
  };

  const [permissions, setPermissions] = useState({
    allPermissions: []
  });
  const { role, onSubmitEdit, onCloseEdit } = props;

  const submitRole = () => {
    if (roleData.name === "") {
      alert("Please type a role name");
      return false;
    }

    let selectedPermissions = [];
    permissions.allPermissions.forEach((item, index) => {
      if (item.isChecked) {
        selectedPermissions.push(item);
      }
    });

    const data = {
      id: roleData.id,
      name: roleData.name,
      permissions: selectedPermissions
    };

    onSubmitEdit(data);
  };

  useEffect(() => {
    let roleDataNew = { ...roleData };
    roleDataNew = {
      id: role.id,
      name: role.name,
      permissions: role.permissions
    };
    setRoleData(roleDataNew);
  }, [setRoleData]);

  useEffect(() => {
    let permissionsData = { ...permissions };
    let allPermissionsData = getPermissionsMasterData();
    allPermissionsData.forEach((item, index) => {
      item.isChecked = checkObjectInArray(item, role.permissions, "id");
      permissionsData.allPermissions.push(item);
    });
    setPermissions(permissionsData);
  }, [setPermissions]);

  const checkPermission = (e, index) => {
    let permissionsData = { ...permissions };
    const checkedStatus = e.target.checked;
    permissionsData.allPermissions[index].isChecked = checkedStatus;
    setPermissions(permissionsData);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Edit Role</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="role">
            <Form.Label column sm="4">
              Enter Role
            </Form.Label>
            <Col sm="6">
              <input
                className="form-control"
                value={roleData.name}
                onChange={changeRole}
                placeholder="Enter Role Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="permissions">
            <Form.Label column sm="4">
              Permissions
            </Form.Label>
            <Col sm="6">
              {permissions.allPermissions.map((item, index) => (
                <>
                  <label>
                    <input
                      type="checkbox"
                      value={JSON.stringify(item)}
                      checked={item.isChecked ? true : false}
                      onChange={e => checkPermission(e, index)}
                    />{" "}
                    {item.name}
                  </label>{" "}
                  <br />
                </>
              ))}
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

export default EditRole;
