<template>
  <v-carousel height="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.imagen"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    created:function(){
      this.get_carrusel()
    },
    data () {
      return {
        items: [
          /*{
            imagen: 'https://www.dropbox.com/s/r7h8k3x8y490njm/hoy2.png?dl=0&raw=1'
          },
          {
            imagen: 'https://www.dropbox.com/s/p4qq1vdrkcblgq7/hoy1.png?dl=0&raw=1'
          },
          {
            imagen: 'https://www.dropbox.com/s/ie8pow366mgfecl/AFI1.png?dl=0&raw=1'
          },
          {
            imagen: 'https://www.dropbox.com/s/bnpapcsluy9i0h7/AFI2.png?dl=0&raw=1'
          },
          {
            imagen: 'https://www.dropbox.com/s/8r2n85oiob7xtez/AFI3.png?dl=0&raw=1'
          }*/
        ]
      }
    },

    methods:{
      get_carrusel:function(){
        // "https://admin.aulaperu.edu.pe/api/contenedors/1"
        //"http://localhost:8000/api/contenedors/1"
        axios.get("https://admin.aulaperu.edu.pe/api/contenedors/1")
        .then(response => {
          this.items = response.data.data.contenedors.items;
        })
        .catch(error => {});
      }
    }
  }
</script>