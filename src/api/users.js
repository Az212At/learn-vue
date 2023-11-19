import API from "@/package/axios/axios-instance";

export const apiGetUsers = () => {
  return API.get("users");
};
