<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "MainLayout",
  components: { MainHeader },
};
</script>

<template>
  <div class="main-layout">
    <MainHeader />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  height: 100%;
  background: yellow;
}
</style>
