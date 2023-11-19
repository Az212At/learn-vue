import API from "@/package/axios/axios-instance";

export const apiGetPosts = () => {
  return API.get("posts");
};
