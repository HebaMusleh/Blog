import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/api";
import { QUERIES } from "../../enums/queies";
import { PostListQuery } from "../../models/posts/posts.models";

export const useGetPosts = () => {
  return useQuery<PostListQuery>({
    queryKey: [QUERIES.POSTS],
    queryFn: () => fetchPosts(),
  });
};
