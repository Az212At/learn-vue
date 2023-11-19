<script>
export default {
  name: "MainPost",

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="main-post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<style lang="scss" scoped>
.main-post {
  width: 300px;
  padding: 8px;
  border: 1px solid black;

  h2 {
    @include h1;
    color: $red;
    margin-bottom: 20px;
  }
}
</style>
