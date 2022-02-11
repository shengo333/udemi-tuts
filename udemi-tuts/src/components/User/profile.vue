<template>
        <div class="user_profile">
            <h3>User information</h3>
            <ul>
                <li>
                    <span>Name:</span> {{ name }}
                </li>
                 <li>
                    <span>Known as:</span> {{ alsoKnowAs }}
                </li>
                <li>
                    <span>Lastname:</span> {{ userLastname }}
                </li>
                <li>
                    <span>User Age:</span> {{ userAge }}
                </li>
                <ul>
                    <li v-for="(key, value, index) in userParents" :key="index" >
                       <span>  {{value}} </span> {{key}} 
                    </li>
                </ul>
            </ul>
        </div>
</template>

<script>
    export default {
        props:{
            alsoKnowAs: String,
            userLastname: String,
            userAge: Number,
            userParents: Object
            },
        data(){
            return {
                name:'leroy'
            }
        }
    }
</script>

<style>
    span {
        font-weight: 800;
    }
    .user_profile {
        border:1px solid #2196f3;
        padding:10px
    }
</style>