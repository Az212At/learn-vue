<script>
import { usePostsStore } from "@/stores/posts.store";
import { mapState } from "pinia";

export default {
  name: "AboutPage",

  data() {
    const postsStore = usePostsStore();
    return {
      postsStore,
    };
  },

  computed: {
    ...mapState(usePostsStore, {
      posts: "posts",
    }),
  },

  mounted() {
    this.postsStore.getPosts();
  },
};
</script>

<template>
  <div class="about-page">AboutPage</div>
</template>

<style lang="scss" scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
}
</style>
