<template>
  <div class="index">
    <div class="splash-container">
      <div class="description">
        <vue-typer
          :text='["Hi, I am Mitchel Severe and welcome to my portfolio. I enjoy implementing design with programming to create clean and attractive websites and web apps. I spend everyday refining my skills on technologies while learning how to implement new technologies to my reptoire."]'
          :repeat='0'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='30'
          :type-delay='100'
          caret-animation='smooth'>
        </vue-typer>
      </div>
      <div class="arrow"> 
        <a href="#content">
          <i class="fa fa-angle-double-down" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div id="content">
      <ul class="tabs">
        <li :class="{ active: isActive('skills') }" @click="setActive('skills')">Skills</li>
        <li to="#" :class="{ active: isActive('web') }" @click="setActive('web')">Web Apps</li>
        <li to="#" :class="{ active: isActive('graphic') }" @click="setActive('graphic')">Graphic Design</li>
      </ul>
      <div class="skills" v-if="this.activeItem === 'skills'">
        <img src="../assets/images/api.png">
        <img src="../assets/images/bootstrap.png">
        <img src="../assets/images/css.png">
        <img src="../assets/images/express.png">
        <img src="../assets/images/html.png">
        <img src="../assets/images/javascript.png">
        <img src="../assets/images/nodejs.png">
        <img src="../assets/images/postgres.png">
        <img src="../assets/images/rails.png">
        <img src="../assets/images/react.png">
        <img src="../assets/images/sass.png">
        <img src="../assets/images/vue.png">
      </div>
      <div v-else-if="this.activeItem === 'web'">
        Web
      </div>
      <div v-else>
        Graphic Design
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Index',
  data() {
    return {
      activeItem: 'skills',
    };
  },
  methods: {
    isActive(menuItem) {
      console.log('item is active', this.activeItem);
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      console.log('clicked');
      this.activeItem = menuItem;
    },
  },
  components: {
    VueTyper,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

  .splash-container {
    width: 100%;
    height: 100vh;
    background: $main-color;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -999;
  }

  .description {
    width: 50%;
    font-size: 4.2vh;
    line-height: 8vh;
    font-weight: normal;
    letter-spacing: 0.5px;
  }

  #content {
    width: 100%;
    height: 100vh;
    background: #eee;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      font-family: Helvetica;
      font-weight: lighter;
    }
  }

  .skills {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 15%;
      padding: 2%;
      height: 100%;
      margin-bottom: 20px;
      filter: grayscale(100%);
      cursor: pointer;
      transition: 500ms;
      &:hover {
        filter: grayscale(0%);
      }
    }
  }
  
  p {
    color: #FFF;
  }

  li {
    transition: 500ms;
  }
  
  .arrow {
    position: absolute;
    bottom: 0;
    font-size: 6vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    a {
      color: $secondary-color;
      z-index: 99;
      &:hover {
        color: $accent-color-secondary;
      }
    }
  }

  .tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5% 0;
    border-bottom: 1px solid 
    li {
      list-style-type: none;
      font-family: Helvetica;
      font-weight: bold;
      font-size: 2.2vh;
      margin: 10px;
      height: 25px;
      cursor: pointer;
    }
  }
</style>