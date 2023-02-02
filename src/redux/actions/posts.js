import {
  FETCH_ALL,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  FETCH_COMMENTS,
  CREATE_POST,
  CREATE_COMMENT,
} from "../constants/actionTypes";
import * as api from "../../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts();
    // console.log("dadsdasd", data);
    dispatch({ type: FETCH_ALL, payload: { data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//comments
export const getComments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();

    dispatch({ type: FETCH_COMMENTS, payload: { data } });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(comment);
    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
