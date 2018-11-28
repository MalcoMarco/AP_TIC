<template>
  <v-carousel height="300px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.dropbox.com/s/phytsns8f38o5ni/47322257_567805953655109_3472284903364624384_n.jpg?dl=0&raw=1'
          },
          {
            src: 'https://www.dropbox.com/s/pduauiep4a145q4/47196454_310904679508655_2005087357375610880_n.jpg?dl=0&raw=1'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>