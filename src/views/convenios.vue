<template>
  <v-card >
    <h2 class="text-sm-center px-2 white--text red darken-4"><i class="fas fa-file-invoice"></i> Nuestros Convenios</h2>
    <v-layout row wrap v-if="convenios.data" class="grey lighten-5" pb-5 pt-4 px-3>
      <v-flex xs12 mb-3>
        <span style="text-align: justify;">AULA PERÚ TIC es una Organización Educativa de capacitación e implementación de las TIC, que celebra convenios con entidades regionales, nacionales e internacionales, en el campo educativo, a través de los cuales se procura el desarrollo de su Misión y el logro de su Visión . Los convenios se celebran bajo premisas de necesidad, desarrollo, pertinencia, reciprocidad, legalidad, posición equilibrada, cooperación y gestión.</span>
      </v-flex>
      <v-flex xs12 sm6 md4 v-for="(convenio , k) in convenios.data" :key="'conv'+k">

        <v-card class="pa-1">
          <v-img :src="convenio.imagen" height="200px" contain>
            <div class="layout align-end fill-height px-2">
              <h5
                class="body-1 white--text text-sm-center px-2"
                v-text="convenio.nombre"
                style="background-color: #03030366;"
              ></h5>
            </div>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  /*eslint no-console: "error"*/
  data: () => ({
    convenios: []
  }),
  created: function() {
    this.get_convenios();
  },
  methods: {
    get_convenios: function() {
      axios
        .get("https://sitaav.org/api/convenios/aulaperu")
        .then(response => {
          this.convenios = response.data.Convenios;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
