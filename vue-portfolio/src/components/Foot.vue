<template>
  <footer>
    <div class="logo">
      <span><router-link to="/">{{ logo }}</router-link></span>
    </div>
    <div class="copyright">
      <span>&copy; {{ year }} &middot; mitchelsevere.tech  &middot; Mitchel Severe</span>
    </div>
    <div class="links">
      <a href="https://github.com/thatdudemitch" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
      <a href="https://www.behance.net/mitchelsevere" target="_blank"><i class="fa fa-behance" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/misevere/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
      <a href="mailto:mitchelsevere@gmail.com?Subject=I%20Came%20Across%20Your%20Portfolio" target="_top"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Foot',
  data() {
    return {
      logo: 'M',
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

  footer {
    width: 100vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $main-color;
    background: #EFEFEF;
    a {
      color: $main-color;
    }
  }

  .logo {
    font-size: 4vh;
    a {
      font-family: $font-stack-logo;
    }
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    i {
      font-size: 4vh;
      margin: 0% 1.5vh;
      transition: 500ms;
    }
  }

  .copyright {
    span {
      font-family: $font-stack-primary;
      font-weight: lighter;
      letter-spacing: 0.1vh;
      color: $main-color;
      font-size: 1.7vh;
    }
  }

@media only screen
and (max-device-width: 750px)
and (-webkit-min-device-pixel-ratio: 2) {
  footer {
    height: 20vh;
  }
}

</style>
