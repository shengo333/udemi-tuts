<template>
    <div>
        <app-header></app-header>
        <div>
            content
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Footer from './components/header_footer/Footer.vue';
    export default {
        components:{
            'app-footer': Footer
        }
       
    }
</script>