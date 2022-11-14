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
	<li v-for="item in paper">
		<div @click="openDetail(item.node.number)">
			{{item.node.createdAt}}
      {{item.node.title }}
		</div>
	</li>
	</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
