<template>
<v-footer dark height="auto">
    <v-card width="100%" flat tile class="red darken-1 white--text text-xs-center" >
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="'x'+i"
          class="mx-3 white--text" icon :href="icon.link" target="_blank" >
        <v-icon size="24px" v-text="icon.ico"></v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-layout row wrap pb-3 pt-2 px-5>
        <v-flex xs12 text-xs-center>
          <strong><h3>CONTÁCTANOS</h3></strong>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="(f, k) in fonos" :key="'fono'+k" @click="abrir_whatsapp(f,'Hola')">
           
           <v-btn color="red" small @click="copiar(f)">
            <v-icon color="white" left>fab fa-whatsapp</v-icon> {{f}}
          </v-btn>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 v-for="(f, k) in correos" :key="'correo'+k" :href="'mailto:'+f">
          <v-btn color="red" small>
            <v-icon color="white" left>far fa-envelope</v-icon> {{f.toLowerCase()}}
          </v-btn>
           
        </v-flex>
      </v-layout>
      <!-- <v-container>
        <v-layout justify-center row fill-height wrap>
          <v-flex xs12 md12 lg2 xl2>
            <h4>Movile/Whatsapp</h4>
            <v-list class="transparent" dense>
              <v-list-tile v-for="(f, k) in fonos" :key="'fono'+k" 
              @click="abrir_whatsapp(f,'Hola')">
                <v-list-tile-action>
                  <v-icon color="white">fab fa-whatsapp</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title v-text="f"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs12 md12 lg3 xl3>
            <h4> Correos</h4>
            <v-list class="transparent" dense>
            <v-list-tile v-for="(f, k) in correos" :key="'correo'+k" :href="'mailto:'+f">
              <v-list-tile-action>
                <v-icon color="white">far fa-envelope</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title v-text="f"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-flex>
        </v-layout>         
      </v-container> -->
      <v-divider></v-divider>
      <v-card-text class="white--text">
        &copy; 2018 — <strong>Aula Peru Tic </strong>
      </v-card-text>
    </v-card>
</v-footer>
</template>
<script>
export default {
  data: () => ({
    fonos: [
      "985634754",
      "985635276"
     /* "985635193",
      "921830392",
      "988088492",
      "943621493"*/
      ],
    correos:['sitaav@aulaperu.edu.pe','sitaav@gmail.com'],
    logofooter:'https://www.dropbox.com/s/p4gpz7f7gofdm0v/aaulaperutic.png?dl=0&raw=1',
    icons: [
            {ico: 'fab fa-facebook', link: 'https://www.facebook.com/jimmy.salinas.98499' },
            {ico: 'fab fa-youtube', link: 'https://www.youtube.com/channel/UCwd_sQywt6yPP1zJcoJLmrw?view_as=subscriber' },
            {ico: 'fab fa-instagram', link: 'https://instagram.com/aulaperu?utm_source=ig_profile_share&igshid=nlqo7urt660w' }
    ]
  }
  ),
  methods: {
    copiar: function(f) {
      document.execCommand('copy');
    }
  }
};
</script>

<style scoped>
</style>
