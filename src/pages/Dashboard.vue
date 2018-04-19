<template>
  <div class="dashboard">
    <section v-for="(item, key, index) in weather" :key="index" class="item">
      <div class="item_header">
        {{ item.name }}
      </div>
      <div class="item_content">
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
  },
  computed: mapGetters({
    weather: 'weather',
    cities: 'cities'
  }),
  methods: {
    ...mapActions([
      'getApiWeatherCities',
      'setWeatherCities'
    ]),
    mountDataWeather () {
      let promisses = this.cities.map((citie) => {
        return this.getApiWeatherCities(`${citie.name},${citie.country}`)
      })
      Promise
        .all(promisses)
        .then((values) => this.setWeatherCities(values))
    }
  },
  name: 'dashboard'
}
</script>

<style scoped>
.dashboard {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
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
}

.dashboard .item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.2), 0 10px 10px rgba(0,0,0,0.2);
}

.item .item_header, .item .item_content, .item .item_footer{
  width: 100%;
  text-align: center
}
.item .item_header {
  color: #737c84;
  font-size: 2vh;
  padding: 2vh 0;
  border-bottom: 2px solid var(--divider)
}
.item .item_content {
  padding: 60px 0;
  font-size: 8vh;
}

.item .item_footer {
  color: #737c84;
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
  font-size: 1.5vh;
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
  font-size: 1vh;
}

/*
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
  .dashboard {
    flex-direction: column;
  }
  .dashboard .item:nth-child(2) {
    order: -1
  }
}
</style>

