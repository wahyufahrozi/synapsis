import axios from "axios";

const API = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
});

let token = "13977fbe7e9903710dad19328ac60e733dcaefc9c1e3e897ab42784b8edbfdff";
//get post
export const fetchPosts = () => API.get(`/posts`);
//get detail post
export const fetchPost = (id) => API.get(`/posts/${id}`);

//create post
export const createPost = (newPost) =>
  API.post(`/users/193588/posts`, newPost, {
    headers: { Authorization: `Bearer ${token}` },
  });

// ======================================================
//fetch user
export const fetchUsers = (page) => API.get(`/users?page=${page}&per_page=20`);
//user detail
export const fetchUser = () =>
  API.get(`/users/193588`, {
    headers: { Authorization: `Bearer ${token}` },
  });
//create user
export const createUser = (newUser) =>
  API.post(`/users`, newUser, {
    headers: { Authorization: `Bearer ${token}` },
  });
//update user
export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser, {
    headers: { Authorization: `Bearer ${token}` },
  });
//delete user
export const deleteUser = (id) =>
  API.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//comments
export const fetchComments = () => API.get(`/comments`);
//create comments
export const createComment = (comment) =>
  API.post(`/posts/208550/comments`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
