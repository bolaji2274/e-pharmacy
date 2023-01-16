<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand images" href="#" @click="goTo('home')"><img src="@/assets/logo.png" alt=""> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link navbar-brand shop-by" aria-current="page" href="#"><span>Shop By <br>Category</span></a>
        </li>


        <div class="cart" @click="goTo('cart')">
          <i class="fa fa-shopping-cart cart-icon"></i>
          <span class="list">{{count}}</span>
          <!-- <span class="basket">My Basket</span> -->
        </div>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.cartCount;
    }
  },
    methods:{
      goTo(page){
        page === "home" ? this.$router.push("/") : this.$router.push("/cart");
      }
    },
}

</script>

<style scoped>
.navbar{
  max-width: 85%;
  margin: 10px auto;
}
.cart{
  display: flex;
  vertical-align: middle;
  margin-top: 20px;
  font-size: 60px;
  color: #b101c1;
  position: relative;
  cursor: pointer;
}
.cart span.list{
  color: #f82121;
  font-size: 24px;
}

.cart span{
  font-size: 10px;
  vertical-align: text-top;
  margin-left: 12px;
  color: #08a53c;
}
.cart-icon{
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}
.cart .list{
  position: absolute;
  top: 15%;
  left: 15%;
  color: yellow;
  font-weight: bold;
  font-size: 19px;
}
.collapse ul li a{
  color: #56d1d7;
  padding-top: 20%;
}
</style>