<template>
<v-app>
  <header>
    <TheHeader />
  </header>

    <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>

  <footer>
    <TheFooter />
  </footer>

</v-app>
</template>

<script>
import TheHeader from './layout/TheHeader'
import TheFooter from './layout/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
body {
  margin: 0 !important;
  background-color: #000000;
  font-size: 20px;
  font-family:Arial, Helvetica, sans-serif;
}
</style>
