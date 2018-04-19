<template>
  <div class="dashboard">
    <loader v-show="load" :loader="loaderImg"></loader>
    <citie v-show="!load" :weather="weather"></citie>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Citie from '@/components/Citie'
import Loader from '@/components/Loader'

export default {
  created () {
    this.mountDataWeather()
    window.clearInterval(this.interval)
    this.interval = window.setInterval(() => this.mountDataWeather(), 10000) // 600000 update data in 10minutes
  },
  computed: mapGetters({
    weather: 'weather',
    cities: 'cities'
  }),
  components: { Citie, Loader },
  data () {
    return {
      interval: null,
      loaderImg: require('../assets/img/loader.svg'),
      load: true
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
        .then(() => (this.load = false))
    }
  },
  name: 'dashboard'
}
</script>
