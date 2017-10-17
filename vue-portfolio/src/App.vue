<template>
  <div id="app">
    <navigation></navigation>
    <index></index>
    <router-view/>
  </div>
</template>

<script>
import './assets/scss/main.scss';
import Navigation from './components/Navigation';
import Index from './components/Index';

export default {
  name: 'app',
  components: {
    Navigation,
    Index,
  },
};
</script>
