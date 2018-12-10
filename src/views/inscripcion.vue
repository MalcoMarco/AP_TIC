<template>
	<v-flex xs12 white pa-3>
		<h2 class="text-sm-center px-2 white--text red darken-4 mb-3 align-center"><v-icon class="white--text mr-3 py-2">fas fa-book-reader</v-icon>INSCRIPCIONES</h2>
		<p class="title px-5 mb-0">
			<v-hover >
				<p slot-scope="{ hover }" :class="hover ? 'title' : 0"><i class="far fa-check-square red--text darken-4 mr-2"></i> NOMBRE DEL CURSO: <strong class="blue--text">{{item.titulo}}</strong> <br></p>
			</v-hover>
			<v-hover>
				<p slot-scope="{ hover }" :class="hover ? 'title' : 0"><i class="far fa-check-square red--text darken-4 mr-2"></i> MENCIÓN: <strong>{{item.mencion}}</strong> <br></p>
			</v-hover>
			
			<v-hover>
				<p slot-scope="{ hover }" :class="hover ? 'title' : 0"><i class="far fa-check-square red--text darken-4 mr-2"></i> Nº DE HORAS: <strong>{{item.horas}}</strong> <br></p>
			</v-hover>
			<v-hover>
				<p slot-scope="{ hover }" :class="hover ? 'title' : 0"><i class="far fa-check-square red--text darken-4 mr-2"></i> INVERSIÓN: <strong>S/. {{item.inversion}}</strong> <br></p>
			</v-hover>
		</p>
		<v-btn color="error" v-if="item.beneficios" :href="item.beneficios" target="_blank">
			<v-icon left>fas fa-file-pdf</v-icon>
			Beneficios
		</v-btn>
		<v-btn color="error" v-if="item.contenido" :href="item.contenido" target="_blank">
			<v-icon left>fas fa-file-pdf</v-icon>
			Contenido
		</v-btn>
		<v-layout row wrap justify-center mt-3 v-if="item.formulario" v-html="item.formulario">
		</v-layout>
		
	</v-flex>
</template>

<script>
	export default {
		props: ['id'],
		data: function() {
			return {
				item:{}
			}
		},
		created: function() {
			if (this.id) {
				this.getItem();
			}else{
				this.$router.push({name:'home'})
			}
		},
		methods: {
			getItem: function() {
				var url = "https://admin.aulaperu.edu.pe/api/one-item/"+this.id;
				axios.get(url).then(response => {
			        this.item=response.data.data.item
			    }).catch(error => {
			    	this.$router.push({name:'home'});
			    	console.log(error);

			    });
			}
		}
	}
</script>

<style>
	#myiframe > iframe {
		width:100%;
	}
</style>