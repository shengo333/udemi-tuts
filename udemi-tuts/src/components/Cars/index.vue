<template>
    <div>
        <h1>Welcome to the cars</h1>
        <div>
            <comp-list :cars="cars"></comp-list>
        </div>
    </div>
</template>

<script>
import compList from './list.vue';
export default {
    props:['cars'],
    components:{
        compList
    },
    data(){
        return {
        }
    }
}
</script>