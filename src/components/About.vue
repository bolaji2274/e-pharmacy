<template>
  <div>
    <div class="container">
      <p>Trendy Collections</p>
      <div class="row">
        <div
          class="col-md-3 colum-1"
          v-for="shop in shops"
          :key="shop"
          :style="{ backgroundImage: shop.image }"
        >
          <div class="text-content">
            <p>{{ shop.desc }}</p>
            <p class="price">{{ shop.price }}</p>
          </div>
        </div>
      </div>

      <div class="read-more">
        <RouterLink to="/readmore"
          ><h2><a href="#">Read More</a></h2></RouterLink
        >
      </div>
    </div>
    <div class="section-2">
      <div class="row row2">
        <div class="col-md-6 detail-1"></div>
        <div class="col-md-6 detail-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [
        {
          image: "url(../../images/p1_600x.webp)",
          desc: "Alex Study Chair",
          price: "$ 208.00",
        },
        {
          image: "url(../../images/p8_600x.webp)",
          desc: "Brommstick chair",
          price: "$ 178.00",
        },
        {
          image: "url(../../images/p10_600x.webp)",
          desc: "Amet Kairfort",
          price: "$ 756.00",
        },
        {
          image: "url(../../images/p13_600x.webp)",
          desc: "Fuastick chair",
          price: "$ 178.00",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.container {
  width: 100%;
  max-width: 90%;
  height: 500px;
  margin: 0 auto;
  margin-top: -40px;
  margin-bottom: 3%;
}
.container p {
  color: #6f5948;
  margin-top: 5%;
  font-size: 1.8rem;
  margin-bottom: 25px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  width: 100%;
  height: 80%;
}
.colum-1 {
  flex-basis: 24%;
  background-repeat: no-repeat;
  background-size: 250px;
  background-position: center top;
  border: 10px solid #6f5948;
  border-color: #e3e1e0;
  position: relative;
}
.text-content {
  text-align: center;
  position: absolute;
  left: 90px;
  bottom: -6px;
}
.text-content p {
  font-size: 12px;
  font-weight: bold;
  margin-top: 20%;
}
.text-content p.price {
  font-weight: bold;
}

.read-more h2 {
  text-align: center;
  margin-top: 10px;
}

.read-more h2 a {
  color: #6f5948;
  font-size: 14px;
  text-decoration: none;
}
.section-2 {
  width: 100%;
  max-width: 90%;
  height: 370px;
  margin: 0 auto;
  margin-bottom: 3%;
}
.row2 {
  height: 100%;
}
.detail-1 {
  flex-basis: 49.8%;
  background-image: url("../../images/img4.webp");
  background-size: cover;
  background-position: center;
}

.detail-2 {
  flex-basis: 49.7%;
  background-image: url("../../images/img5.webp");
  background-size: 100%;
  background-position: center;
}
</style>
