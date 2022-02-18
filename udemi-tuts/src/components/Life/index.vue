<template>
    <div>
        {{ text }}
    </div>
    <button @click="this.text = 'changed...'">
        Trigger update
    </button>
</template>

<script>
    export default {
        data(){
            return {
                text:'Life'
            }
        },
        beforeCreate(){
            console.log('1-beforeCreate')
        },
        created(){
            console.log('2-created')
        },
        beforeMount(){
            console.log('3-beforeMount')
        },
        mounted(){
            console.log('4-mounted')
        },
        beforeUpdate(){
            console.log('x-beforeUpdate')
        },
        updated(){
            console.log('x-updated')
        },
        beforeUnmount(){
            console.log('o-beforeUnmount')
        },
        unmounted(){
            console.log('o-unmounted')
        }
    }
</script>