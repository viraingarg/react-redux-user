import React from "react";
import "./App.css";
import Users from "./components/Users";

function App(props) {
  function redirectToCreateUser(e) {
    e.preventDefault();
    props.history.push("/addUser");
  }

  return (
    <div className="App">
      <div className="header">
        <span>React Redux User CRUD Operations</span>
      </div>
      <div className="body">
        <div>
          <span>All Users</span>
          <button onClick={redirectToCreateUser}>
            Create Users <i className="fas fa-angle-right" />
          </button>
        </div>
        <Users />
      </div>
    </div>
  );
}

export default App;
