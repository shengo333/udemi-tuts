<template>
    <h3>Steve is on</h3>
    <teleport to="#dialog_here">
        <comp-modal></comp-modal>
    </teleport>
</template>

<script>

    import compModal from '../Utils/modal.vue'


    export default {
        components:{
            compModal
        },
        name:'steve',
        unmounted(){
            console.log('Steve unmounted')
        }
    }
</script>