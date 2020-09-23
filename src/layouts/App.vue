<template>
	<div id="app">
		  <Header v-show="$root.bNav"/>
			<!-- <Column/> -->
			<!-- <Follow/> -->
			<!-- <Home/> -->
			  <loading v-show="$root.bLoading"/>
				<router-view />
				 <Footer v-show="$root.bFoot"/>
					<!-- <Detail/> -->
					<!-- <Login/> -->
					<!-- <User/> -->
					<!-- <Reg/> -->
	</div>
</template>
<script>
	import Header from './header.vue'
	import Footer from './Footer.vue'
	import loading from '../components/loading/loading.vue'
	// import Home from '../pages/home.vue'
	// import Column from '../pages/column.vue'
	// import Follow from '../pages/follow.vue'

	// import Login from '../pages/login.vue'
	// import Reg from '../pages/reg.vue'
	// import Detail from '../pages/detail.vue'
	// import User from '../pages/user.vue'
	export default {
		name: 'App',
		data() {
			return {

			}
		},
		watch:{
			$route:{
				handler(newVal) {
					let path = newVal.path;
					if (/home|follow|column/.test(path)) {
						this.$root.bNav = true;
						this.$root.bFoot = true;
					}
					if (/user/.test(path)) {
						this.$root.bNav = false;
						this.$root.bFoot = true;
					}
					if (/login|reg|detail/.test(path)) {
						this.$root.bNav = false;
						this.$root.bFoot = false;
					}
				},
				immediate: true
			}


		},

		mounted() {

		},
		components: {
			Header,
			Footer,
			loading
			// Home
			// Follow
			// Column
			// Login
			// User
			// Reg

			// Detail
		},
		methods: {

		}

	}
</script>
<style>
	
</style>