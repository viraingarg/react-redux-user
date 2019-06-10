import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleUserName,
  handleUserAge,
  handleUserRole,
  addUser
} from "../actions/userActions";

class AddUser extends Component {
  componentDidMount() {
    this.resetForm();
  }

  resetForm = () => {
    this.props.onChangeUserName("");
    this.props.onChangeUserAge("");
    this.props.onChangeUserRole("");
  };

  handleAddUser(e) {
    e.preventDefault();
    const { userName, age, role } = this.props;

    if (userName !== "" && age !== "" && role !== "") {
      var alreadyExists = false;
      this.props.userList.forEach(user => {
        if (user.userName === this.props.userName) alreadyExists = true;
      });

      if (!alreadyExists) {
        let details = {
          userName: this.props.userName,
          age: this.props.age,
          role: this.props.role
        };
        this.props.addUser(details);
        this.props.setMessage("User added Successfully");

        setTimeout(() => {
          this.resetForm();
        }, 2000);
      } else {
        this.props.setMessage("ERROR: User Name already exists.");
      }
    } else {
      this.props.setMessage("ERROR: Please fill all the details.");
    }
  }

  redirectToHome(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <span>React Redux User CRUD Operations</span>
        </div>
        <div className="all-users">
          <button onClick={this.redirectToHome.bind(this)}>
            <i className="fas fa-angle-left" /> All Users
          </button>
        </div>
        <div className="add-user-details">
          <div className="heading">Add User</div>
          <div>
            <input
              type="text"
              id="username"
              value={this.props.userName}
              onChange={e => this.props.onChangeUserName(e.target.value)}
              required
            />
            <label htmlFor="username">
              <i className="fas fa-user" /> User Name
            </label>
          </div>
          <div>
            <input
              type="date"
              id="userage"
              value={this.props.age}
              onChange={e => this.props.onChangeUserAge(e.target.value)}
              required
            />
            <label htmlFor="userage">
              <i className="fas fa-calendar-check" /> Date of Birth
            </label>
          </div>
          <div>
            <input
              type="text"
              id="userrole"
              value={this.props.role}
              onChange={e => this.props.onChangeUserRole(e.target.value)}
              required
            />
            <label htmlFor="userrole">
              <i className="fas fa-laptop" /> Role
            </label>
          </div>
          <div className="button">
            <button onClick={this.handleAddUser.bind(this)}>Add</button>
          </div>
          {this.props.message !== "" ? (
            <div
              className={
                this.props.message.includes("ERROR")
                  ? "error-message"
                  : "success-message"
              }
            >
              <span>{this.props.message}</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.userList.userList,
    userName: state.userDetails.userName,
    age: state.userDetails.age,
    role: state.userDetails.role,
    message: state.userDetails.message
  };
};

const mapDispatchToProps = dispatch => ({
  onChangeUserName: value => {
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch(handleUserName(value));
  },
  onChangeUserAge: value => {
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch(handleUserAge(value));
  },
  onChangeUserRole: value => {
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch(handleUserRole(value));
  },
  addUser: value => dispatch(addUser(value)),
  setMessage: value => dispatch({ type: "SET_MESSAGE", payload: value })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
