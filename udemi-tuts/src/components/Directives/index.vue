<template>

    <div v-user-lastname="lastname"></div>
    <div v-awesome.red.big="textToRender"></div>

    <button @click="this.textToRender = 'Something else'">
        Trigger update
    </button>
        <button @click="this.lastname = 'changed last name'">
        change jones
    </button>

</template>

<script>
export default {
    data(){
        return{
            textToRender:'Text from data',
            lastname:'Jones'
        }
    },
    directives:{
        'user-lastname':{
            beforeMount(el,binding){
                el.innerHTML =  binding.value;
            },
            beforeUpdate(el,binding){
                el.innerHTML =  binding.value;
            }
        }
    }
}    
</script>