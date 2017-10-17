<template>
  <footer>
    <div class="logo">
      <span><router-link to="/">{{ logo }}</router-link></span>
    </div>
    <div class="copyright">
      <span>&copy; {{ year }} &middot; mitchelsevere.tech  &middot; Mitchel Severe</span>
    </div>
    <div class="links">
      <router-link to="/github"><i class="fa fa-github" aria-hidden="true"></i></router-link>
      <router-link to="/behance"><i class="fa fa-behance" aria-hidden="true"></i></router-link>
      <router-link to="/linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></router-link>
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
$main-color: #0D0D0D;
$secondary-color: #FFF;
$accent-color: #6C6C6C;
$behance-color: #0A44C7;
$linkedin-color: #1178B2;
$github-color: #F3CAB3;
$gmail-color: #FF2222;

$font-stack-logo: 'Monoton', cursive;
$font-stack-tertiary: 'Helvetica', sans-serif;

  footer {
    width: 100%;
    height: 30vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $main-color;
    transition: 300ms;
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
      font-family: $font-stack-tertiary;
      font-weight: lighter;
      letter-spacing: 0.1vh;
      color: $accent-color;
      font-size: 1.7vh;
    }
  }

  .fa-behance:hover {
    color: $behance-color;
  }

  .fa-linkedin:hover {
    color: $linkedin-color;
  }

  .fa-github:hover {
    color: $github-color;
  }

  .fa-envelope-o:hover {
    color: $gmail-color;
  }

</style>
