<template>
  <div>
    <div class="containers">
      <div class="container-fluids">
        <div class="text-content">
          <h1>Sofa Set with Lounger</h1>
          <p>Reveal Yourself THROUGH YOUR CHOICE</p>
          <button type="submit" class="myBtn">SHOP NOW</button>
        </div>
      </div>
    </div>
    <div id="card">
      <div class="card-content">
        <div class="containers">
          <div class="row">
            <div
              class="colum-1"
              v-for="item in items"
              :key="item"
              :style="{ backgroundImage: item.image }"
            >
              <div class="text">
                <p>{{ item.tags }}</p>
                <h1>{{ item.title }}</h1>
                <p>{{ item.desc }}</p>
                <RouterLink to="/readmore"
                  ><button type="submit" class="myBtn">
                    {{ item.button }}
                  </button></RouterLink
                >
              </div>
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
      items: [
        {
          image: "url(../../images/img1.webp)",
          tags: "Relax with yourself",
          title: "Coffe Tables",
          desc: "Lorem ipsum sit armet, consectur adispscing elit.",
          button: "SHOP NOW",
        },
        {
          image: "url(../../images/img2.webp)",
          tags: "Unwind with Tea",
          title: "Side Tables",
          desc: "Lorem ipsum sit armet, consectur adispscing elit.",
          button: "SHOP NOW",
        },
        {
          image: "url(../../images/img3.webp)",
          tags: "Poll Side Corner",
          title: "Dining Tables",
          desc: "Lorem ipsum sit armet, consectur adispscing elit.",
          button: "SHOP NOW",
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
  font-family: "Poppins", sans-serif;
}
.containers {
  height: 75vh;
  width: 100%;
}
.container-fluids {
  background-image: url("../../images/furni-slideshow_1.webp");
  background-size: cover;
  height: 100%;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px 10%;
  position: relative;
}
.text-content {
  position: absolute;
  top: 40%;
  left: 10%;
  color: #fff;
}
.text-content h1 {
  padding: 10px 0 10px;
  font-size: 2.8rem;
}
.text-content p {
  font-size: 14px;
}
.myBtn {
  width: 100px;
  height: 40px;
  font-size: 13px;
  color: #6f5948;
  background-color: #fff;
  margin-top: 20px;
  padding: 5px;
  transition: 0.45s;
}
.myBtn:hover {
  color: #fff;
  background-color: #6f5948;
}
.row {
  height: 65%;
  width: 100%;
  max-width: 90%;
  margin: 5% auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.colum-1 {
  flex-basis: 33%;
  background-size: cover;
  background-position: center;
}

.text {
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 80%;
  color: #6f5948;
  margin: 50% auto;
  font-size: 12px;
}
</style>
