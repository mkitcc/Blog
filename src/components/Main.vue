<script setup lang="ts">
import { ref ,onMounted} from 'vue'
import {list} from '../api'
import { useRouter } from 'vue-router'

const paper:any = ref({})
const router = useRouter()

function getList(p : number) {
	let tmp = list().then((data)=> {
		paper.value = data.edges
	})
}

function openDetail(id :number) {
	router.push({
		path : '/detail/'+id,
	})
}

onMounted(()=>{
	getList(0)
})

</script>

<template>
	<div>
		<ul class='no-bullets'>
			<li v-for="item in paper">
			<div @click="openDetail(item.node.number)">
				<h3>{{item.node.title }}</h3>
				{{item.node.createdAt}}
			</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
ul.no-bullets {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
	text-align:left
}
</style>
