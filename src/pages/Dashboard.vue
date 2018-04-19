<template>
  <div class="dashboard">
    <section v-for="(item, key, index) in weather" :key="index" class="item">
      <div class="item_header">
        {{ item.name }}
      </div>
      <div class="item_content" :class="colorTemp(parseInt(item.main.temp))">
        {{ parseInt(item.main.temp) }}°
      </div>
      <div class="item_footer">
        <span v-show="key === 1"> <span>HUMIDITY</span> <b>{{ item.main.humidity }}</b>% </span>
        <span v-show="key === 1"> <span>PRESSURE</span> <b>{{ item.main.pressure }}</b>hPa</span>
        <div>
          Updated at {{ item.update_at }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.mountDataWeather()
    window.clearInterval(this.interval)
    this.interval = window.setInterval(() => this.mountDataWeather(), 600000)
  },
  computed: mapGetters({
    weather: 'weather',
    cities: 'cities'
  }),
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
    },
    colorTemp (temp) {
      // - Temperaturas igual ou abaixo de 5 graus devem ser exibidas em azul
      // - Temperaturas acima de 6 graus e igual ou abaixo de 25 devem ser exibidas em laranja
      // - Temperaturas acima de 26 graus devem ser exibidas em vermelho
      return temp <= 5 ? 'blue' : temp > 26 ? 'red' : 'orange'
    }
  },
  name: 'dashboard'
}
</script>

<style scoped>
.dashboard {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--background);
  box-shadow: 0 0 .5px 0 var(--box-shadow) inset;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.dashboard .item {
  flex: 0 0 auto;
  margin: 3vw;
  background-color: #FFF;
  width: 280px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: .5vw
}

.dashboard .item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.2), 0 10px 10px rgba(0,0,0,0.2);
}

.dashboard .item .item_content.orange{
  color: var(--orange)
}

.dashboard .item .item_content.red{
  color: var(--red)
}

.dashboard .item .item_content.blue{
  color: var(--blue)
}

.item .item_header, .item .item_content, .item .item_footer{
  width: 100%;
  text-align: center
}
.item .item_header {
  color: var(--second);
  font-size: 2vh;
  padding: 2vh 0;
  border-bottom: 2px solid var(--divider)
}
.item .item_content {
  padding: 60px 0;
  font-size: 8vh;
}

.item .item_footer {
  color: var(--second);
  font-size: 1.5vh;
  padding: 2vh 0;
  background-color: #F8F8F8;
}

.item .item_footer span {
  text-align: center;
  width: 50%;
  margin: 10px 0;
  display: block;
  position: relative;
  font-size: 1.7vh;
}

.item .item_footer span:first-child{
  float: left;
}

.item .item_footer span:nth-child(2){
  float: right;
}

.item .item_footer span span{
  position: absolute;
  left: 0;
  top: -25px;
  width: 100%;
  font-size: 1.3vh;
}

@media (max-width: 1024px) {
  .dashboard {
    flex-direction: column;
    margin-top: 8vh;
  }
  .dashboard .item:nth-child(2) {
    order: -1
  }
}
</style>

