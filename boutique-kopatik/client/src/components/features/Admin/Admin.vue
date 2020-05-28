<template>
    <div class="d-flex w-100 flex-row justify-content-center p-5">
        <admin-product-form class="w-admin"></admin-product-form>
    </div>
</template>

<script>
import AdminProductForm from './AdminProductForm';
export default {
    components: {
        AdminProductForm
    }
}
</script>

<style scoped>
    .w-admin {
        width: 90%;
    }

    @media (min-width: 768px) {
        .w-admin {
            width: 70%;
        }
    }

    @media (min-width: 992px) {
        .w-admin {
            width: 50%;
        }
    }
</style>