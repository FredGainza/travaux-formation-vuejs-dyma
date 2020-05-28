<template>
<transition appear>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      <img src="../assets/logo.png" width="30" height="auto">
      KoPaTK
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/shop-kopatik">Boutique</router-link>
          <!-- <a class="nav-link" :class="{ active: page === 'User'}" @click="changePage('User')">Boutique</a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin-kopatik">Admin</router-link>
          <!-- <a class="nav-link" :class="{ active: page === 'Admin'}" @click="changePage('Admin')">Admin</a> -->
        </li>
      </ul>
    </div>
    <div class="navbar-nav">
      <li class="nav-item text-right mr-5">
        <a href="http://vps-3b5cc28b.vps.ovh.net/">
          <i class="fas fa-angle-double-left fa-sm mr-2 mt-3"></i>Retour à la liste
        </a>
      </li>
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
    background-color: dimgrey;
    color: white !important;
  }

  a {
      cursor: pointer;
  }
  .active{
    background-color: dimgrey;
  }
  a.active {
    color: white !important;
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