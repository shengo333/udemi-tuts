<template>
    <div>
        <button class="btn btn-primary" @click="status=!status">Toggle status</button>
        <transition 
            mode="out-in" 
            name="shengo" 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"    
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"    
        >
            <div class="p-3 mb-2 bg-danger text-white" v-if="!status" key="status_off">
                OFF
            </div>
            <div class="p-3 mb-2 bg-success text-white" v-else key="status_on">
                ON
            </div>
        </transition>

        <hr/>
        
        <button class="p-3 mb-2 bg-success text-white" @click="library = !library">
            Toggle library animation
        </button>
        <transition 
            name="costume-class-animate-css" 
            enter-active-class="animate__animated animate__backInDown" 
            leave-active-class="animate__animated animate__backOutLeft"
        >
            <div class="p-3 mb-2 bg-info text-white" v-if="library">
                animate css transition
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    data(){
        return{
            status: false,
            library: false,       
        }   
    },
    methods: {
        beforeEnter(){
            console.log('before enter')
        },
        enter(){
            console.log('enter')
        },
        afterEnter(){
            console.log('after enter')
        },
        beforeLeave(){
            console.log('before leave')
        },
        leave(el){
            console.log('leave', el)
        },
        afterLeave(){
            console.log('after leave')
        },
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