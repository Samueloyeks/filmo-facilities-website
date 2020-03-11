<template>
  <div class="header-inner">
    <div class="container">
      <!--Logo-->
      <div id="logo">
        <nuxt-link to="/" class="logo" data-src-dark="/img/brochure/ffm_logo_white.png">
          <img
            style="margin-top: 15px; height: 75px;"
            src="/img/brochure/ffm_logo.png"
            alt="FFM Logo"
          />
        </nuxt-link>
      </div>
      <!--End: Logo-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentActiveRoutes() {
      const route = this.$route;
      let currentActiveRoutes = [];
      const activeRoutes = this.$store.state.activeRoutes;
      Object.keys(activeRoutes).forEach(key => {
        for (const activeRoute of activeRoutes[key]) {
          const currentActiveRoute = route.fullPath.includes(activeRoute)
            ? key
            : currentActiveRoute;
          currentActiveRoutes.push(currentActiveRoute);
        }
      });
      return currentActiveRoutes;
    }
  }
};
</script>