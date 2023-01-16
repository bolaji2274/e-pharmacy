<template>
  <div>
    <div class="container">
      <p>Trendy collection</p>
      <div class="row">
        <div class="bg-light">
          <div class="row g-2">
            <div class="col-md-3 col-sm-12" v-for="shop in shops" :key="shop">
              <RouterLink to="/description">
              <div
                class="p-3 bg-light colum-1"
                :style="{ backgroundImage: shop.image }"
              >
                <div class="text-content">
                  <p>{{ shop.desc }}</p>
                  <p class="price">{{ shop.price }}</p>
                </div>
              </div>
              </RouterLink>

            </div>
          </div>
        </div>
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
        {
          image: "url(../../images/p6_600x.webp)",
          desc: "Mavi Vinyl Study Chair",
          price: "$ 364.00",
        },
        {
          image: "url(../../images/p12_600x.webp)",
          desc: "Muren Durable Table",
          price: "$ 756.00",
        },
        {
          image: "url(../../images/p2_600x.webp)",
          desc: "Regentseating Chair",
          price: "$ 178.00",
        },
        {
          image: "url(../../images/p14_600x.webp)",
          desc: "Tempor chair",
          price: "$ 278.00",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
.container p {
  color: #6f5948;
  font-size: 1.8rem;
  margin-left: -10px;
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
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 250px;
  height: 390px;
  background-position: center top;
  border: 10px solid #6f5948;
  border-color: #e3e1e0;
  position: relative;
}
.text-content {
  text-align: center;
  position: absolute;
  color: #6f5948;
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
</style>
