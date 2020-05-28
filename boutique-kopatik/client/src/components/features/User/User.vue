<template>
    <div class="d-flex flex-user">
        <transition name="left" appear>
            <shop :products="products" class="w-prod pb-md-3 pb-0"></shop>
        </transition>
        <transition name="right" appear>
            <cart :cart="cart" class="w-cart pt-md-3 pt-0"></cart>
        </transition>
    </div>
</template>

<script>
import Shop from  './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
    components: {
        Shop,
        Cart
    },
    computed: {
        ...mapState('product', {
            products: 'datas'
        }),
        ...mapState('cart', {
            cart: 'datas'
        })
    },
    created(){
        this.$store.dispatch('product/fetchDatas')
    }
}
</script>

<style scoped>

    .flex-user {
        flex-direction: column;
    }

    @keyframes fromleft{
        from {
            transform: translateX(-20px);
        }
        to {}
    }

    @keyframes fromright{
        from {
            transform: translateX(20px);
        }
        to {}
    }

    .left-enter-active{
        animation: fromleft 1s;
    }
    .right-enter-active{
        animation: fromright 1s;
    }

    @media (min-width: 768px) {
        .flex-user {
            flex-direction: row;
        }
        .w-prod {
            width: 65%;
        }
        .w-cart {
            width: 35%;
        }
    }

    @media (min-width: 768px) {
        .w-prod {
            width: 75%;
        }
        .w-cart {
            width: 25%;
        }
    }
</style>