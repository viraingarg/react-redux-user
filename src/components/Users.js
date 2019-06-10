import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleUserName,
  handleUserAge,
  handleUserRole,
  editUser,
  deleteUser
} from "../actions/userActions";
import ModalComponent from "./ModalComponent";

class Users extends Component {
  handleModal(userName, e) {
    e.preventDefault();
    console.log("Handle modal called.", userName);
    this.props.setModalId(userName);
    setTimeout(() => {
      this.props.toggleModal();
    }, 200);
  }

  render() {
    var users = [];
    this.props.userList.forEach(user => {
      users.push(
        <div className="user-container" key={user.userName}>
          <div className="user-details">
            <table className="table">
              <tbody>
                <tr>
                  <th>User Name</th>
                  <td>{user.userName}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{user.age}</td>
                </tr>
                <tr>
                  <th>Role</th>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="user-buttons">
            <button
              onClick={e => {
                e.preventDefault();
                this.props.deleteUser(user.userName);
              }}
            >
              Delete
            </button>
            <button onClick={this.handleModal.bind(this, user.userName)}>
              Edit
            </button>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        {this.props.userList.length > 0 ? (
          <div className="all-users-container">{users}</div>
        ) : (
          <div className="no-user">
            <span>
              There is no user present at the moment, please create a user.
            </span>
          </div>
        )}
        {this.props.modalShow ? (
          <ModalComponent
            show={this.props.modalShow}
            onHide={this.props.toggleModal}
            onChangeUserName={this.props.onChangeUserName}
            onChangeUserAge={this.props.onChangeUserAge}
            onChangeUserRole={this.props.onChangeUserRole}
            editUser={this.props.editUser}
            setModalId={this.props.setModalId}
            userList={this.props.userList}
            currentModalId={this.props.currentModalId}
            userName={this.props.userName}
            age={this.props.age}
            role={this.props.role}
            message={this.props.message}
            setMessage={this.props.setMessage}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList.userList,
    userName: state.userDetails.userName,
    age: state.userDetails.age,
    role: state.userDetails.role,
    modalShow: state.userDetails.modalShow,
    currentModalId: state.userDetails.currentModalId,
    message: state.userDetails.message
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeUserName: value => dispatch(handleUserName(value)),
  onChangeUserAge: value => dispatch(handleUserAge(value)),
  onChangeUserRole: value => dispatch(handleUserRole(value)),
  deleteUser: value => dispatch(deleteUser(value)),
  editUser: value => dispatch(editUser(value)),
  toggleModal: () => dispatch({ type: "TOGGLE_MODAL" }),
  setModalId: value => dispatch({ type: "SET_MODAL_ID", payload: value }),
  setMessage: value => dispatch({ type: "SET_MESSAGE", payload: value })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
