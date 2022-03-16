<template>
  <app-header></app-header>
        <div class="container">
            <compTransitionsOne></compTransitionsOne>
        </div>
    <app-footer></app-footer>
</template>

<script>
  import compTransitionsOne from './components/Transitions/one';

  export default{
    components:{
      compTransitionsOne
    }
  }
</script>
