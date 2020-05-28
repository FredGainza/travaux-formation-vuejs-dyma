<template>
    <form @submit="trySubmit" class="d-flex flex-column ">
        <h3>Ajouter un produit :</h3>
        <hr class="w-100">
        <div class="form-group">
            <label type="text">Image</label>
            <input v-model="form.img" class="form-control">
        </div>
        <div class="form-group">
            <label type="text">Titre</label>
            <input v-model="form.title" class="form-control">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea v-model="form.description" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label>Prix</label>
            <input v-model.number="form.price" type="number" class="form-control">
        </div>
        <ul class="list-unstyled" v-if="errors.length">
            <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <button type="submit" class="btn btn-dark">Ajouter</button>
    </form>
</template>

<script>
// import { eventBus } from './../../../main'

export default {
    data() {
        return {
            form:{
                img: '',
                title: '',
                description: '',
                price: ''
            },
            errors: []
        }
    },
    methods: {
        trySubmit(e){
            e.preventDefault();
            if(this.formIsValid()){
                this.$store.dispatch('product/saveOne', {...this.form });
                // eventBus.addProduct({ ...this.form });
                this.resetForm();
                // eventBus.changePage('User');
                this.$router.push('/shop');
            }
        },
        resetForm() {
            this.form = {
                img: '',
                title: '',
                description: '',
                price: ''
            }
        },
        formIsValid() {
            this.errors = [];
            if(!this.form.img){
                this.errors.push('Une image est obligatoire')
            }
            if(!this.form.title){
                this.errors.push('Un titre est obligatoire')
            }
            if(!this.form.description){
                this.errors.push('Une description est obligatoire')
            }
            if(!this.form.price){
                this.errors.push('Un prix est obligatoire')
            }
            return this.errors.length ? false : true;
        },
        
    }
}
</script>

<style>
</style>