import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/api";
import { QUERIES } from "../../enums/queies";
import { PostList } from "../../models/posts/posts.models";

export const useGetPosts = () => {
  return useQuery<PostList>({
    queryKey: [QUERIES.POSTS],
    queryFn: () => fetchPosts(),
  });
};
