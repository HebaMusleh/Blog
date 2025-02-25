import Toast from "../plugin/Toast";
import apiInstance from "../utils/axios";

export const fetchPosts = async ()=>{
    try {
        const res = await apiInstance.get("posts/lists/");
        return res.data;
    } catch (error) {
        // Toast("error",error?.message);
    }
}