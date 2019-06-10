import { ADD_USER, EDIT_USER, DELETE_USER } from "../actions/types";

const userListReducerInitialState = {
  userList: []
};
export const userListReducer = (
  state = userListReducerInitialState,
  action
) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, userList: [...state.userList, { ...action.payload }] };

    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter(
          user => user.userName !== action.payload
        )
      };

    case EDIT_USER: {
      let tempList = [...state.userList];
      state.userList.forEach((el, i) => {
        if (el.userName === action.payload.userName) {
          tempList[i] = { ...action.payload };
        }
      });
      return { ...state, userList: tempList };
    }
    default:
      return state;
  }
};
