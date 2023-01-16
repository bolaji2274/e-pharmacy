
<template>
  <div class=" d-flex drug-detail-outer">
    <Navbar/>
    <div class="drug-detail">
        <div class="container mb-5">
            <h4 class="my-4 fw-600">Add Item To Cart</h4>
            <div class="row">
                <div class="col-md-4" style="cursor: pointer;">
                <img :src="detail.url" width="250px" height="300px" style="border-radius:15px; padding: 5%; border-radius: 30px;">
                </div>
            <div class="col-md-4" style="cursor: pointer;">
                <h5 class="my-4 fw-600">Name: {{detail.name}}</h5>
                 <h5 class="my-4 fw-600">Price: {{detail.price}} </h5>
                  <h5 class="my-4 fw-600">Description: {{detail.description}}</h5>
                   <h5 class="my-4 fw-600">Rating: {{detail.rate}}</h5>
                   <div>
                    <button @click="goToCart" class="btn btn-primary">Go To Cart</button>
                    <button type="button" class="btn btn-success" @click="addToCart">Add Item</button>
                    <button type="button" class="btn btn-danger" @click="removeItem">Remove Item</button>
                   </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script> 
import Navbar from '@/components/common/Navbar.vue'

export default {
    components: {
        Navbar,
    },
        data() {
        return {
            detail: this.$route.params
        }
    },
    methods: {
        goToCart(){
            this.$router.push("/cart");
        },
        removeItem(){
            // this.$store.commit("removeItem", this.detail);
            this.$store.dispatch("removeItem", this.detail);
        },
        addToCart(){
            // this.$store.commit("addToCart");
            this.$store.dispatch("addToCart", this.detail);
        },
        
    },
    created(){
        if (this.$route.params.id !== undefined)
            localStorage.setItem("detail", JSON.stringify(this.$route.params));
    },
    mounted(){
        this.detail = JSON.parse(localStorage.getItem("detail"));
    }
}
</script>

<style scoped>
.drug-detail-outer{
    flex-direction: column;
    height: 100vh;
    /* background: #efe9e2; */
    background-image: url('@/assets/image/bag-image.jpg');
}
.drug-details{
    /* background: #efe9e2; */
    flex: 1;
    overflow-y: auto;
    color: brown;
}
.fw-600 {
    font-weight: 600;
    color: #4c4cac;
}
.col-md-4{
    background: #f4e8d9;
}
</style>