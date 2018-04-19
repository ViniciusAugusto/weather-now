<template>
  <header class="logo">
    <picture>
      <img :srcset="image" alt="Weather - Desafio Frontend Conta Azuk">
    </picture>
  </header>
</template>

<script>
export default {
  data () {
    return {
      image: require('../assets/img/logo.svg')
    }
  },
  name: 'logo'
}
</script>

<style scoped>
header {
  width: 100vw;
  text-align: center
}

header picture img {
  margin: 1vh 0;
  width: 20vw;
}

@media screen and (max-width: 958px) {
  header picture img {
    width: 50vw;
  }
 }
</style>
