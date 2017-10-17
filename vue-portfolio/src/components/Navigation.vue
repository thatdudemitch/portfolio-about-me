<template>
  <nav :class="[scrollPosition > 720 ? 'scroll-nav' : 'top-nav']">
    <div class="logo">
      <span><router-link to="/">{{ logo }}</router-link></span>
    </div>
    <div class="links">
      <router-link to="/github"><i class="fa fa-github" aria-hidden="true"></i></router-link>
      <router-link to="/behance"><i class="fa fa-behance" aria-hidden="true"></i></router-link>
      <router-link to="/linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></router-link>
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
      console.log(this.scrollPosition);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #0D0D0D;
$secondary-color: #FFF;
$accent-color: #4C4C4C;
$font-stack-logo: 'Monoton', cursive;
  nav {
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 45px;
    transition: 300ms;
  }

  .logo {
    font-size: 50px;
    a {
      letter-spacing: 0.2px;
      font-family: $font-stack-logo;
    }
  }

  .links {
    margin-right: 70px;
    margin-top: 10px;
    i {
      font-size: 25px;
      margin: 0px 8px;
    }
  }

  .scroll-nav {
    background-color: $secondary-color;
    border-bottom: 1px solid $accent-color;
    a {
      color: $main-color;
    }
    span {
      transition: 50ms;
        &:hover {
          font-family: Arial !important;
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
      margin-bottom: 3px;
      border-bottom: 0px solid $secondary-color;
      transition: 200ms ease-in-out;
      &:hover {
        border-bottom: 5px solid $secondary-color;
      }
    }
  }
</style>
