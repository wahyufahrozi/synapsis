import {
  CREATE_USER,
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  DELETE,
  UPDATE,
  // FETCH_POST,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, users: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        users: action.payload.data,
      };
    // case FETCH_POST:
    //   return {
    //     ...state,
    //     user: action.payload.data,
    //   };

    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
