<template>
    <v-card height="100%">
      <h2 class="text-sm-center px-2 white--text red darken-4"> Consulta recursos Educativos y Materiales Digitales con los que cuenta nuestra plataforma. </h2>
        <v-container fluid grid-list-sm blue-grey lighten-4 pa-0 class="grey lighten-5"
        style="height:100%">
            <v-layout row wrap>
                <v-flex xs12 sm4 v-for="(revista ,i) in revistas.data" :key="i" pa-3>
                    <v-card height="100%">
                        <v-img :src="revista.imagen" lazy-src="#"
                            aspect-ratio="2" class="grey lighten-2" contain
                        ></v-img>
                        <v-card-title primary-title>
                            <div class="subheading" v-text="revista.nombre"></div>
                        </v-card-title>
                        <v-card-actions class="pa-3">
                            <v-btn @click="verRevista(revista)" color="primary" dark>
                            ver <v-icon right dark>fas fa-eye</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-dialog v-model="modalRevista" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card style="height:100%">
                <v-toolbar dark color="purple darken-4">
                    <v-btn icon dark @click.native="modalRevista = false">
                    <v-icon dark>close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click.native="modalRevista = false">Cerrar</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                
            <v-flex sm12 style="height:100%">
                <iframe v-if="liveUrl!='#'" frameborder="0"
                   :src="liveUrl"  width="100%" height="100%" allowfullscreen></iframe>
            </v-flex>

            </v-card>
        </v-dialog>
    </v-card>
</template>
<script>
export default {
    data:()=>({
        modalRevista:false,
        revistas:[],
        liveUrl:"#",
    }),
    created:function(){
        this.get_recursos()
    },
    methods:{
        verRevista(revista){
            this.liveUrl=revista.embed
            this.modalRevista=true
        },
        get_recursos:function(page){
            var url="https://www.sitaav.org/recursos?page="+page;
            axios.get(url).then(response => {
                this.revistas = response.data.recursos;
            }).catch(error => {
                console.log(this.errors);
            });
        },
    }
}
</script>

