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
<<<<<<< HEAD
  watch: {
    $route(to) {
      this.mountPage();
    }
  }
=======
>>>>>>> 769c8a475ff0d3566a2544adb17d060acb3462d1
}