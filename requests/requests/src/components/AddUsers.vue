<template>
    <h2>Add users</h2>
    <div v-show="loading">
        <app-Loader></app-Loader>
    </div>
    <div v-show="!loading">
        <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
        data(){
            return{
                loading: false,
                user:{ 
                    name:'',
                    lastname:''
                }
            }
        },
        methods:{
            submit(){
                this.loading = true,
                axios({
                  method: 'post',
                  url:('http://localhost:3000/users'),
                  data: this.user
                })
                .then(response => {
                    this.$toast.success('user added', {
                        position: 'bottom',
                        duration: false,
                    });
                    console.log(response)
                })
                .catch (error => {
                    this.$toast.error(error, {
                        position: 'bottom',
                        duration: false,
                    });
                })
                .finally(()=>{
                    this.loading= false
                })
            }
        }
}
</script>