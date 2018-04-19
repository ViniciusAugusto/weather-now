<template>
  <section class="loader">
    <img :src="loader" alt="Carregando informações...">
  </section>
</template>


<script>
export default {
  props: ['loader']
}
</script>


<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--background);
  box-shadow: 0 0 .5px 0 var(--box-shadow) inset;
  text-align: center;
}
.loader img {
  position: absolute;
  width: 100px;
  height: 50px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -25px;
}
</style>
