<template>
  <nav ref="navbar">
    <div class="logo">
      <router-link to="/">{{ logo }}</router-link>
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
      logo: 'Mitchel Severe',
    };
  },
  mounted() {
    console.log(this.$refs.navbar.clientTop);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$main-color: #0D0D0D;
  nav {
    background: $main-color;
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
  }
  .logo {
    font-size: 20px;
    letter-spacing: 1px;
    a {
      color: #FFF;
    }
  }
  .links {
    margin-right: 40px;
    a {
      color: #FFF;
    }
    i {
      font-size: 20px;
      margin: 0px 5px;
    }
  }
</style>
