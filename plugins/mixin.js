import Vue from 'vue'
import { mapActions } from 'vuex'

Vue.mixin({
  computed: {
    dateToday() {
      let today = new Date()
      let dd = today.getDate()
      let mm = today.getMonth() + 1 //January is 01
      let yyyy = today.getFullYear()

      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm

      return yyyy + '-' + mm + '-' + dd
    }
  },
  filters: {
    dateFormat(date) {
      if (!date) return '-'
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      const goodDate = new Date(date)
      return goodDate.toLocaleDateString("en-US", options)
    },
    moneyFormat(value) {
      value = value ? value : 0
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    timeFormat(dateTime) {
      const goodTime = new Date(dateTime)
      return goodTime.toLocaleTimeString('en-US')
    }
  },
  methods: {
    thisOrThat(item, testAttributes) {
      let result = null
      for (const attribute of testAttributes) result = item[attribute] || result
      return result
    },
    ...mapActions({
      toast: 'toast/addToast'
    })
  }
})