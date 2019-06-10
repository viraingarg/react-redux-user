import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  HANDLE_USER_NAME,
  HANDLE_USER_AGE,
  HANDLE_USER_ROLE
} from "./types";

export function addUser(data) {
  return {
    type: ADD_USER,
    payload: data
  };
}

export function deleteUser(data) {
  return {
    type: DELETE_USER,
    payload: data
  };
}

export function editUser(data) {
  return {
    type: EDIT_USER,
    payload: data
  };
}

export function handleUserName(data) {
  return {
    type: HANDLE_USER_NAME,
    payload: data
  };
}

export function handleUserAge(data) {
  return {
    type: HANDLE_USER_AGE,
    payload: data
  };
}

export function handleUserRole(data) {
  return {
    type: HANDLE_USER_ROLE,
    payload: data
  };
}
