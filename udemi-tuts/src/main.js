import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';

const app = createApp(App);

app.directive('awesome',{
    beforeMount(el,binding){

        el.style.color = binding.modifiers.red ? 'red':'blue';
        el.style.fontSize = binding.modifiers.big ? '20px':'10px';

        el.innerHTML = binding.value;

        // if(binding.arg === 'red'){
        //     el.style.color = 'red'
        // } else if(binding.arg === 'blue'){
        //     el.style.color = 'blue'
        // } else {
        //     el.style.color = 'green'
        // }
        // el.innerHTML = binding.value;
    }
});

app.component('app-footer',Footer);
app.component('app-header',Header);
app.mount('#app');
