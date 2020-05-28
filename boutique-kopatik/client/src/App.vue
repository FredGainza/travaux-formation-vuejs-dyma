<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-colomn w-100">
        <!-- <component :is="page"></component> -->
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
// import User from './components/features/User/User';
// import Admin from './components/features/Admin/Admin';


export default {
  name: 'app',
  components: {
    TheHeader
  },

}
</script>

<style>
</style>
