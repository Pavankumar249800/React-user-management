import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import getRolePermissionsData from "../../services/roles/rolePermissionsData";
import Modal from "react-bootstrap/Modal";
import AddPermission from "./AddPermission";
import EditPermission from "./EditPermission";
import axios from "axios";

const PermissionList = () => {
  const [permissions, setPermissions] = useState({
    permissionsDataAll: []
  });

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleEditModal = () => setShowEditModal(true);

  const addPermission = () => {};

  useEffect(() => {
    let permissionsData = { ...permissions };
    // roleData.rolesDataAll = getRolePermissionsData();
    axios.get("http://127.0.0.1:8000/management/permission-api/").then(response=>{
      setPermissions({permissionsDataAll:response.data});
    })
    setPermissions(permissionsData);
  }, [setPermissions]);

  const editPermission = item => {
    setEditData(item);
    handleEditModal();
  };

  const deletePermission = index => {
    const permissionsData = { ...permissions };
    // Call an external api or make a service call
    permissionsData.permissionsDataAll.splice(index, 1);
    setPermissions(permissionsData);
    toast.error("Permission Deleted !", {
      position: toast.POSITION.RIGHT_CENTER
    });
  };

  const onSubmitAddPermission = data => {
    const permissionsData = { ...permissions };
    permissionsData.permissionsDataAll.unshift(data);
    setPermissions(permissionsData);
    setShowModal(false);
    toast.success("Congratulation, Permission Added !", {
      position: toast.POSITION.RIGHT_CENTER
    });
  };

  const onSubmitEditPermission = data => {
    const permissionsData = { ...permissions };

    for (let index = 0; index < permissionsData.permissionsDataAll.length; index++) {
      if (permissionsData.permissionsDataAll[index].id === data.id) {
        permissionsData.permissionsDataAll[index] = data;
      }
    }

    setPermissions(permissionsData);
    setShowEditModal(false);
    toast.success("Congratulation, Permission Edited !", {
      position: toast.POSITION.RIGHT_CENTER
    });
  };

  return (
    <>
      <ToastContainer />
      <div>
        <div className="float-left">
          {" "}
          <h2>Permissions Lists</h2>
        </div>
        <div className="float-right">
          <button className="btn btn-success" onClick={handleShowModal}>
            {" "}
            + New Permission
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>CreatedOn</th>
            <th>ModifiedOn</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {permissions.permissionsDataAll.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.created_on}</td>
              <td>{item.modified_on}</td>
              {/* <td>
                {item.permissions.map((permission, index2) => (
                  <span className="badge badge-default" key={index2}>
                    {" "}
                    {permission.name}{" "}
                  </span>
                ))}
              </td> */}
              <td>
                <button
                  className="btn btn-success mr-2"
                  onClick={() => editPermission(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePermission(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {permissions.permissionsDataAll.length === 0 && (
            <tr>
              <td colSpan={5} className="text-danger">
                No Data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        centered
      >
        <AddPermission onSubmit={onSubmitAddPermission} onClose={handleCloseModal} />
      </Modal>

      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={true}
        centered
      >
        <editPermission
          permission={editData}
          onSubmitEdit={onSubmitEditPermission}
          onCloseEdit={handleCloseEditModal}
        />
      </Modal>
    </>
  );
};

export default PermissionList;
