<script setup lang="ts">
import {onMounted, ref } from 'vue'
import {detail} from '../api'

const props = defineProps<{ id: Number}>()
const result:any= ref({})

onMounted(()=>{
	let id = + props.id
	 detail(id).then((data)=>{
		result.value = data
	})
})
</script>

<template>
  <div class="detail">
	  <h2>{{result.title}}	</h2>
		{{result.createdAt}}
		<span v-html="result.bodyHTML"></span>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.detail {
	text-align:left;
	
}
</style>
