<template>
<div>
    <Slider1/>
      <v-layout row wrap mb-4>
        <v-flex xs12 md6 lg4>
          <v-card dark class="text-sm-center pa-3 grey darken-1">
            <a href="https://sitaav.org" style="text-decoration: none;" class="white--text" target="_blank"><i class="fas fa-desktop fa-2x"></i> Plataforma</a>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 lg4>
          <v-card dark class="text-sm-center pa-3 cyan darken-2">
           <i class="fas fa-chalkboard-teacher fa-2x"></i> Aula Virtual
          </v-card>
        </v-flex>
        <v-flex xs12 md12 lg4>
          <v-card dark class="text-sm-center pa-3 grey darken-1">
           <i class="fas fa-people-carry fa-2x"></i> Comunidad Educativa
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 md12 lg6 xl6>
          <v-card>
            <iframe width="100%" height="315" :src="video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-card>
        </v-flex>
        <v-flex xs12 md12 lg6 xl6>
          <v-card v-if="imagen.imagen" height="100%"  class="text-sm-justify px-1">
            <v-img :src="imagen.imagen" height="315px">
                <div class="layout align-end fill-height px-2">
                    <h5 class="body-1 white--text text-sm-center px-2" v-text="imagen.descripcion"
                    style="background-color: rgba(3, 3, 3, 0.7); width: 100%;"></h5>
                </div>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-4">
        <v-flex xs12 dark class="red darken-4 pa-2">
          <h3 class="white--text text-sm-center"><i class="fas fa-hand-holding-usd fa-2x mr-2"></i> NUESTROS PLANES 2019</h3>
        </v-flex>
      </v-layout>
      <v-container pa-0  grid-list-sm>
        <Planes1/>
      </v-container>
</div>
</template>

<script>
import Slider1 from "@/components/home/Slider1";
import Planes1 from "@/components/home/Planes";
export default {
/*eslint no-console: "error"*/
  name: "home",
  components: { Slider1, Planes1 },
  data:()=>({
    video:'',
    imagen:[],
  }),
  created:function(){
    this.get_data()
  },
  methods:{
    get_data:function(){
      axios.get("https://admin.aulaperu.edu.pe/api/home_items")
      .then(response => {
        this.video=response.data.data.video.embed
        this.imagen=response.data.data.imgcontacto
      })
      .catch(error => {
        console.log(error);
        });
    }
  }
};
</script>
