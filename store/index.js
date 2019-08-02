import Axios from "axios";

export const state = () => ({
    activeRoutes: {
      'what-we-do': ['/what-we-do', '/what-we-do/management-advisory']
    },
    bookingApiUrl: '',
    bookingWebUrl: '',
})

export const mutations = {
    setConfig(state, data) {
        state.bookingApiUrl = data.booking_api_url
        state.bookingWebUrl = data.booking_web_url
    }
}

export const actions = {
    getConfig({ commit }) {
        Axios.get('/env.json').then(response => {
            commit('setConfig', response.data)
        })
    }
}