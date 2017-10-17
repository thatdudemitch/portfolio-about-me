<template>
  <nav :class="[scrollPosition > 720 ? 'scroll-nav' : 'top-nav']">
    <div class="logo">
      <span><router-link to="/">{{ logo }}</router-link></span>
    </div>
    <div class="link">
      <router-link to="mitchel-severe-resume">View Resume</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      logo: 'M',
      scrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #0D0D0D;
$secondary-color: #FFF;
$accent-color: #7C7C7C;

$font-stack-logo: 'Monoton', cursive;
$font-stack-tertiary: 'Helvetica', sans-serif;

  nav {
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 300ms;
  }

  .logo {
    font-size: 5vh;
    margin-left: 30px;
    a {
      font-family: $font-stack-logo;
    }
  }

  .link {
    margin-right: 30px;
    font-family: 'Helvetica', sans-serif;
    font-weight: lighter;
    a {
      height: 25px;
      transition: 100ms ease-in-out;
      margin-bottom: 4px;
    }
  }

  .scroll-nav {
    background-color: $secondary-color;
    box-shadow: 0 5px 5px -6px $accent-color;
    a {
      color: $main-color;
    }
    span {
      a {
        color: $main-color;
        transition: 500ms ease-in-out;
        &:hover {
          transform: rotate(180deg);
          font-size: 6vh;
        }
      }
    } 
    .link {
      a {
        &:hover {
          border-bottom: 1px solid $main-color;
        }
      }
    }
  }

  .top-nav {
    background-color: $main-color;
    a {
      color: $secondary-color;
    }
    span a {
      color: $secondary-color;
      transition: 500ms ease-in-out;
      &:hover {
        transform: rotate(180deg);
        font-size: 6vh;
      }
    }
    .link {
      a {
        &:hover {
          border-bottom: 1px solid $secondary-color;
        }
      }
    }
  }
</style>
