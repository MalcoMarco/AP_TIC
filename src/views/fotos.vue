<template>
<v-card flat tile v-if="albums.data">
    <v-container
      v-for="album in albums.data" :key="album.id" fluid grid-list-md grey lighten-4 >
      <v-subheader>{{ album.nombre }}</v-subheader>

      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex v-for="foto in album.fotos" :key="'f'+foto.id"
            v-if="foto.tipo=='foto'"
          xs12 sm6 md4>
          <v-card>
            <v-img :src="foto.link" height="300px">
                <div class="layout align-end fill-height px-2">
                    <h5 class="body-1 white--text text-sm-center px-2"
                v-text="foto.descripcion"
                style="background-color: #03030366;"></h5>
                </div>
              
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn @click="share_fb(foto.link)" color="indigo" class="white--text" fab icon small >
                <v-icon>fab fa-facebook</v-icon>
              </v-btn>
              <v-btn @click="share_tw(foto.link)" color="blue darken-1" class="white--text" fab icon small >
                <v-icon>fab fa-twitter-square</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    albums: [],
  }),
  created: function() {
    this.get_album();
  },
  methods: {
    get_album: function() {
      axios
        .get("https://sitaav.org/api/fotosyvideos/aulaperu")
        .then(response => {
          this.albums = response.data.albums;
        })
        .catch(error => {});
    },
    share_fb:function(url){
        window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(url)+
        '&t=AulaPeruTic', 'ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
    },
    share_tw:function(url){
        window.open('http://twitter.com/home?status='+encodeURIComponent(url),
        'Compartir en twiter', 'toolbar=0, status=0, width=650, height=450');
    }
  }
};
</script>

<style>
</style>
