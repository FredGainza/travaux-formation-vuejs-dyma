<template>
  <div class="w-item p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height:150px;" class="img-fluid" :src="product.img">
    </div>
    <div>
      <h3>{{ product.title }}</h3>
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div class="mb-3 text-right">
      <span class="text-info font-weight-bold">{{ product.price | price }}</span>
    </div>
    <div>
      <button @click="addOne(product)" class="btn btn-dark w-100 py-1">Commander</button>
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
  min-height: 400px;
}

p {
  font-size: 12px;
}

.w-item {
  width: 100%;
}

@media (min-width: 576px) {
  .w-item {
    width: 50%
  }
}
@media (min-width: 768px) {
  .w-item {
    width: 33%
  }
}
@media (min-width: 992px) {
  .w-item {
    width: 25%
  }
}

</style>