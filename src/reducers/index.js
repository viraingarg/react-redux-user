import { userDetailsReducer as userDetails } from "./userDetailsReducer";
import { userListReducer as userList } from "./userListReducer";
import { combineReducers } from "redux";

export default combineReducers({ userDetails, userList });
