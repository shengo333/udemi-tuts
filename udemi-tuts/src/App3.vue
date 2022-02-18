<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-life v-if="showit"></comp-life>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compLife from './components/Life'
    export default {
        components:{
            compLife
        },
        data(){
            return {
               showit:true
            }
        },
        mounted(){
            setTimeout(()=>{
                this.showit = false;
            },3000)
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin:0;
        font-family: 'Roboto', sans-serif;;
    }
    .container{
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }
</style>