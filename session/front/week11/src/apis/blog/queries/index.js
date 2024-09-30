import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../axios";
import { updatePost } from "../axios";
import { getPost } from "../axios";
import { deletePost } from "../axios";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost(title, content),
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: ({ postId, title, content }) =>
      updatePost(postId, title, content),
  });
};

export const useGetPost = (postId) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
    enabled: !!postId,
    staleTime: 10000,
    cacheTime: 60000,
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      alert("게시글이 삭제되었습니다.");
      queryClient.invalidateQueries("postList");
    },
  });
};
