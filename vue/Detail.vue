<template>
<div class="container" >
    <h3>{{data.title}}</h3>
    <div v-html="detail"></div>
</div>
</template>

<script>
import api from "~/js/api.js";

export default {
  name: "Detail",
  components: {
  },
  props:['data'],
  data() {
    return {
      detail:null,
      currentTab:"Main",
    };
  },
  mounted() {
    api.blogdetail(this.data.number).then(response=>{
        this.detail=response[0].body_html
        })
  }
};
</script>

<style scoped>
.container {
    width:900px;
    margin: 50px auto;
}

</style>
