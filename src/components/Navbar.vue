<template>
<div class="nav-container">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand">
                    <a class="navbar-brand" href="#"><img src="../../images/logo_1.avif" style="max-width: 205px" alt="Furni"></a>
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <!-- <div class="navbar-nav" v-for="link in links" :key="link">
                        <a class="nav-link active" aria-current="page" href="#">{{ link.name }}</a>
                    </div> -->
                    <div class="search">
                        <form action="">
                            <input type="search" class="search" placeholder="Search">
                            <button type="submit"><i class="fa-solid fa-magnifying-glass"></i> </button>
                           
                        </form>
                    </div>
                </div>
                <ul class="nav justify-content-end">

                    <li class="btn btn-light"><a href="#">Login</a></li>
                    <li class="btn btn-light"><a href="#">Sign Up</a></li>
                    <li> <i class="fa-solid fa-box-check"></i> </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>

export default {
  data() {
        return {
            links: [
                { name: 'Home' },
                { name: 'About' },
                { name: 'Portfolio' },
                { name: 'Pricing' }
            ],
            contact: 'Contact us'
        }
    },
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.nav-container{
    max-width: 100%;
    margin: 0 auto;
    background-color: #f5f5f5;
    height: 100px;
}
.nav-container .container-fluid{
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 70%;
    margin: 20px auto;
}
img{
    border-style: none;
    border: 0;
    vertical-align: middle;
    height: 60px;
}
a img{
    border: 0;
}
form{
    width: 100%;
    height: 37px;
    position: relative;
}
form input{
    padding: 7px 9px 6px 20px;
    border-radius: 20px 0px 0px 20px;
    opacity: 0.4;
    font-size: 13px;
}
form button{
    height: 36.5px;
    width: 60px;
    border-radius: 0px 20px 20px 0px;
    background-color: #6f5948;
    color: #fff;
    position: absolute;
    transition: 0.8s;
}
.search button:hover{
    opacity: 0.6;
}
ul li{
    margin-left: 10px;
}
ul li a{
    text-decoration: none;
    color: grey;
    font-size: 1.5rem;
    padding: 5px;
}
</style>