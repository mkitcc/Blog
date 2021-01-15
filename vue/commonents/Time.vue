<template>
<span class="time">{{time}}</span>
</template>


<script>
export default {
    name:"Time",
    data(){
        return {
        time:"",
        }
    },
    props:["t"],
    mounted() {
        var d=Date.parse(this.t)
        var date=new Date(d)
        var y=date.getFullYear()
        var m=date.getMonth()+1
        var d=date.getDate()
        this.time=y+"-"+m+"-"+d
    }
}

</script>



<style scoped>
.time{
    font-size:14px;
    padding-right:10px;
    color:#bababa;
}

</style>
