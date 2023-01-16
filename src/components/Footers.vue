<template>
    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="content">
              <a href="#"
                ><img src="../../images/logo_2.webp" alt="" class="logo"
              /></a>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi dolore consequatur nulla eum harum non quis pariatur
                qui doloremque, molestiae consequuntur ipsam .
              </p>
              <div class="icons">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-google-plus-g"></i>
                <i class="fa-brands fa-tumblr"></i>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="content">
              <h2>Footer menu</h2>
              <ul>
                <li><a href="#">Help</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">terms & Conditions</a></li>
                <li><a href="#">Shipping Details</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-2">
            <div class="content">
              <h2>Who We Are</h2>
              <ul>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Store Location</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-2">
            <div class="content">
              <h2>Information</h2>
              <ul>
                <li><a href="#">Workplace</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Facilities</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-3">
            <div class="content">
              <h2>Contact us</h2>
              <ul>
                <li>
                  <a href="#"
                    ><address>
                      <i class="fa fa-home"></i>
                      No: 58 A, East Madison Street, Baltimore, MD USA 4508
                    </address></a
                  >
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-phone"></i>
                    0000 - 123 - 456789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@example.com">
                    <i class="fa fa-envelope"></i>
                    info@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.footer-content {
  width: 100%;
  height: 450px;
  background-color: #1e1c1c;
  color: #fff;
}
.container {
  max-width: 60%;
  margin: 10% auto;
  padding: 10% 0 0;
}
.logo {
  max-height: 200px;
}
a img {
  border: 0;
}
img {
  border-style: none;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
}
.content {
  font-size: 11px;
}
.content p {
  padding-top: 10px;
  padding-bottom: 10px;
}
.icons {
  display: flex;
  margin: 10px 0 10px;
}
.icons i {
  margin-right: 10px;
}
.content h2 {
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0;
}
.content ul li {
  list-style: none;
  margin-bottom: 10px;
}
.content ul li:last-child {
  margin-bottom: 0;
}
.content ul li a {
  text-decoration: none;
  font-size: 12px;
  color: #fff;
  transition: 0.4s;
}
.content ul li a:hover {
  color: #a68d7b;
}
</style>
