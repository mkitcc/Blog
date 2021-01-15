<template>
<div>
    <Header></Header>
    <keep-alive>
        <component v-bind:is="currentTab" 
            v-on:blog-detail="blogDetail($event)" 
            :data="data" >
        </component>
    </keep-alive>
</div>
</template>

<script>
import Header from "./Header";
import Main from "./Main";
import Detail from "./Detail";
export default {
  name: "Index",
  components: {
    Header,
    Main,
    Detail,
  },
  data() {
    return {
      items:null,
      currentTab:"Main",
      data:null,
    };
  },
  mounted(){

  },
  methods:{
    blogDetail(event){
        this.data=event
        this.currentTab="Detail"
    },
  }
};
</script>

<style scoped>

</style>
