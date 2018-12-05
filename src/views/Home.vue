<template>
<div>
    <Slider1/>
      <v-layout row wrap>
        <v-flex xs12 md6 lg4>
          <v-card dark class="text-sm-center pa-3 grey darken-1">
            <i class="fas fa-desktop fa-2x"></i> Plataforma
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
          <v-card height="100%"  class="text-sm-justify px-1">
            <img  width="100%" height="315" :src="imagen" alt="contactos">
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 dark class="red darken-4 pa-2">
          <h3 class="white--text text-sm-center">NUESTROS PLANES</h3>
        </v-flex>
      </v-layout>
      <v-container  grid-list-sm>
        <Planes1/>
      </v-container>
</div>
</template>

<script>
import Slider1 from "@/components/home/Slider1";
import Planes1 from "@/components/home/Planes";
export default {
  name: "home",
  components: { Slider1, Planes1 },
  data:()=>({
    video:'',
    imagen:''
  }),
  created:function(){
    this.get_data()
  },
  methods:{
    get_data:function(){
      axios.get("https://admin.aulaperu.edu.pe/api/home_items")
      .then(response => {
        this.video=response.data.data.video.embed
        this.imagen=response.data.data.imgcontacto.imagen
      })
      .catch(error => {});
    }
  }
  

};
</script>
