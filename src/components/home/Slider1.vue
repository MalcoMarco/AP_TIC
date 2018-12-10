<template>
  <v-carousel height="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.imagen"
      contain
    >
      <v-layout row wrap align-end fill-height justify-center pb-5 v-if="item.formulario">
        <v-flex xs12 text-xs-center >
          <v-btn color="purple darken-4" large @click="inscribir(item)">INSCRÍBETE AQUÍ!</v-btn>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    created:function(){
      this.get_carrusel()
    },
    data: function() {
      return {
        items:[]
      }
    },

    methods:{
      inscribir: function(item){
        this.$router.push({name:'inscripcion',params: {id:item.id}});
      },
      get_carrusel:function(){
        // "https://admin.aulaperu.edu.pe/api/contenedors/1"
        //"http://localhost:8000/api/contenedors/1"
        axios.get("https://admin.aulaperu.edu.pe/api/contenedors/1")
        .then(response => {
          this.items = response.data.data.contenedors.items;
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>