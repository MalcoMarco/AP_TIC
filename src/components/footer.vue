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

      <v-card-text class="white--text">
        &copy; 2018 — <strong>Aula Peru Tic </strong>
      </v-card-text>
    </v-card>
</v-footer>
</template>
<script>
export default {
data:()=>({
    icons: [
            {ico:'fab fa-facebook', link:'https://www.facebook.com/jimmy.salinas.98499'},
            {ico:'fab fa-youtube', link:'https://www.youtube.com/channel/UCwd_sQywt6yPP1zJcoJLmrw?view_as=subscriber'},
            {ico:'fab fa-instagram', link:'https://instagram.com/aulaperu?utm_source=ig_profile_share&igshid=nlqo7urt660w'}
        ],
})
}
</script>

<style>

</style>

