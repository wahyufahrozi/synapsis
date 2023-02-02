import {
  FETCH_ALL,
  CREATE,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_COMMENTS,
  CREATE_USER,
  CREATE_COMMENT,
} from "../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = { isLoading: true, posts: [], comments: [] },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload.data,
      };
    case CREATE_USER:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload.data,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};
