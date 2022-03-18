<template>
    <div>
        <button class="btn btn-primary" @click="status=!status">Toggle status</button>
        <transition mode="out-in" name="shengo">
            <div class="p-3 mb-2 bg-danger text-white" v-if="!status" key="status_off">
                OFF
            </div>
            <div class="p-3 mb-2 bg-success text-white" v-else key="status_on">
                ON
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    data(){
        return{
            status: false,       
        }   
    }
}
</script>


<style>
.shengo-enter-from,
.shengo-leave-to  {
   opacity: 0;    
}

.shengo-enter-active,
.shengo-leave-active {
    transition: 0.5s;
}

.shengo-enter-to,
.shengo-leave-from {
    opacity: 1;    
}
</style>