<template>
<transition appear>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand mr-5 text-info">
      <img src="../assets/logo.png" width="30" class="mr-3" height="auto">
      KoPaTK
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item mr-3">
          <router-link class="nav-link" to="/shop-kopatik">Boutique</router-link>
          <!-- <a class="nav-link" :class="{ active: page === 'User'}" @click="changePage('User')">Boutique</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin-kopatik">Admin</router-link>
          <!-- <a class="nav-link" :class="{ active: page === 'Admin'}" @click="changePage('Admin')">Admin</a> -->
        </li>
      </ul>
    </div>
    <div class="nav-item marg-0">
        <a class="nav-link text-right marg-return" href="http://vps-3b5cc28b.vps.ovh.net/">
          <i class="fas fa-angle-double-left fa-sm mr-2 mt-3"></i>Retour à la liste
        </a>
    </div>
  </nav>
</transition>
</template>

<script>
// import { eventBus } from '../main';

export default {
  // data() {
  //   return {
  //     page: eventBus.page
  //   }
  // },
  // methods: {
  //   changePage(page) {
  //     eventBus.changePage(page);
  //   }
  // },
  // created() {
  //   eventBus.$on('update:page', (page) => {
  //     this.page = page;
  //   })
  // },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        })
        const nav = document.querySelector(`#${ binding.value }`);
        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')){
            nav.classList.remove('show');
          }else{
            nav.classList.add('show');
          }
          e.stopPropagation();
        })
        // console.log({ nav });
      }
    }
  }
}
</script>

<style scoped>
  router-link {
    cursor: pointer;
  }
  .router-link-active{
    color: white !important;
    font-weight: 600 !important;
  }

  a {
    color: #ccc !important;
    cursor: pointer;
  }

  a.active {
    color: white !important;
  }

  a:hover {
    color: #bbb !important;
  }

  .marg-0 {
    padding: 0 !important;
    margin: 0 !important;
  }
  .marg-return{
    padding: 0 !important;
    margin-top: 0!important;
    margin-bottom: .8rem !important;
    margin-left: 0 !important;
    margin-right: 3rem !important;
    line-height: 1 !important;
  }
  .marg-return:hover{
    text-decoration: underline;
  }
  @keyframes fromtop{
    from {
      transform: translateY(-20px);
  }
    to {}
  }

  .v-enter-active{
    animation: fromtop 1s;
  }

</style>