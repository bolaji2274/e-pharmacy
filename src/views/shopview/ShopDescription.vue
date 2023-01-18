<template>
  <main>
    <div>
      <nav class="text-center content">
        <div class="container">
          <h1>product</h1>
          <a href="#">All</a>
          <span> / Alex Study Chair</span>
        </div>
      </nav>

      <div class="description">
        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-md-3">
              <div class="">
                <div class="colum1">
                  <h5>Category</h5>
                  <hr />
                  <div class="list-content">
                    <ul>
                      <li>
                        <a href="#">Elegant styles</a>
                        <i class="fa-solid fa-plus"></i>
                      </li>
                      <li>
                        <a href="#">Luxury collection</a>
                        <i class="fa-solid fa-plus"></i>
                      </li>
                      <li>
                        <a href="#">Casual dining</a>
                        <i class="fa-solid fa-plus"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="text-contents">
                    <h4>Best Seller</h4>
                  </div>
                  <div class="best-seller text-center">
                    <div class="text-content">
                      <p>Hetal Enterprises Chair</p>
                      <p class="price">$106.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-9">
              <div class="">
                <div class="row g-2">
                  <div class="col-6 cl2">
                    <div class="">
                      <!-- <img src="../../images/fall-leaves.webp" width="100px" height="100vh" class="img" alt="">
                                <img src="../../images/logo_1.avif">
                                <h1>Hello Wolrd</h1> -->
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="">
                      <div class="colum2">
                        <h3>Broomstick chair</h3>
                        <p>
                          <i class="fa fire"></i>
                          <span> Sold 36 Products in last 12 hours</span>
                        </p>
                        <div class="list-content2">
                          <p>Price: <span class="price">$178.00</span></p>
                          <p>Color: <span class="color">..</span></p>
                          <p>Material: <span class="material">Steel</span></p>
                          <p>Vendor: <span class="vendor">Colovos</span></p>
                          <p>Type: <span class="type">Chair</span></p>
                          <p>
                            Availability:
                            <span class="available">In stock</span>
                          </p>
                          <p>
                            Quantity:
                            <span class="quantity">
                              <button @click="decrease">-</button>
                              <input min="1" :value="counter" />
                              <button @click="increase">+</button>
                            </span>
                          </p>

                          <button class="btn1">Add to Cart</button>
                          <button class="btn1">Add to wishlist</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="information">
                    <div class="btn-information">
                      <button class="tablinks product">
                        Product Information
                      </button>
                      <button class="tablinks">Additional Information</button>
                      <button class="tablinks">Reviews</button>
                    </div>
                    <div class="tab-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui official.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    increase() {
      return this.counter >= 15 ? alert("Maximum order is 15") : this.counter++;
    },
    decrease() {
      return this.counter <= 1 ? (this.counter = 1) : this.counter--;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
.content {
  background: url("@/assets/images/fall-leaves.webp");
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
  width: 100%;
  position: relative;
}
.content::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  background: #000000;
  opacity: 0.6;
}
.content h1 {
  font-size: 28px;
  text-transform: uppercase;
  margin: 0px 0px 15px;
}
.content a {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
}
.content span {
  font-size: 15px;
}
.container {
  padding-top: 50px;
  color: #fff;
}
.colum1 {
  color: #6f5948;
  font-size: 14px;
}

.list-content ul li {
  margin-left: -30px;
  list-style: none;
  font-size: 12px;
  margin-bottom: 10px;
}
.list-content ul li a {
  text-decoration: none;
  color: #6f5948;
}
.list-content ul li i {
  float: right;
  font-size: 14px;
  font-weight: bold;
}
.best-seller {
  widows: 100%;
  height: 350px;
  background-image: url("@/assets/images/p12_600x.webp");
  background-position: center top;
  background-size: 300px 250px;
  background-repeat: no-repeat;
  border: 8px solid #e3e1e0;
  margin-top: 30px;
  position: relative;
}
.text-content {
  text-align: center;
  position: absolute;
  left: 80px;
  bottom: -6px;
}
.text-content p {
  font-size: 12px;
  font-weight: bold;
  margin-top: 20%;
}
.text-content p.price {
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 50px;
}
.cl2 {
  background: url("@/assets/images/p12_600x.webp");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 530px;
  /* border: 4px solid springgreen; */
}
.col-md-9 {
  overflow: auto;
  height: 550px;
}
.colum2 {
  color: #6f5948;
}
.list-content2 {
  width: 200px;
  margin: 20px 0;
}
.list-content2 p {
  padding: 10px 0;
}
.list-content2 p span {
  float: right;
  font-size: 13px;
}
.list-content2 .price {
  font-weight: 400;
}
.list-content2 .color {
  border: 2px solid #6f5948;
  padding: 4px 8px;
  border-radius: 50%;
}
.list-content2 .material {
  border: 2px solid #6f5948;
  padding: 4px 4px;
  font-size: 13px;
}
.list-content2 .available {
  color: #519271;
  font-size: 13px;
}
.quantity {
  width: 90px;
}
.quantity input {
  width: 20px;
  text-align: center;
  padding: 4px;
}
.quantity button {
  padding: 4px;
  width: 30px;
}
.btn1 {
  margin: 0px 15px 15px 0px;
  padding: 14px 15px 12px;
  color: #fff;
  background-color: #6f5948;
  transition: 0.5s;
  border: none;
  font-size: 13px;
}
.btn1:hover {
  background-color: #ceb19b;
}
.information {
  width: 100%;
}
.btn-information {
  display: flex;
  justify-content: space-between;
  width: 450px;
  font-size: 13px;
}
.tablinks {
  padding: 15px 20px;
  color: #fff;
  background-color: #6f5948;
  transition: 0.5s;
  border: none;
  font-size: 13px;
  transition: 0.5s;
}
.tablinks:hover {
  background-color: #ceb19b;
}
.product {
  background-color: #ceb19b;
}
.tab-content p {
  color: #6f5948;
  font-size: 13px;
  padding: 20px 5%;
  border: 1px solid #c5aa93;
}
</style>
