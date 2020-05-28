<template>
  <div class="d-flex flex-row justify-content-between p-2">
    <span>{{item.title}}</span>
    <span><strong> {{item.price | price}}</strong></span>
    <button @click="deleteOne(item.id)" class="close">
      <span>&times;</span>
    </button>
  </div>
</template>

<script>
// import { eventBus } from '../../../../main';
import { mapMutations } from 'vuex';
 
export default {
  props: ['item'],
  methods: {
    // removeItemFromCart() {
    //   eventBus.removeItemFromCart({ ...this.item })
    // }
    ...mapMutations('cart', ['deleteOne'])
  }
}
</script>

<style>


</style>