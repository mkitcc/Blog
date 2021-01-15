<template>
<ul>
    <li v-for="item in data">
    <span :style="{color:'#'+item.color }">{{item.name}}</span>
    </li>
</ul>
</span>

</template>

<script>
export default {
    name:"Labels",
    data() {
        return {
            labels:"",
            color:"#ccb5f2"
        }
    },
    props:["data"],
    mounted(){

    }
}

</script>

<style scoped>
ul {
   list-style:none; 
   display:inline-block;
}
</style>
