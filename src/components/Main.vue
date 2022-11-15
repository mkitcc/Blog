<script setup lang="ts">
import { ref ,onMounted} from 'vue'
import {list} from '../api'
import { useRouter } from 'vue-router'

const paper:any = ref({})
const paperInfo:any = ref({})
const router = useRouter()

function getList(p : number) {
	list().then((data)=>{
		paper.value = data.edges
		paperInfo.value = data.pageInfo
	})
}


onMounted(()=>{
	getList(0)
})

</script>

<template>
	<div id="main">
		<ul class='no-bullets'>
			<li v-for="item in paper" :key="item.node.number">
			<div class="item" @click="router.push('/detail/'+item.node.number)">
				<h3>{{item.node.title }}</h3>
				{{item.node.createdAt}}
			</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
.item{
}
#main{
  max-width: 1280px;
  padding: 2rem;
  text-align: center;
}
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
