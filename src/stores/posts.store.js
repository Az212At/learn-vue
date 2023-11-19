import { defineStore } from "pinia";
import { apiGetPosts } from "@/api/posts";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),

  actions: {
    getPosts() {
      return new Promise((resolve, reject) => {
        apiGetPosts()
          .then((response) => {
            this.posts = response.data;
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
