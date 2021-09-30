<template>
    <div>
        <form @submit.prevent="submit_form">
            Post title:
            <br>
            <input type="text" class="form-control" v-model="fields.title">
            <div class="alert alert-danger mt-2" v-if="errors && errors.title">
                {{ errors.title[0] }}
            </div>
            <br>
            Post text:
            <br>
            <textarea rows="10" class="form-control" v-model="fields.post_text"></textarea>
            <div class="alert alert-danger mt-2" v-if="errors && errors.post_text">
                {{ errors.post_text[0] }}
            </div>
            <br>
            Category:
            <select class="form-control" v-model="fields.category_id">
                <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
            </select>
            <div class="alert alert-danger mt-2" v-if="errors && errors.category_id">
                {{ errors.category_id[0] }}
            </div>
            <br>
            <input type="submit" class="btn btn-primary"
                   :value="form_submitting ? 'Saving Post...' : 'Submit'"
                   :disabled="form_submitting">
            <br>

        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            categories : {},
            fields: {
                title: '',
                post_text: '',
                category_id: ''
            },
            errors: {},
            form_submitting: false,
        }
    },
    mounted() {
        axios.get('/api/categories')
            .then(response => {
                this.categories = response.data.data;
            });

        axios.get('/api/posts/edit/' + this.$route.params.id)
            .then(response => {
                this.fields = response.data.data;

            });
    },
    methods:{
        submit_form(){
            this.form_submitting = true;
            axios.put('/api/posts/update/' + this.$route.params.id, this.fields)
                .then(response => {
                    this.$swal({icon: 'success', title:'Post updated successfully'});
                    this.$router.push('/');
                    this.form_submitting = false;
                })
                .catch(error=>{
                    this.$swal({icon: 'error', title: 'Error happened'})
                    if(error.response.status === 422){
                        this.errors = error.response.data.errors;
                    }
                    this.form_submitting = false;

                })
        }
    }
}
</script>

<style scoped>

</style>
