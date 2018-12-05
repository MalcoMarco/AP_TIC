<template>
  <v-card>
      <h2 class="text-sm-center px-2 white--text red darken-4">Nuestros Convenios</h2>   
    <v-layout row wrap v-if="convenios.data" class="grey lighten-5">
      <v-flex xs12 sm6 md4 v-for="(convenio , k) in convenios.data" :key="'conv'+k">
        <v-card class="pa-1">
          <v-img :src="convenio.imagen" height="200px" contain>
                <div class="layout align-end fill-height px-2">
                    <h5 class="body-1 white--text text-sm-center px-2" v-text="convenio.nombre"
                    style="background-color: #03030366;"></h5>
                </div>
              </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
data:()=>({
  convenios:[]
}),
created:function(){
  this.get_convenios()
},
methods:{
  get_convenios:function(){
    axios.get('http://sitaav.test/api/convenios/aulaperu').then(response=>{
      this.convenios=response.data.Convenios
    }).catch(error=>{
      console.log(error)
    })
  }
}
}
</script>

