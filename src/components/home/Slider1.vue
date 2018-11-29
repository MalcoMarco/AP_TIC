<template>
  <v-carousel height="100%">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      contain
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.dropbox.com/s/r7h8k3x8y490njm/hoy2.png?dl=0&raw=1'
          },
          {
            src: 'https://www.dropbox.com/s/p4qq1vdrkcblgq7/hoy1.png?dl=0&raw=1'
          }
        ]
      }
    }
  }
</script>