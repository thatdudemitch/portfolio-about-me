<template>
  <div class="resume">
    <p>Test</p>
  </div>
</template>

<script>
  export default {
    name: 'Resume',
  };
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

  .resume {
    width: 100%;
    height: 100vh;
    background: $main-color;
    color: $secondary-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -999;
  }
</style>