<template>
    <v-navigation-drawer v-model="drawer" fixed clipped app dark>
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
        <v-subheader class="mt-3 grey--text text--darken-1">Plataforma</v-subheader>
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Sitaav</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
      //name:'Navigation1',
    data: () => ({
      items: [
        { icon: 'trending_up', text: 'Inicio',goto:'home' },
        { icon: 'subscriptions', text: 'Nosotros',goto:'about' },
        { icon: 'history', text: 'Staff',goto:'#' },
        { icon: 'featured_play_list', text: 'Convenios',goto:'#' },
        { icon: 'watch_later', text: 'Fotos',goto:'#' },
        { icon: 'watch_later', text: 'Contactanos',goto:'#' }
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