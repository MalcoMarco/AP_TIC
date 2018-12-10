<template>
<v-card>
    <h2 class="text-sm-center px-2 white--text red darken-4"><i class="fas fa-users"></i> SITAAV</h2>
    <span class="subheading">
        <!-- Es un entorno que gestiona la interacción, el aprendizaje y la colaboración a través de -->
    </span>
  <v-container fluid grid-list-sm pa-0 grey lighten-3>
    <section class="py-1">
      <v-layout wrap class="my-0" align-center>
        <v-flex xs12>
          <h3 class="px-3">Nuestro Equipo</h3>

          <v-layout row wrap justify-center>
           
              <v-flex xs12 md12 lg4 xl4 px-3 >
                <v-hover>
                  <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                    <v-img max-height="200px" src="https://www.dropbox.com/s/yuqtb2axhxt6ouq/Foto%2001%20-%20Equipo%2001%20-%20F.jpg?dl=0&raw=1"
                    contain color="grey"></v-img>
                  </v-card>
                </v-hover>
              </v-flex>
            
            
              <v-flex xs12 md12 lg4 xl4 px-3 >
                <v-hover>
                  <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                    <v-img max-height="200px" src="https://www.dropbox.com/s/cqokgcqxgrncq6a/Foto%2002%20-%20Equipo%2002%20-%20F.jpg?dl=0&raw=1" 
                  contain color="grey"></v-img> 
                  </v-card>
                </v-hover>
              </v-flex>
            
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4 v-for="(item, k) in sitaav" :key="'s'+k">
                <v-hover>
                  <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" >
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="cyan--text" v-text="item.icono"></v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center text-uppercase" v-text="item.title">Plataforma</div>
                    </v-card-title>
                    <v-card-text class="cyan darken-2 white--text" style="min-height:115px; text-align: justify;" v-text="item.text">
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section class="mt-2">
      <v-layout align-center justify-center row fill-height>
        <v-flex sm5>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="pt-2">
              <v-img :src="imgLogo" class="my-2" max-height="125" contain></v-img>
              <v-card-title primary-title class="blue">
                <div>
                  <h3 class="headline mb-0 text-md-center white--text">Aula Perú TIC</h3>
                  <div class="white--text" v-text="historia" style="text-align: justify;"></div>
                </div>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </section>
    <section class="mt-2">
      <v-card >
        <v-layout row wrap justify-center px-4>
          <v-flex xs12 md5 sm6 my-2 px-2>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center text-uppercase"><i class="fas fa-graduation-cap"></i> MISIÓN</div>
                </v-card-title>
                <v-card-text class="text-xs-justify blue white--text" v-text="mision"></v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs12 md5 sm6 my-2 px-2 fill-height>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center text-uppercase"><i class="fas fa-address-card"></i> VISIÓN</div>
                </v-card-title>
                <v-card-text class="text-xs-justify blue white--text" v-text="vision"></v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
          <v-flex xs12 md6 sm6 my-2>
            <v-hover>
              <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center text-uppercase"><i class="far fa-object-ungroup"></i> Objetivos</div>
                </v-card-title>
                <v-card-text class="blue">
                  <ul>
                    <li v-for="(objetivo, key) in objetivos" :key="key" class="white--text">{{objetivo}}</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </v-card>
    </section>
  </v-container>
  </v-card>
</template>
<script>
export default {
/* eslint-disable */
  data: () => ({
    imgLogo: "https://www.dropbox.com/s/aol7ywcv6svbcjo/nuevologo1.png?dl=0&raw=1",
    sitaav:[
        { icono:'fas fa-chalkboard-teacher', title:'Plataforma', text:'Contamos con una multiplataforma educativa web y móvil orientada al desarrollo de cursos y servicios  de capacitación a docentes y estudiantes, a nivel nacional.'},
        {icono:'fas fa-chalkboard', title:'Aula Virtual',text:'Nuestra Aula Virtual, es un espacio educativo, que crea cursos de manera simple con una interfaz intuitiva y herramientas pedagógicas adecuadas a la EBR y SUPERIOR.'},
        {icono:'fas fa-users', title:'Comunidad',text:'Nuestra comunidad educativa es un espacio virtual, que  permite compartir documentación pedagógica , sesiones TIC y recursos educativos de manera colaborativa.'},
        ],
    historia:
      "Fue fundado el 10 de noviembre del 2005, con la intención de brindar capacitación y actualización en TIC, hoy es ya un Entorno Virtual Educativo abierto y flexible, que se adapta a los diferentes contextos en el que los estudiantes pueden potencializar sus aprendizajes.",
    mision:
      "AULA PERU es una organización que desarrolla una capacitación permanente de docentes a nivel Nacional en, brindando una atención con Calidad y Equidad, promoviendo la investigación y el desarrollo del software educativo, capaces de contribuir al bienestar de la sociedad, e inclusión  en TICs de nuestros docentes  llevando adelante proyectos sociales en zonas desatendidas del país.",
    vision:
      "AULA PERU hacia el 2021 será una Organización sólida y líder en desarrollo de Proyectos en TICs convirtiéndose en la Institución líder y reconocida por la comunidad nacional, por su esfuerzo centrado en la Inclusión, con calidad y equidad, por su responsabilidad y compromiso social, por su excelencia académica, investigación científica, capacitación de profesionales competitivos.",
    objetivos: [
      "Brindar las herramientas TIC, para la gestión de sesiones de aprendizaje en todos los niveles.",
      "Implementar Sesiones de Aprendizaje TIC, y compartirlas en la Comunidad.",
      "Brindar facilidades a los docentes, a que puedan estructurar sus cursos para un público objetivo."
    ]
  })
};
</script>
