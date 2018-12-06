<template>
<div>
    <v-navigation-drawer v-model="drawer" fixed clipped class="blue-grey lighten-4" app>
      <!-- <v-img :aspect-ratio="16/9" contain class="red darken-3"
       :src="logonav">
      </v-img> -->

      <v-list dense id="nav-izq">
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

        <v-list-tile class="mt-3" @click="modalcontactanos=!modalcontactanos">
          <v-list-tile-action>
            <v-icon>fas fa-phone</v-icon>
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
    <Contactanos :contactanos="modalcontactanos"/>
  </div>
</template>
<script>
import Contactanos from "@/components/Contactanos.vue";
  export default {
    props: { drawer: Boolean },
    components: { Contactanos },
    name:'Navigation1',
    data: () => ({
      modalcontactanos:false,
      logonav:'https://www.dropbox.com/s/128u0uqm8nbivs2/LOGO%20index.png?dl=0&raw=1',
      items: [
        { icon: 'home', text: 'Inicio',goto:'home' },
        { icon: 'fas fa-users', text: 'Nosotros',goto:'nosotros' },
        { icon: 'far fa-handshake', text: 'Convenios',goto:'convenios' },
        { icon: 'fas fa-camera-retro', text: 'Fotos',goto:'fotos' },
        { icon: 'far fa-file-archive', text: 'Recursos Educativos',goto:'recursos' },
      ],
    }),
    
  }
</script>
<style scoped>
  #nav-izq > div > a > div > i{color:#c62828;}
</style>