<template>
    <div v-awesome.red.big="textToRender"></div>

    <button @click="this.textToRender = 'Something else'">
        Trigger update
    </button>

</template>

<script>
export default {
    data(){
        return{
            textToRender:'Text from data'
        }
    }
}    
</script>