<template>
  <div id="app">
    <logo></logo>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: { Logo },
  name: 'app'
}
</script>

<style>
:root {
  --card-footer: rgba(241, 241, 241, .5);
  --background: #F1F1F1;
  --divider: #EBEBEB;
  --box-shadow: #333333;
  --primary: #B4B4B4;
  --second: #737C84;
  --blue: #69A3FF;
  --orange: #FF9632;
  --red: #ED1946;
}
html, body, #app, main{
  /* Height and width fallback for older browsers. */
  height: 100%;
  width: 100%;
  /* Set the height to match that of the viewport. */
  height: 100vh;
  /* Set the width to match that of the viewport. */
  width: 100vw;
  /* Remove any browser-default margins. */
  margin: 0;
}

#app {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}
</style>
