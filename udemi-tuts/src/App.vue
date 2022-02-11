<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-user-profile 
                    :alsoKnowAs="name"
                    lastname="Jones"
                ></comp-user-profile>
                <button @click="updateName">Update name</button>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>

import compUserProfile from './components/User/profile.vue'
    
    export default {
        components:{
            compUserProfile
        },
        data(){
            return {
                name: "Rocket"
            }
        },
        methods:{
            updateName(){
                this.name ='Mike'
            }
        }
 
    }
</script>

<style>
    body {
        padding: 0;
        margin:0;
        font-family: 'Roboto', sans-serif;;
    }
    .container{
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>