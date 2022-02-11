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
                    <span>Lastname:</span> {{ lastname }}
                </li>
            </ul>
        </div>
</template>

<script>
    export default {
        props:['alsoKnowAs','lastname'],
        data(){
            return {
                name:'Steve'
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