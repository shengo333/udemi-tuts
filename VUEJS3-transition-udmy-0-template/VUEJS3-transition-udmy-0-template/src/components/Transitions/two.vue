<template>
        <button class="btn btn-primary" @click="interrupt = !interrupt">
           INTERRUPT
        </button>
    

    <hr/>
    <div v-if="interrupt">
        <button class="btn btn-primary" @click="status = !status">
            Toggle status
        </button>

        <transition 
            mode="out-in"
            name="custom"
            enter-active-class="dog"
            leave-active-class="cat"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @enter-cancelled="enterCancelled"
            @leave-cancelled="leaveCancelled"
            :css="false"
        >
            <div
                class="p-3 mb-2 bg-danger text-white"
                v-if="!status"
                key="status_off"
            >OFF</div>
            <div
                class="p-3 mb-2 bg-success text-white"
                key="status_on"
                v-else
            >ON</div>
        </transition>

        <hr/>

        <button class="btn btn-primary" @click="library = !library">
            Toggle library anim
        </button>
        <transition
            name="custom-class-not-to-confuse-with-other-ones"
            enter-active-class="animate__animated animate__backInDown"
            leave-active-class="animate__animated animate__backOutLeft"
        >
              <div
                class="p-3 mb-2 bg-info text-white"
                v-if="library"
            >Hello</div>
        </transition>

     

    </div>
</template>

<script>
    import Velocity from 'velocity-animate';

    export default {
        data(){
            return {
                status: false,
                library: false,
                interrupt:true
            }
        },
        methods:{
            beforeEnter(el){
                el.style.opacity = 0;
            },
            enter(el,done){
                Velocity(el,{
                    opacity:1, fontSize:'20px'
                },{
                    duration:2000,
                    complete: done
                });
            },
            afterEnter(){
                console.log('afterEnter')
            },
            beforeLeave(){
                console.log('beforeLeave')
            },
            leave(el,done){
                Velocity(el,{
                    rotateZ:'180deg',
                    opacity:0
                },{
                    loop:2,
                    complete:done
                })
            },
            afterLeave(){
                console.log('afterLeave')
            },
            enterCancelled(){
                console.log('enterCancelled')
            },
            leaveCancelled(){
                console.log('leaveCancelled')
            }
        }
    }
</script>

<style>
    .custom-enter-from,
    .custom-leave-to  {
    opacity: 0;    
    }

    .dog,
    .cat {
        transition:5s;
    }

    .custom-enter-to,
    .custom-leave-from {
        opacity: 1;    
    }

</style>