import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { timeout } from "q";

class ModalComponent extends Component {
  componentDidMount() {
    if (this.props.currentModalId !== "" && this.props.currentModalId !== null)
      this.setData();
  }

  onUpdate(e) {
    e.preventDefault();
    let details = {
      userName: this.props.userName,
      age: this.props.age,
      role: this.props.role
    };
    this.props.setMessage("User details updated successfully.");
    this.props.editUser(details);
    setTimeout(() => {
      this.props.setMessage("");
    }, 2000);
  }

  setData = () => {
    console.log("Setting Data");
    this.props.userList.forEach(e => {
      if (e.userName === this.props.currentModalId) {
        this.props.onChangeUserName(e.userName);
        this.props.onChangeUserAge(e.age);
        this.props.onChangeUserRole(e.role);
      }
    });
  };

  render() {
    return (
      <Rodal visible={this.props.show} onClose={this.props.onHide}>
        <div className="modal-header">Edit User Details</div>
        <div className="modal-body">
          <div className="edit-user-details">
            <div>
              <input
                type="text"
                id="username"
                value={this.props.userName}
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
          </div>
        </div>
        <div className="modal-footer">
          <Button onClick={this.onUpdate.bind(this)}>Update</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </div>
        {this.props.message !== "" ? (
          <div className="message">
            <span>{this.props.message}</span>
          </div>
        ) : null}
      </Rodal>
    );
  }
}

export default ModalComponent;
