import {
  FETCH_ALL,
  CREATE_USER,
  START_LOADING,
  END_LOADING,
  DELETE,
  UPDATE,
  //   FETCH_POST,
} from "../constants/actionTypes";
import * as api from "../../api/index";

export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchUsers(page);
    // console.log("dadsdasd", data);
    dispatch({ type: FETCH_ALL, payload: { data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchUser(id);
    // console.log("dadsdasd", data);
    dispatch({ type: FETCH_ALL, payload: { data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatedUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
