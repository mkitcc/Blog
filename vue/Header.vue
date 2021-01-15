<template >
  <header>
    <div class="header">
      <div class="logo">
        <a href="#">
          <img src="~/image/logo.png" alt="首页" />
        </a>
      </div>
      <nav>
        <ul class="menu-list">
          <li class="menu-item">
            <a href="#">首页</a>
          </li>
          <li class="menu-item">
            <a href="#">归档</a>
          </li>
          <li class="menu-item">
            <a href="#">标签</a>
          </li>
          <li class="menu-item">
            <a href="#">关于</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      aa: "asdf",
    }
  },
};
</script>

<style scoped>
.header {
  width: 950px;
  height: 60px;
  margin: 0 auto;
}

.logo{
    float: left;
    line-height:60px;
    height:60px;
}

.logo a {
}
img {
    width:150px;
    vertical-align:middle;
}

.menu-list {
  color: #333;
  list-style: none;
  float: right;
  margin-right: 30px;
}

.menu-item {
   display: inline-block;
   padding: 10px 10px;
   height: 80px;
}

li a {
  color:#515151;
  text-decoration: none;
  padding: 12px 10px;
  display: block;
  position: relative;
}
.menu-list .menu-item a::before{
  content: "";
  position:absolute;
  left:0px;
  bottom:-10px;
  height: 2px;
  width: 100%;
  background: #e04f5f;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #ddd;
}
</style>
