<template>
<div class="container" @:value="alert(1234)">
    <div class="item" v-for="item in items" :key="item.number">
        <a v-bind:href="item.html_url" 
            @click.prevent="$emit('blog-detail',item)" 
            class="title">
        <span>{{ item.title }}</span>
        </a>
        <div class="details" v-html="item.body_html"></div>
        <Time class="time" :t="item.created_at" ></Time>
        <Labels :data="item.labels"></Labels>
        <div class="line"></div>
    </div>
</div>
</template>

<script>
import api from "~/js/api.js";
import Header from "./Header";
import Labels from "./commonents/Labels";
import Time from "./commonents/Time";
export default {
  name: "Main",
  components: {
    Header,
    Labels,
    Time,
  },
  data() {
    return {
      items:null,
      test:null,
    };
  },
  mounted() {
      //api.bloglist(1).then(response=>(this.items = response))
      this.items=api.json
      //api.bloglist(1).then(response=>(this.test=response))
  },
  methods:{
  }
};
</script>

<style scoped>

.container {
  width: 900px;
  margin: 50px auto;
}
.item{
    margin:20px 0px;
}
.details{
  margin:10px 0px;
}
a{
    color:#1abc9c;
    text-decoration:none;
}
.title{
    font-size:1.2em;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #efefef;
}
</style>
