export default {
  computed: {
    currentActiveRoutes() {
      const route = this.$route
      let currentActiveRoutes = []
      const activeRoutes = this.$store.state.activeRoutes
      Object.keys(activeRoutes).forEach(key => {
        for (const activeRoute of activeRoutes[key]) {
          const currentActiveRoute = route.fullPath.includes(activeRoute)
            ? key
            : currentActiveRoute
          currentActiveRoutes.push(currentActiveRoute)
        }
      })
      return currentActiveRoutes
    }
  },
  created() {
    //google analytics
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag("js", new Date())
    gtag("config", "UA-138727237-1")
  },
  watch: {
    $route(to) {
      this.mountPage();
    }
  }
}