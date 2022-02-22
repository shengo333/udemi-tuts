<template>

    <div v-awesome.red.big="textToRender"></div>
    <div v-awesome.blue.small="textToRender"></div>
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