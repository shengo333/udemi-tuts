<template>
    <div>
        <app-header></app-header>
            <div class="container">
              <comp-directives></comp-directives>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compDirectives from './components/Directives/index.vue';
    export default {
        components:{
            compDirectives
        },
        data(){
            return {
               
            }
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
