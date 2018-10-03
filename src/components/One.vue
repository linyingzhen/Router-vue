<template>
	<div class="one">
		<h1>{{msg}}</h1>
		<h2 @click="show()">show</h2>
		<h2>{{ $route.params.id }}</h2>
		<router-view />
	</div>
</template>


<script>
	export default {
		name: 'One',
		data() {
			return {
				msg: "One"
			}
		},
		methods: {
		  show: function () {
		    console.log(this.$route.params.id)
		  }
		}
	}
	
</script>

<style scoped>
	
</style>