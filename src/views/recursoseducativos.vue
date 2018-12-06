<template>
    <v-card flat tile height="100%">
      <h2 class="text-sm-center px-2 white--text red darken-4">Recursos Educativos</h2>
        <v-container v-if="inicials.items" fluid grid-list-sm blue-grey  lighten-4 pa-0 grey lighten-3>
            <v-subheader class="font-weight-boldfont-weight-black font-italic">
                INICIAL
            </v-subheader>
            <v-layout row wrap>
                <v-flex xs12 sm4 v-for="(inicial ,i) in inicials.items" :key="i" pa-3>
                    <v-card height="100%">
                        <v-img :src="inicial.imagen" lazy-src="#"
                            aspect-ratio="2" class="grey lighten-2" contain
                        ></v-img>
                        <v-card-title primary-title>
                            <div class="subheading" v-text="inicial.titulo"></div>
                        </v-card-title>
                        <v-card-actions class="pa-3">
                            <v-btn @click="verRevista(inicial.embed)" color="primary" dark>
                            ver <v-icon right dark>fas fa-eye</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-subheader class="font-weight-boldfont-weight-black font-italic">
                PRIMARIA
            </v-subheader>
            <v-layout row wrap>
                <v-flex xs12 sm4 v-for="(primaria ,i) in primarias.items" :key="i" pa-3>
                    <v-card height="100%">
                        <v-img :src="primaria.imagen" lazy-src="#"
                            aspect-ratio="2" class="grey lighten-2" contain
                        ></v-img>
                        <v-card-title primary-title>
                            <div class="subheading" v-text="primaria.titulo"></div>
                        </v-card-title>
                        <v-card-actions class="pa-3">
                            <v-btn @click="verRevista(primaria.embed)" color="primary" dark>
                            ver <v-icon right dark>fas fa-eye</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-subheader class="font-weight-boldfont-weight-black font-italic">
                SECUNDARIA
            </v-subheader>
            <v-layout row wrap>
                <v-flex xs12 sm4 v-for="(secundaria ,i) in secundarias.items" :key="i" pa-3>
                    <v-card height="100%">
                        <v-img :src="secundaria.imagen" lazy-src="#"
                            aspect-ratio="2" class="grey lighten-2" contain
                        ></v-img>
                        <v-card-title primary-title>
                            <div class="subheading" v-text="secundaria.titulo"></div>
                        </v-card-title>
                        <v-card-actions class="pa-3">
                            <v-btn @click="verRevista(secundaria.embed)" color="primary" dark>
                            ver <v-icon right dark>fas fa-eye</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <!-- MODAL VER EMBEDS -->
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
    /*eslint no-console: "error"*/
    name:'recursosEducativos',
    data:()=>({
        modalRevista:false,
        revistas:[],
        inicials:[],
        primarias:[],
        secundarias:[],
        liveUrl:"#",
    }),
    created:function(){
        this.get_inicial()
        this.get_primaria()
        this.get_secundaria()

    },
    methods:{
        verRevista(urlembed){
            this.liveUrl=urlembed
            this.modalRevista=true
        },
        get_inicial:function(){
            var url="https://www.admin.aulaperu.edu.pe/api/contenedors/4"
            axios.get(url).then(response => {
                this.inicials = response.data.data.contenedors;
            }).catch(error => {
                console.log(error);
            });
        },
        get_primaria:function(){
            var url="https://www.admin.aulaperu.edu.pe/api/contenedors/5"
            axios.get(url).then(response => {
                this.primarias = response.data.data.contenedors;
            }).catch(error => {
                console.log(error)
            });
        },
        get_secundaria:function(){
            var url="https://www.admin.aulaperu.edu.pe/api/contenedors/6"
            axios.get(url).then(response => {
                this.secundarias = response.data.data.contenedors;
            }).catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
