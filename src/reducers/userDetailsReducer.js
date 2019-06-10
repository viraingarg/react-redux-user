import {
  HANDLE_USER_NAME,
  HANDLE_USER_AGE,
  HANDLE_USER_ROLE,
  TOGGLE_MODAL,
  SET_MODAL_ID,
  SET_MESSAGE
} from "../actions/types";

const userDetailsReducerInitialState = {
  userName: "",
  age: "",
  role: "",
  modalShow: false,
  currentModalId: "",
  message: ""
};

export const userDetailsReducer = (
  state = userDetailsReducerInitialState,
  action
) => {
  switch (action.type) {
    case HANDLE_USER_NAME:
      return { ...state, userName: action.payload };
    case HANDLE_USER_AGE:
      return { ...state, age: action.payload };
    case HANDLE_USER_ROLE:
      return { ...state, role: action.payload };
    case TOGGLE_MODAL:
      return { ...state, modalShow: !state.modalShow };
    case SET_MODAL_ID:
      return { ...state, currentModalId: action.payload };
    case SET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
