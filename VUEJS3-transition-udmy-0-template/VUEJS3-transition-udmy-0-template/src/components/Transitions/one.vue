<template>

    <transition>
        <div 
            class="p-3 mb-2 bg-success text-white"
            v-if="display"
        >
            Hello    
        </div>
    </transition>
    <button class="btn btn-primary" @click="display = !display">
        Toggle
    </button>
    <hr/>

    <transition>
        <div 
            class="p-3 mb-2 bg-warning text-white"
            v-if="display2"
        >
            Hello 2  
        </div>
    </transition>
    <button class="btn btn-primary" @click="display2 = !display2">
        Toggle display 2
    </button>
    <hr/>

    <transition name="slide">
        <div 
            class="p-3 mb-2 bg-info text-white"
            v-if="display3"
        >
            Hello 3
        </div>
    </transition>
    <button class="btn btn-primary" @click="display3 = !display3">
        Toggle display 
    </button>

     <hr/>

    <transition name="slideup">
        <div 
            class="p-3 mb-2 bg-info text-white"
            v-if="diaplay4"
        >
            Hello 4
        </div>
    </transition>
    <button class="btn btn-primary" @click="diaplay4 = !diaplay4">
        Toggle display 4
    </button>

    <transition name="beka">
        <div class="p-3 mb-2 bg-info text-white" v-if="display5">
            hello beka
        </div>
    </transition>
    <button class="btn btn-primary" @click="display5=!display5"> 
        toggle beka
    </button>


</template>

<script>
    export default {
        data(){
            return {
                display: false,
                display2: false,
                display3: false,
                diaplay4: false,
                display5: false,
            }
        }
    }

</script>

<style>

.v-enter-from,
.v-leave-to  {
   opacity: 0;    
}

.v-enter-active,
.v-leave-active {
    transition: 1s;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;    
}

/*===================================*/

.slide-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-enter-active {
    transition: all 1s ease;
}

.slide-enter-to {
    opacity: 1;
}

.slide-leave-from {
    opacity: 1;
    background-color:red !important;
}

.slide-leave-active {
    transition: all 1s ease;
}

.slide-leave-to  {
    opacity: 0;
    background-color:black !important;
    transform: translateX(100px);
}

/*===================================*/


.slideup-enter-active {
    animation: slideUp .5s ease-in-out;
}

.slideup-leave-active {
    animation: slideDown .5s ease-in-out;
}



@keyframes slideUp {
    from {
        opacity: 0;
        transform:  translateY(10px);
    } to {
        opacity: 1;
        transform:  translateY(0px);
    }
}

@keyframes slideDown {
    from {
        opacity: 1;
        transform:  translateY(0px);
    } to {
        opacity: 0;
        transform:  translateY(10px);
    }
}

.beka-enter-from,
.beka-leave-to  {
   opacity: 0;    
}

.beka-enter-active,
.beka-leave-active {
    transition: 1s;
}

.beka-enter-to,
.beka-leave-from {
    opacity: 1;    
}


</style>