<template>
    <v-layout align-space-around justify-center row wrap class="mt-2">
        <v-flex xs12 sm6  md3 lg3 v-for="(plan, i) in planes" :key="'m'+i">

                <v-card height="100%">
                    <v-card-title primary-title>
                        <div class="text-xs-center">
                            <h3 class="headline mb-2 blue--text text--darken-3">
                                <i :class="plan.icon" > </i>
                            </h3>
                            <p class="subheading red darken-3 white--text" v-html="plan.name"></p>
                            <p class="blue-grey lighten-4"><span class="body-2" v-text="plan.sub"></span> </p>
                        </div>
                    </v-card-title>
                    <v-list>
                        <template v-for="(item, index) in plan.items">
                            <v-list-tile :key="index+'m'">
                                <v-list-tile-content>
                                    <span class="caption" v-text="item.name"></span>
                                </v-list-tile-content>
                                <v-list-tile-action>
                                    <i class="fas fa-check" ></i>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < plan.items.length" :key="index+'mm'" ></v-divider>
                        </template>
                    </v-list>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        <div class="text-xs-center" style="display: contents;">
                            <v-btn round class="pa-2 blue darken-4" style="width: 100%;" dark v-text="plan.precio"></v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
        </v-flex> 
      </v-layout>    
</template>

<script>
export default {
  data:()=>({
    planes:[
      {name:'PLAN GRATUITO DOCENTE MÓDULOS DISPONIBLES',sub:'EBR – Educación Superior – CETPRO',
          items:[ 
              {name:'Acceso a la Plataforma'},
              {name:'Acceso a la Comunidad con 10 mil sesiones TIC'},
              {name:'Acceso al Aula Virtual.'},
              {name:'Creación de cursos.'},
              {name:'Inscripción de estudiantes en los cursos del Aula Virtual.'},
              {name:'Módulos de uso y asesoría pedagógica y TIC.'},
              {name:'Actualización de plataforma.'},
              {name:'Aplicación móvil.'},
          ],
          precio:'OFERTA: S/ 30.00 - Anual',
          icon:'fas fa-handshake fa-3x'
      },
      {name:'PLAN DOCENTE TIC – 2019 – 2021 MÓDULOS DISPONIBLES',sub:'EBR – Educación Superior - CETPRO',
          items:[ {name:'Configuración de su Institución.'},
                  {name:'Acceso a la Plataforma'},
                  {name:'Acceso a la Comunidad con 10 mil sesiones TIC.'},
                  {name:'Acceso al Aula Virtual.'},
                  {name:'Creación de cursos.'},
                  {name:'Inscripción de estudiantes en el curso de su Aula Virtual.'},
                  {name:'Módulos de uso y asesoría pedagógica y TIC.'},
                  {name:'Actualización de plataforma.'},
                  {name:'Aplicación móvil.'},
              ],
          precio:'OFERTA: S/ 50.00 - Anual',
          icon:'fas fa-chalkboard-teacher fa-3x'
      },
      {name:'PLAN DOCENTE ESPECIALISTA – TIC MÓDULOS DISPONIBLES',sub:'EBR – Educación Superior - CETPRO',
          items:[ {name:'Configuración de su I.E'},
                  {name:'Acceso a la Plataforma'},
                  {name:'Acceso a la Comunidad con 10 mil sesiones TIC'},
                  {name:'Acceso a Programaciones y unidades.'},
                  {name:'Acceso a las Sesiones PRO'},
                  {name:'Acceso al Aula Virtual'},
                  {name:'Creación de cursos.'},
                  {name:'Inscripción de docentes y estudiantes en su Aula Virtual'},
                  {name:'Módulos de uso y asesoría pedagógica y TIC.'},
                  {name:'Acceso a los cursos y al Software Educativo.'},
                  {name:'Certificación UNT -360 Horas'},
                  {name:'Actualización de plataforma.'},
                  {name:'Aplicación móvil.'},
              ],
          precio:'OFERTA: S/ 70.00 - Anual',
          icon:'fas fa-network-wired fa-3x'
      },
      {name:'PLAN INSTITUCIÓN TIC MÓDULOS DISPONIBLES <br>&nbsp;',sub:'I.E.  – Instituto Superior – CETPRO',
          items:[ {name:'Configuración de su campus y su Institución'},
                  {name:'Acceso a la Plataforma'},
                  {name:'Acceso a la Comunidad con 10 mil sesiones TIC'},
                  {name:'Acceso a las Sesiones PRO'},
                  {name:'Acceso a Programaciones y unidades.'},
                  {name:'Acceso al Aula Virtual'},
                  {name:'Creación de cursos'},
                  {name:'Inscripción de docentes y estudiantes en su Aula Virtual'},
                  {name:'Módulos de uso y asesoría pedagógica y TIC.'},
                  {name:'Acceso a los cursos y al Software Educativo.'},
                  {name:'Certificación UNT -360 Horas'},
                  {name:'Acceso a libros digitales.'},
                  {name:'Actualización de plataforma.'},
                  {name:'Aplicación móvil.'},
              ],
          precio:'OFERTA: S/ 100.00 - Anual',
          icon:'fas fa-hotel fa-3x'
      }
  ],
  })
}
</script>

<style>

</style>
