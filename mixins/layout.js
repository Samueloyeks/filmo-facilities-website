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
}