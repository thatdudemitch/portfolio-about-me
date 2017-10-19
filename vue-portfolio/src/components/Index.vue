<template>
  <div class="index">
    <div class="splash-container">
      <div class="description" :style="{ opacity: activeOpacity }">
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
    <ul id="tabs">
      <li :class="{ active: isActive('skills') }" @click="setActive('skills')">Skills</li>
      <li to="#" :class="{ active: isActive('web') }" @click="setActive('web')">Web Apps</li>
      <li to="#" :class="{ active: isActive('graphic') }" @click="setActive('graphic')">Graphic Design</li>
    </ul>
    <div class="content">
      <transition name="slide-fade" mode="out-in">
      <div class="skills" v-if="this.activeItem === 'skills'" key="skills">
        <h2>These are my skills.</h2>
        <div class="skills-icons" v-scroll-reveal>
          <div>
            <img src="../assets/images/api.png">
            <span>APIs</span>
          </div>
          <div>
            <img src="../assets/images/bootstrap.png">
            <span>Bootstrap</span>
          </div>
          <div>
            <img src="../assets/images/css.png">
            <span>CSS3</span>
          </div>
          <div>
            <img src="../assets/images/express.png">
            <span>Express</span>
          </div>
          <div>
            <img src="../assets/images/html.png">
            <span>HTML5</span>
          </div>
          <div>
            <img src="../assets/images/javascript.png">
            <span>JavaScript</span>
          </div>
          <div>
            <img src="../assets/images/nodejs.png">
            <span>NodeJS</span>
          </div>
          <div>
            <img src="../assets/images/postgres.png">
            <span>PostgreSQL</span>
          </div>
          <div>
            <img src="../assets/images/rails.png">
            <span>Rails</span>
          </div>
          <div>
            <img src="../assets/images/react.png">
            <span>React</span>
          </div>
          <div>
            <img src="../assets/images/sass.png">
            <span>Sass/SCSS</span>
          </div>
          <div>
            <img src="../assets/images/vue.png">
            <span>Vue</span>
          </div>
        </div>
      </div>
      <div class="web" v-else-if="this.activeItem === 'web'" key="web">
        <h2>Web apps built by me.</h2>
        <div class="web-thumbnails" v-scroll-reveal>
        </div>
      </div>
      <div v-else key="graphic">
        <h2>Curated designs from yours truly.</h2>
      </div>
      </transition>
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
      scrollPosition: 0,
      activeOpacity: 1,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateFadeScroll);
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
    updateFadeScroll() {
      this.scrollPosition = window.scrollY;
      switch (true) {
        case this.scrollPosition < 50:
          this.activeOpacity = 1;
          break;
        case this.scrollPosition < 200:
          this.activeOpacity = 0.7;
          break;
        case this.scrollPosition < 500:
          this.activeOpacity = 0.4;
          break;
        case this.scrollPosition < 520:
          this.activeOpacity = 0.2;
          break;
        case this.scrollPosition < 550:
          this.activeOpacity = 0;
          break;
        default:
          break;
      }
      // sr
      console.log(this.scrollPosition);
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
    width: 100vw;
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

  .content {
    width: 100vw;
    height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 6vh;
    }
  }

  .skills {
    display: flex;
    align-items: center;
    flex-direction: column;
    .skills-icons {
      width: 40%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      div {
        width: 16%;
        padding: 2%;
        text-align: center;
        filter: grayscale(100%);
        color: $accent-color;
        &:hover {
          filter: grayscale(0%);
          color: $main-color;
        }
        span {
          font-size: 1.7vh;
          font-weight: bold;
        }
        img {
          width: 100%;
          height: auto;
          margin-bottom: 12px;
          cursor: pointer;
          transition: 500ms;
        }
      }
    }
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

  #tabs {
    display: flex;
    width: 97vw;
    margin: 1.6% 0;
    color: $accent-color;
    li {
      list-style-type: none;
      font-size: 1.8vh;
      height: 33px;
      margin: 0 1%;
      cursor: pointer;
    }
  }
</style>