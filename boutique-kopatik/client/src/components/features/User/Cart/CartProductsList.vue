<template>
  <div class="d-flex flex-column p-5">
    <h3 class="border-bottom pb-3 text-center">Mon panier</h3>
    <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
    <template v-if="cart.length">
      <hr class="w-100">
      <span class="font-weight-bold text-right fz-110">Total : <span class="text-success">{{ total }} &nbsp;€</span></span>
    </template>
  </div>
</template>

<script>
import CartProductItem from './CartProductItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    CartProductItem
  },
  props: [ 'cart' ],
  computed: {
    // total() {
    //   return this.cart.reduce((acc, v) => {
    //     acc += v.price;
    //     return acc;
    //   }, 0)
    // }
    ...mapGetters('cart', ['total'])
  }

}
</script>

<style scoped>
  .fz-110 {
    font-size: 110% !important;
  }
</style>