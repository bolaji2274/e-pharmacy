<template>
  <div>


  <div class="wrapper">
    <!-- <Headers/> -->
    <Navbar/>
    <div class="content">
      <Heropage/>
      <div class="container mb-5">
        <h4 class="my-4 fw-600 d-blue">Top Rated</h4>
        <div class="row">
          <div @click="drugDetail(items)" v-for="items in topRated" :key="items.id" class="col-md-3 pointer">
          <img :src="items.url" width="300px" height="250px" style="border-radius: 15px" alt="">
          <div class="text black">
            <h5 class="fw-600">{{items.name}}</h5>
            <h5 class="fw-600">Price: ${{ items.price }}</h5>
          </div>
        </div>
        </div>
      </div>
    </div>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/common/Navbar.vue'
import Heropage from '@/components/common/Heropage.vue'
import Dup from '@/components/common/Dup.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Heropage,
    Dup
  },
  computed: {
    topRated(){
      return this.$store.state.shops;
    },
    // allCategories(){
    //   return this.$store.state.allCategories;
    // },
    // highQuality(){
    //   return this.$store.state.highQuality;
    // }

  },
  methods: {
    drugDetail(item){
      this.$router.push({name: "drug-detail", params: item})
    }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  flex: 1;
  overflow-y: auto;
  /* max-width: 80%;
  margin: 0 auto; */
}
.fw-600{
  font-weight: 600;
}
.d-blue{
  color: dodgerblue;
}
.black{
  color: #1d66ee;
  background: #fff;
  text-align: center;
  padding: 2%;
}
.pointer{
  cursor: pointer;
  margin: 1% 0;
}
.text{
  display: flex;
  justify-content: space-between;
}
</style>