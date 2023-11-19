import { defineStore } from "pinia";
import { apiGetUsers } from "@/api/users";

export const usePostsStore = defineStore("users", {
  state: () => ({
    users: [],
  }),

  actions: {
    getUsers() {
      return new Promise((resolve, reject) => {
        apiGetUsers()
          .then((response) => {
            this.users = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
