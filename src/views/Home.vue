<template>
<div>
    <Slider1/>
      <v-layout row>
        <v-flex md6>
          <v-card dark class="text-sm-center pa-3 cyan darken-1">
            <i class="fas fa-desktop fa-2x"></i> Aula Virtual
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card dark class="text-sm-center pa-3 teal darken-1">
           <i class="fas fa-desktop fa-2x"></i> Video Conferencia
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 md12 lg6 xl6>
          <v-card>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/hoB0WgCop18" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-card>
        </v-flex>
        <v-flex xs12 md12 lg6 xl6>
          <v-card dark height="100%" class="text-sm-justify pa-3 blue darken-1">
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto enim, perferendis, rerum impedit neque accusantium rem blanditiis facilis esse optio officia reiciendis provident? Quaerat quia itaque molestiae autem perferendis expedita. </p>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-2">
        <v-flex xs12 dark class="red darken-4 pa-2">
          <h3 class="white--text text-sm-center">NUESTROS PLANES</h3>
        </v-flex>
      </v-layout>
      <Planes1/>
</div>


</template>

<script>
import Slider1 from "@/components/home/Slider1";
import Planes1 from "@/components/home/Planes";
export default {
  name:'home',
  components: {
    Slider1,Planes1
  },

}
</script>
