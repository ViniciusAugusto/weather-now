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
  margin: 5vh 0;
  width: 30vw;
}
</style>
