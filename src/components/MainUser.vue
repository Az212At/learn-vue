<script>
export default {
  name: "MainUser",

  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="main-user">
    <h2>{{ user.title }}</h2>
    <p>{{ user.body }}</p>
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
