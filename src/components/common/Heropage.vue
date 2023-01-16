<template>
  <div>
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/image/bg-image.jpg" height="450px" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item active">
          <img src="@/assets/image/bag-image.jpg" height="450px" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="shopping">
      <div class="row">
        <div class="heading col-md-3 col-sm-12 col-xs-12">
          <div class="text">
            <div class="text-content first">
              <h2>Why Choose Us ?</h2>
            </div>
          </div>
        </div>
        <div class="subtitle col-md-3 col-sm-4 col-xs-12">
          <div class="text">
            <div class="text-content">
              <h2>One time delivery</h2>
              <p>15% if not able</p>
            </div>
          </div>
        </div>
        <div class="subtitle col-md-3 col-sm-4 col-xs-12">
          <div class="text">
            <div class="text-content">
              <h2>Free delivery</h2>
              <p>Order over $ 200</p>
            </div>
          </div>
        </div>
        <div class="subtitle col-md-3 col-sm-4 col-xs-12">
          <div class="text">
            <div class="text-content">
              <h2>Quality Assurance</h2>
              <p>You can trust us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accessory">
      <div class="row row2">
        <div class="col-md-6 col-sm-12 col-xs-4 colum-1">
          <div class="text-content1">
            <p>Medical <span>Accessory</span></p>
            <h3>For shipping</h3>
            <p>Shop for $ 500</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-4 colum-2">
          <div class="text-content2">
            <p>Drug  <span>Medicine</span></p>
            <h3>Discount 20%</h3>
            <p>Shop for $ 200</p>
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
      img1: url('../assets/sub-banner.jpg'),
      img2: url('../assets/sub-banner2.jpg'),
    }
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}
.carousel-control-prev {
  width: 35px;
  height: 35px;
  background-color: aqua;
  color: #fff;
  position: absolute;
  top: 40%;
  left: 5%;
}
.carousel-control-next {
  width: 35px;
  height: 35px;
  background-color: aqua;
  color: #fff;
  position: absolute;
  top: 45%;
  right: 5%;
}
.shopping{
  max-width: 85%;
  margin: 10px auto;
  margin-top: 30px;
  height: 100px;
  font-weight: 400;
  padding-top: 2%;
  background-color: rgb(242, 242, 242);
}
.row{
  margin: 0 auto;
  position: relative;
}
.text .text-content h2{
  font-size: 16px;
}
.first h2{
  padding: 10px 0;
  height: 45px;
}
h2{
  color: #01b6c1;
}
.accessory{
  max-width: 85%;
  margin: 5% auto;
}
.row2{
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.colum-1{
  flex-basis: 49%;
  height: 300px;
  background-image: url('@/assets/sub-banner1.jpg');
  background-position: center;
  background-size: cover;
}
.colum-2{
  flex-basis: 49%;
  height: 300px;
  background-image: url('@/assets/sub-banner2.jpg');
  background-position: center;
  background-size: cover;
}
.text-content1{
  width: 170px;
  height: 80px;
  position: absolute;
  top: 20px;
  left: 18%;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
}
.text-content2{
  width: 170px;
  height: 80px;
  position: absolute;
  top: 20px;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 20px;
  text-align: center;
}
 p{
  margin-bottom: 4px;
}
.text-content1 p span, span{
  color: #01b6c1;
}
.text-content1 h3, h3{
  font-size: 12px;
  font-weight: bold;
}
</style>
