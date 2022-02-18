<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <button @click="this.activeComp = 'comp-mike'">Mike</button>
                <button @click="this.activeComp = 'comp-steve'">Steve</button>
                <!-- <comp-mike v-if="activeComp === 'comp-mike'"></comp-mike>
                <comp-steve v-if="activeComp === 'comp-steve'"></comp-steve> -->
                <component :is="activeComp"></component>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compMike  from './components/Players/mike.vue';
    import compSteve from './components/Players/steve.vue';
    export default {
        components:{
           compMike,
           compSteve
        },
        data(){
            return {
                activeComp:'comp-mike'
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