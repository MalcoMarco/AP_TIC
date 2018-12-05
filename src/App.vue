<template>
  <v-app id="inspire">
    <NavIzq :drawer.sync="drawer"/>
    <v-toolbar color="red darken-3" dark dense fixed clipped-left app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <a href="/" class="d-flex router-link-active">
        <img src="https://www.dropbox.com/s/3rjtygkx4elu14d/android-icon-48x48.png?dl=0&raw=1" width="36px" height="36px">
      </a>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Aula Peru TIC</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="https://www.sitaav.org"><i class="fas fa-desktop pr-1"></i> Sitaav</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content class="blue-grey lighten-4">
      <v-container>
        <v-layout row>
          <v-flex sm12>
          <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <footer1/>
  </v-app>
</template>
<script>
// @ is an alias to /src
import NavIzq from "@/components/NavIzq.vue";
import footer1 from "@/components/footer.vue";
  export default {
    name: "APP",
    components: {
      NavIzq,footer1
    },
    data: () => ({
      drawer: true,
      contactanos: false,
    }),
    props: {
      source: String
    }
  }
</script>