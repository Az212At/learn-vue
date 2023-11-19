<script>
export default {
  name: "MainHeader",
};
</script>

<template>
  <header class="main-header">
    <nav>
      <ol>
        <li>
          <RouterLink :to="{ name: 'HomePage' }">homePage</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'AboutPage' }">aboutPage</RouterLink>
        </li>
      </ol>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
}
</style>
