<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height:150px;" :src="product.img">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price | price }}</span>
      <button @click="addOne(product)" class="btn btn-dark btn-sm float-right">Commander</button>
    </div>

  </div>
</template>

<script>
// import { eventBus } from '../../../../main';
import { mapMutations } from 'vuex';
export default {
  props: ['product'],
  methods: {
    // addProductToCart(){
    //   eventBus.addProductToCart({ ...this.product })
    // }
    // addOne() {
    //   this.$store.commit('cart/addOne', product);
    // }
    ...mapMutations('cart', ['addOne'])
  }
}
</script>

<style>
.product-container{
  height: 400px;
}

p {
  font-size: 12px;
}

</style>