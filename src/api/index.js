import axios from "axios";

const API = axios.create({
  baseURL: "https://gorest.co.in/public/v2",
});

let token = "13977fbe7e9903710dad19328ac60e733dcaefc9c1e3e897ab42784b8edbfdff";
export const fetchPosts = () => API.get(`/posts`);

export const fetchPost = (id) => API.get(`/posts/${id}`);

export const createPost = (newPost) =>
  API.post(`/users/206347/posts`, newPost, {
    headers: { Authorization: `Bearer ${token}` },
  });

// ======================================================
//fetch user
export const fetchUsers = (page) => API.get(`/users?page=${page}&per_page=20`);
export const fetchUser = (id) => API.get(`/users/${id}`);
//create user
export const createUser = (newUser) =>
  API.post(`/users`, newUser, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateUser = (id, updatedUser) =>
  API.patch(`/users/${id}`, updatedUser, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteUser = (id) =>
  API.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//comments
export const fetchComments = () => API.get(`/comments`);

export const createComment = (comment) =>
  API.post(`/posts/206300/comments`, comment, {
    headers: { Authorization: `Bearer ${token}` },
  });
