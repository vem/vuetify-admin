<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <Nav></Nav>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>mdi-magnify</v-icon> </v-btn>
      <v-btn icon> <v-icon>mdi-heart</v-icon> </v-btn>
      <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>222 </v-footer>
  </v-app>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  components: {
    Nav,
  },

  data: () => ({
    drawer: true,
  }),
};
</script>
