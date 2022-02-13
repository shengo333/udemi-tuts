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
                    <span>Age:</span> {{ userAge }}
                </li>
                <h3>Parents:</h3>
                <ul>
                    <li v-for="(key,value,index) in userParents" :key="index">
                        <span>{{ value }}:</span> {{ key }}
                    </li>
                </ul>
            </ul>
            <button @click="updateLastname">Change from the child</button>
            <button @click="sayHello">Say hello</button>
            <button @click="updateAge(40)">Update age</button>
        </div>
</template>

<script>
    export default {
        props:{
            alsoKnowAs:String,
            userLastname:String,
            userAge:Number,
            userParents: Object,
            updateAge: Function
        },
        data(){
            return {
                name:'Steve'
            }
        },
        methods:{
            updateLastname(){
                this.$emit('update-lastname','Michelson')
            },
            sayHello(){
                this.$emit('say-hello')
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