import Toast from "../plugin/Toast";
import apiInstance from "../utils/axios";

export const fetchPosts = async () => {
  try {
    const res = await apiInstance.get("/post/list");
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      Toast("error", error.message);
    } else {
      Toast("error", "An unknown error occurred");
    }
  }
};
