<template>
    <h3>Mike is on</h3>
</template>

<script>
    export default {
        name:'mike',
        mounted(){
            console.log('mike mounted')
        },
        activated(){
            console.log('hello mike!!')
        },
        deactivated(){
            console.log('by mike!!')
        },
        unmounted(){
            console.log('Mike unmounted')
        }
    }
</script>