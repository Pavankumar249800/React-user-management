import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";

import AssignRole from "./AssignRole";
import AssignRoleEdit from "./AssignRoleEdit";
import EditUser from "./EditUser";
import Newuser from "./UserNewForm";


const UserList = () => {
  const [users, setUsers] = useState({
    userDataAll: []
  });
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState("");
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleEditModal = () => setShowEditModal(true);

  useEffect(() => {
    let userData = { ...users };
    //userData.userDataAll = getUserData();
    axios.get("http://127.0.0.1:8000/management/users-api/").then(response=>{
      setUsers({userDataAll:response.data});
    })
    setUsers(userData);
  }, [setUsers]);

  const editUser = item => {
    setEditData(item);
    handleEditModal();
  };

  const deleteUser = index => {
    const userData = { ...users };
    // Call an external api or make a service call
    axios.delete("http://127.0.0.1:8000/management/users-api/" + (index+1)).then(() => {
      setUsers(userData);
     // this.props.resetState();
     // this.toggle();
    });
   
    // setUsers(userData);
    toast.success("User Deleted !", {
      position: toast.POSITION.RIGHT_CENTER,
      autoClose: 1000
    });
  };

  const onSubmitAssignRole = data => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      if (userData.userDataAll[index].id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    setShowModal(false);
    toast.success("Congratulation, Role assigned to the user !", {
      position: toast.POSITION.RIGHT_CENTER
    });
  };

  const onSubmitAssignRoleEdit = data => {
    const userData = { ...users };
    for (let index = 0; index < userData.userDataAll.length; index++) {
      if (userData.userDataAll[index].id === data.id) {
        userData.userDataAll[index] = data;
      }
    }
    setUsers(userData);
    setShowEditModal(false);
    toast.success("Congratulation, Assigned Role Edited !", {
      position: toast.POSITION.RIGHT_CENTER
    });
  };

  return (
    <>
      <ToastContainer />
      <div>
        <div className="float-left">
          {" "}
          <h2>User Lists</h2>
        </div>
        <div className="float-right">
          <button className="btn btn-success" onClick={handleShowModal}>
            {" "}
            + Assign Role
          </button>
        </div>
        <div>
      <div className="float-left">
          <button className="btn btn-primary" onClick={handleShowModal2}>
            {" "}
            + NewUser
          </button>
        </div>
      </div>
      </div>
     
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>UsernameasEmail</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.userDataAll.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.usernameasemail}</td>
              <td>{item.username}</td>
              {/* <td>{item.role != null ? item.role.name : "-"}</td> */}
              <td>
                <button
                  className="btn btn-success mr-2"
                  onClick={handleShowModal3}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {users.userDataAll.length === 0 && (
            <tr>
              <td colSpan={5} className="text-danger">
                No Data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      

      <Modal
        show={showEditModal}
        onHide={handleCloseEditModal}
        animation={true}
        centered
      >
        <AssignRoleEdit
          onSubmitEdit={onSubmitAssignRoleEdit}
          onCloseEdit={handleCloseEditModal}
          user={editData}
        />
      </Modal>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        animation={true}
        centered
      >
        <AssignRole onSubmit={onSubmitAssignRole} onClose={handleCloseModal} />
      </Modal>
      <Modal
        show={showModal2}
        onHide={handleCloseModal2}
        animation={true}
        centered
      >
        <Newuser onClose={handleCloseModal2}/>
      </Modal>
      <Modal
        show={showModal3}
        onHide={handleCloseModal3}
        animation={true}
        centered
      >
        <EditUser onClose={handleCloseModal3}/>
      </Modal>
    </>
  );
};

export default UserList;
