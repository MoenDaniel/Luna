<template>
  <nav>
    <v-app-bar app elevate-on-scroll class="white">
      <v-toolbar-title>
        <router-link to="/">
          <img id="logo" :src="require('@/assets/images/logo.png')" />
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="white"
          tiled
          outlined
          v-on="on"
        >
          <v-icon color="black" size="40px">mdi-menu</v-icon>
        </v-btn>
      </template>
      
      <v-list>
        <v-list-item>
          <v-list-item-content>
          <v-btn class="ma-2" depressed color="white" to="/">Home</v-btn>
          <v-btn class="ma-2" depressed color="white" to="/menu">Menu</v-btn>
          <v-btn class="ma-2" depressed color="white" to="/about">About</v-btn>
          </v-list-item-content>
      </v-list-item>
      </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
    name: 'TheHeader',
}
</script>

<style>
#logo{
  height: 60px;
}

</style>