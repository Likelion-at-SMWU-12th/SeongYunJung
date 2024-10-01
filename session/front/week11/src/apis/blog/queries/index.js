import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../axios";
import { updatePost } from "../axios";
import { getPost } from "../axios";
import { deletePost } from "../axios";
import { postSignup } from "../axios";
import { updateProfile } from "../axios";
import { myPageFetch } from "../axios";
import { deleteUser } from "../axios";

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

// 프론트 11주차 과제
// 회원가입 (sign up)
export const usePostSignup = () => {
  return useMutation({
    mutationFn: ({ username, password }) => postSignup(username, password),
    onSuccess: () => {
      alert("환영합니다!");
    },
    enabled: !!username && !!password,
  });
};

// 개인정보 수정 (update profile)
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (username) => updateProfile(username),
    onSuccess: () => {
      queryClient.invalidateQueries("myPage");
    },
  });
};

// 마이페이지 조회 (my page fetch)
export const useMyPageFetch = (userId) => {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => myPageFetch(userId),
    staleTime: 30000,
    cacheTime: 300000,
  });
};

// 회원 정보 삭제 (delete user)
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) => {
      deleteUser(userId);
    },
    // 1시간동안 관련 데이터 유지
    cacheTime: 3600000,
    onSuccess: () => {
      alert("계정이 삭제되었습니다!");
      queryClient.invalidateQueries("mypage");
    },
  });
};
