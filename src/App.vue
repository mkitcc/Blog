<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
	<div class="main">
		<div class="header">
				<ul>
				<li><router-link to="/">Home</router-link> </li>	
				<li><router-link to="/archive">Archive</router-link> </li>	
				<li><router-link to="/about">About</router-link> </li>	
				</ul>
		</div>	
		<router-view></router-view>
	</div>
</template>

<style scoped>
div.main {
	display: flex;
	flex-direction: column;
	align-items: center;
}
div.header {
	height: 100px;
}

li{
	float: left;
	list-style-type: none;
	padding-left: 1.5em;
	font-size: 24px;
}
</style>
