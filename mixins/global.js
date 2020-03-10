export default {
    computed: {
        timeNow() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }

            today = yyyy + '-' + mm + '-' + dd;
            return today;
        },
        statuses () {
            if (this.$store.state.auth.isAuthenticated == false) {
                return []
            }

            let statuses = this.$store.state.utility.statuses
            if (statuses == null) {
                statuses = []
                this.$store.dispatch('utility/getStatuses')
            }
            return statuses
        },
        nigerianStates () {
            if (this.$store.state.auth.isAuthenticated == false) {
                return []
            }

            let nigerianStates = this.$store.state.utility.nigerianStates
            if (nigerianStates == null) {
                nigerianStates = []
                this.$store.dispatch('utility/getNigerianStates')
            }
            return nigerianStates
        }
    },
    directives: {
        "modal-open": {
            bind(el, binding, vnode) {
                el.addEventListener("click", () => {
                    console.log(vnode.context.$refs)
                    vnode.context.$refs[binding.value].show = true;
                });
            }
        },
        "modal-close": {
            bind(el, binding, vnode) {
                el.addEventListener("click", () => {
                    console.log(vnode.context.$refs)
                    vnode.context.$refs[binding.value].show = false;
                });
            }
        }
    },
    filters: {
        moneyFormat(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        dateFormat(date) {
            console.log(date)
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let goodDate = new Date(date);
            return goodDate.toLocaleDateString("en-US", options);
        },
    }
}