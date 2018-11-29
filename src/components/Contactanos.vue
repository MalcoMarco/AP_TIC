<template>
  <v-dialog v-model="contactanos" width="600">
    <v-card class="pa-2">
      <v-card-title primary-title class="layout justify-center">
        <div class="title text-xs-center">¿Tienes dudas o quieres comunicarte con nosotros?</div>
      </v-card-title>
      <v-card-text class="text-xs-center pt-0">Elige el medio que más te convenga:</v-card-text>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 md3 sm3 mx-1>
          <v-card>
            <v-card-text class="text-xs-center">
              <v-btn fab dark color="red darken-3" :href="gmail">
                <v-icon dark v-text="'far fa-envelope'"></v-icon>
              </v-btn>
              <br>Gmail
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md3 sm3 mx-1>
          <v-card>
            <v-card-text class="text-xs-center">
              <v-btn fab dark color="light-blue darken-1" :href="messenger" target="_blank">
                <v-icon dark v-text="'fab fa-facebook-messenger fa-2x'"></v-icon>
              </v-btn>
              <br>FbMessenger
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 md3 sm3 mx-1>
          <v-card>
            <v-card-text class="text-xs-center">
              <v-btn fab dark color="green accent-4" @click="abrir_whatsapp('Quiero Mas Informacion')">
                <v-icon dark v-text="'fab fa-whatsapp fa-2x'"></v-icon>
              </v-btn>
              <br>WhatsApp
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:['contactanos'],
    data:()=>({
        messenger:'https://www.messenger.com/t/jimmy.salinas.98499',
        gmail:'mailto:juansalinaslindo@gmail.com'
    }),
    methods:{
        abrir_whatsapp:function(mensaje){
            var link;
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                link="https://api.whatsapp.com/send?phone=51943621493&text="+mensaje
            }else{
                link="https://web.whatsapp.com/send?phone=51943621493&text="+mensaje
            }
            window.open(link);            
        },
    }
};
</script>

<style>
</style>
