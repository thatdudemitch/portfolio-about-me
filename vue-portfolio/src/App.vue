<template>
  <div id="app">
    <navigation></navigation>
    <index></index>
    <foot></foot>
  </div>
</template>

<script>
import './assets/scss/main.scss';
import Navigation from './components/Navigation';
import Index from './components/Index';
import Foot from './components/Foot';

export default {
  name: 'app',
  components: {
    Navigation,
    Index,
    Foot,
  },
};
</script>
