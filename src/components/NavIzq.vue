<template>
<div>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text" @click="$router.push({name:item.goto})">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile class="mt-3" @click="contactanos=!contactanos">
          <v-list-tile-action>
            <v-icon>watch_later</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="">Contactanos</v-list-tile-title>
        </v-list-tile>

        <v-subheader class="mt-3">Plataforma</v-subheader>
        <v-list-tile class="mt-3" href="https://www.sitaav.org">
          <v-list-tile-action>
            <v-icon>add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="">Sitaav</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
        <!-- MODAL CONTACTO -->
    <Contactanos :contactanos.sync="contactanos"/>
  </div>
</template>
<script>
import Contactanos from "@/components/Contactanos.vue";
  export default {
    components: {
      Contactanos
    },
    name:'Navigation1',
    data: () => ({
      contactanos:false,
      items: [
        { icon: 'home', text: 'Inicio',goto:'home' },
        { icon: 'trending_up', text: 'Nosotros',goto:'about' },
        { icon: 'history', text: 'Staff',goto:'#' },
        { icon: 'featured_play_list', text: 'Convenios',goto:'#' },
        { icon: 'watch_later', text: 'Fotos',goto:'#' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    props: {
      drawer: Boolean
    }
  }
</script>