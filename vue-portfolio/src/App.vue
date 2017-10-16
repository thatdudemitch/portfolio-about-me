<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import './assets/scss/main.scss';
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">

</style>
