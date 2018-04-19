<template>
  <div class="dashboard">
    <citie :weather="weather"></citie>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Citie from '@/components/Citie'

export default {
  created () {
    this.mountDataWeather()
    window.clearInterval(this.interval)
    this.interval = window.setInterval(() => this.mountDataWeather(), 600000) // update data in 10minutes
  },
  computed: mapGetters({
    weather: 'weather',
    cities: 'cities'
  }),
  components: { Citie },
  data () {
    return {
      interval: null
    }
  },
  methods: {
    ...mapActions([
      'getApiWeatherCities',
      'setWeatherCities'
    ]),
    mountDataWeather () {
      let promisses = this.cities.map((citie) => {
        return this.getApiWeatherCities(`${citie.name}, ${citie.country}`)
      })
      Promise
        .all(promisses)
        .then((values) => this.setWeatherCities(values))
    }
  },
  name: 'dashboard'
}
</script>
