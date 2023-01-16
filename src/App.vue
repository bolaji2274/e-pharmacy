<template>
  <div id="app">
    <div>

    </div>
    <router-view/>
<div class="footers">
  <dup/>
</div>
  </div>
</template>
<script>
import Dup from '@/components/common/Dup.vue'
export default {
  components: {
    Dup
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.footers{
  height: 100px;
}
html{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  /* background-image: url('@/assets/image/bag-image.jpg'); */
  background: lightblue;
}
</style>
