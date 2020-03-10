export default {
    computed: {
        checkAuth() {
            return this.$store.state.auth.isAuthenticated
        },
        authUser() {
            let user = this.$store.state.auth.user
            if (!user) {
                user = this.setAuth().user
            }
            return user
        },
        role() {
            let role = this.$store.state.auth.role
            if (!role) {
                role = this.setAuth().role
            }
            return role
        },
    },
    methods: {
        setAuth() {
            let authPayLoad = this.$store.state.auth
            let userString = localStorage.getItem('user')
            if (userString) {
                let user = JSON.parse(userString)
                let jwt_token = localStorage.getItem('jwt')
                let isAuthenticated = (localStorage.getItem('isAuthenticated')) ? true : false
                let role = null
                let roleString = localStorage.getItem('role')
                if (roleString) {
                    role = JSON.parse(roleString)
                }
                authPayLoad = { user, jwt_token, isAuthenticated, role }
                this.$store.commit('auth/setAuth', authPayLoad)
            }
            return authPayLoad
        },
        checkRolePermission(routeName) {
            return true
        }
    },
    created() {
        this.setAuth()
    }
}