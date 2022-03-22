<template>
    <div v-if="loading">
        <app-Loader></app-Loader>
    </div>
    
    
    <div class="row" v-else>

        <div 
            class="col-auto mb-4"
            v-for="user in users"
            :key="user.id"
        >
            <div class="card" style="width: 14rem;">
                <img 
                
                    class="card-img-top" 
                    :src="'https://placebeard.it/300/300?'+ user.id"  
                    alt="Card image cap"
                
                >
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{user.name}}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong> {{user.lastname}}
                    </div>
                </div>
            </div>
        </div>

    </div>
   
</template>


<script>
    import axios from 'axios';

    export default{

        data(){
            return{
                users:[],
                loading: true
            }
        },

        methods:{
            loadUsers(){
                axios.get('http://localhost:3000/users')
                .then(response => {
                    this.users = (response.data)
                    this.loading= false
                })
                .catch(error => {
                    this.$toast.error('something wrong', {
                        positions: 'bottom',   
                    });
                    console.log(error);
                })
                
            }   
        },

        mounted(){
            console.log('load data')
            this.loadUsers()
        }
    }



</script>