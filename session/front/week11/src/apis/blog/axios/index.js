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
