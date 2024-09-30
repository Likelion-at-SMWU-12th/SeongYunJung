import axios from "axios";

export const createPost = async (newPost) => {
  const { data } = await axios.post(`/api/posts`, newPost);
  return data;
};

export const updatePost = async (postId, updatePost) => {
  const { data } = await axios.put(`/api/posts/${postId}`, updatePost);
  return data;
};

export const getPost = async (postId) => {
  const { data } = await axios.get(`/api/posts/${postId}`);
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await axios.delete(`api/posts/${postId}`);
  return data;
};

// 프론트 11주차 과제
export const postSignup = async (username, password) => {
  const { data } = await axios.post(`/api/signup`, username, password);
  return data;
};

export const updateProfile = async (username) => {
  const { data } = await axios.put(`/api/editInfo`, username);
  return data;
};

export const myPageFetch = async (userId) => {
  const { data } = await axios.get(`api/myPageFetch/${userId}`);
  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await axios.delete(`api/delete/${userId}`);
  return data;
};
