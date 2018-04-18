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
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
