<script>
import { usePostsStore } from "@/stores/posts.store";
import { mapState } from "pinia";
import MainPost from "@/components/MainPost.vue";

export default {
  name: "HomePage",
  components: { MainPost },

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
  <div class="home-page">
    <MainPost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
}
</style>
