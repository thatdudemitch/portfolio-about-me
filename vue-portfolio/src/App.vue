<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import './assets/scss/main.scss';
import Navigation from './components/Navigation';
import Foot from './components/Foot';

export default {
  name: 'app',
  components: {
    Navigation,
    Foot,
  },
};
</script>
