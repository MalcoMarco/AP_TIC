<template>
  <v-app id="inspire"  >
    <NavIzq :drawer.sync="drawer"/>
    <v-toolbar color="red" dark dense fixed clipped-left app >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Aula Peru TIC</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field @click:append-icon-cb="() => {}" placeholder="Search..." single-line
          append-icon="search" color="white" hide-details></v-text-field>
      </v-layout>
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
    }),
    props: {
      source: String
    }
  }
</script>